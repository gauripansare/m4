﻿//This api will contain navigation logic and page load.
//It will also handle the question navigation if the page is having multiple questions.
var _Navigator = (function () {
    var packageType = "scorm";//presenter/scorm/revel
    var isReviewMode = false;
    var _currentPageId = "";
    var _currentPageObject = {};
    var progressLevels = [22];
    var totalsimscore = 18;
    //var presentermode = false;
    var bookmarkpageid = "";
    var quizpageid = "p7";
    var Summarybookmark = false;
    var _NData = {
        "p1": {
            pageId: "p1",
            prevPageId: "",
            nextPageId: "p2",
            dataurl: "p1.htm",
            isStartPage: true,
            isAnswered: true,

        },
        "p2": {
            pageId: "p2",
            prevPageId: "p1",
            nextPageId: "p3",
            dataurl: "p2.htm",
            hasActivity: false,

        },
        "p3": {
            pageId: "p3",
            prevPageId: "p2",
            nextPageId: "p4",
            dataurl: "p3.htm",
            //hinturl: "hintp3.htm",
            hasActivity: false,


        },
        "p4": {
            pageId: "p4",
            prevPageId: "p3",
            nextPageId: "p5",
            dataurl: "p4.htm",
            // hinturl: "hintp4.htm",
            hasActivity: true,

        },
        "p5": {
            pageId: "p5",
            prevPageId: "p4",
            nextPageId: "p6",
            dataurl: "p5.htm",
            //hinturl: "hintp5.htm",
            hasActivity: true,

        },
        "p6": {
            pageId: "p6",
            prevPageId: "p5",
            nextPageId: "p7",
            dataurl: "p6.htm",
            //hinturl: "hintp6.htm",

        },
        "p7": {
            pageId: "p7",
            prevPageId: "p6",
            nextPageId: "",
            dataurl: "p7.htm",
            hasActivity: true,
            isLastPage: true,
            isAssessment: true,
            hideHint: true,
        },

    }
    var _StateData = {}

    function OnPageLoad() {


        $("#header-title h1").show()
        $("#header-title").removeClass("startpage");
        if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
            $("#header-title h1").hide()
            $("#header-title").addClass("startpage");
        }
        _ModuleCommon.OnPageLoad();
        if (_Navigator.IsPresenterMode()) {
            $("#linknext").k_enable();
            //$(".startbtn").k_disable();
        }
        if (_Navigator.IsReviewMode()) {
            currentQuestionIndex = 0;
            $(".divHotSpotCommon").k_disable();
            $("input[type='radio']").k_disable();
            $("input[type='checkbox']").k_disable();
            $(".divHotSpot ").k_disable();
            $("#linknext").k_enable();
            $(".startbtn").link_k_disable();
        }
        if (_Navigator.IsPresenterMode() || _Navigator.IsReviewMode()) {
            if(isIphone || isAndroid){
                $("#header-progress .presentationModeFooter").hide();                        
            }
        }
        
    }
    return {
        Get: function () {
            return _NData;
        },
        Start: function () {
            this.LoadPage("p1");
            if (this.IsPresenterMode()) {
                _ModuleCommon.AppendFooter();
            }
            if (this.IsReviewMode()) {
                _ModuleCommon.AppendScormReviewFooter();
                _Assessment.SetCurrentQuestionIndex(0);
                _Computer.SetCurrentQuestionIndex(0);
            }

        },
        LoadPage: function (pageId, jsonObj) {
            $(".hintcontainer").hide()
            $(".header-content-dock").css({ "visibility": "hidden" });
            if (_Navigator.IsRevel() && _currentPageId != undefined && _currentPageId != "") {
                LifeCycleEvents.OnUnloadFromPlayer()
            }
            bookmarkpageid = pageId;
            if (jsonObj == undefined) {
                jsonObj = {};
            }
            _currentPageId = pageId;
            _currentPageObject = _NData[_currentPageId]
            if (_currentPageObject.hasActivity == undefined || _currentPageObject.hasActivity == false) {
                this.SetPageStatus(true)
            }
            this.UpdateProgressBar();
            $("#header-progress").show();
            $("#header-title").show();
            $("footer").show();
            $('html,body').css({ scrollTop: 0 })
            if (_currentPageObject.isStartPage != undefined && _currentPageObject.isStartPage) {
                $("#linkprevious").k_disable();
                $("#linknext").k_enable();
                $("footer").hide();
                $("#header-progress").hide();
                if (this.IsReviewMode()) {
                    _ModuleCommon.AppendScormReviewFooter();
                    _Assessment.SetCurrentQuestionIndex(0)
                }
                if (this.IsPresenterMode()) {
                    _ModuleCommon.AppendFooter();
                }

            }
            if (_currentPageObject.hasActivity != undefined && _currentPageObject.hasActivity && !this.IsAnswered()) {
                $("#linknext").k_disable();
            }
            if (this.IsAnswered()) {
                $("#linknext").k_enable();

            }
            if (_currentPageObject.isLastPage != undefined && _currentPageObject.isLastPage) {
                $("#linknext").k_disable();
            }


            _currentPageObject.isVisited = true;

            var pageUrl = _Settings.dataRoot + _currentPageObject.dataurl + _Caching.GetUrlExtension();
            if (_currentPageObject.pageId == "p3") { // temporary fix
                $("#progressdiv").css("margin-left", "-20px")
            }
            else {
                $("#progressdiv").css("margin-left", "-15px")
            }
            if (_currentPageObject.isStartPage) {
                $(".main-content").load(pageUrl, function () {
                    OnPageLoad();
                    //setReader("header1");
                    $("#header1").focus();
                    if (_Navigator.IsPresenterMode()) {
                        $(".wrapper-img").prepend('<div class="presentationModeFooter" >Presentation Mode</div>')
                        $("footer").show();
                        $("#linknext").k_enable();
                    }
                    if (_Navigator.IsReviewMode()) {
                        $(".wrapper-img").prepend('<div class="presentationModeFooter" >Review Mode</div>')
                        $("footer").show();
                        $("#linknext").k_enable();
                    }
                });
            } else {
                $(".main-content").fadeTo(250, 0.25, function () {
                    $(".main-content").html("");
                    $(".main-content").load(pageUrl, function () {
                        $(this).fadeTo(600, 1)
                        $(".hintcontainer").hide();
                        OnPageLoad();
                        $("#linkprevious").k_enable();
                        if (_currentPageId == "p4") {
                            //_Computer.UpdateCart();ATUL:not use
                        }
                        if (_currentPageId == "p5")//  change to assessment id
                        {

                            _Computer.showComputerQuestion();
                        }
                        if (_currentPageId == "p6") {
                            _Computer.showReviewSummary();
                        }
                        if (_currentPageId == quizpageid)//  change to assessment id
                        {
                            if (Summarybookmark) {

                                $(".intro-content-question").hide();
                                $(".questionwrapper").hide();
                                $("#Summary").show();
                                $("#Questioninfo").hide();
                                $("#Summary").load("pagedata/Summary.htm", function () {
                                    _Assessment.ShowSummary();                                    
                                    $("#linkprevious").k_enable();

                                })
                                $("#climate-deal").css("margin-left", "23%");
                                $("#linknext").k_disable();
                            }
                            else {
                                _Assessment.ShowQuestion();
                            }
                        }
                        if (_currentPageObject.pageId == "p2") {
                            $("#titleheader").attr({tabindex: "-1", role: "heading"}).focus();
                        }
                        else{
                            $("h2:first").attr({tabindex: "-1", role: "heading"}).focus();
                        }
                        /*
                        if (_currentPageId == "p2") {
                            $("#titleheader").focus();
                        }

                        else if ((isiPhone || isAndroid) && _NData[_currentPageId].isLoaded != undefined && _NData[_currentPageId].isLoaded == true) {//iphone android on previous focus is set to header
                            $("h2").focus();
                        }
                        else {
                            if (_currentPageId == "p4" && isiPhone) {
                                $("h2").focus();

                            }
                            else if (isChrome && !isAndroid) {
                                $("h2").focus();
                            }
                            else {

                                $("#progressdiv").focus();

                            }
                        }*/


                        if (_Navigator.IsPresenterMode()) {
                            _ModuleCommon.PresenterMode();
                        }
                        _NData[_currentPageObject.pageId].isLoaded = true;
                        //$("h2.pageheading").focus();
                        if ((/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent))) {
                            $('#footer-navigation').css('display', 'table');
                        }
                    });
                })
            }
            _Navigator.GetBookmarkData();
        },
GetSummarybookmark: function () {
            return Summarybookmark;
        },

        Prev: function () {
            Summarybookmark = false;
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Previous link click.")
            }
            if (_currentPageObject.pageId == "p5" && typeof (currentCompQuestionIndex) != 'undefined' && currentCompQuestionIndex > 0) {
                currentCompQuestionIndex = currentCompQuestionIndex - 1
                //$("#Questioninfo").show();
                _Computer.showComputerQuestion()
            }
            else if (_currentPageObject.pageId == quizpageid && typeof (currentQuestionIndex) != 'undefined' && currentQuestionIndex > 0) {
                $("#ReviewIns").hide();
                $(".intro-content-question").show();
                $("#Questioninfo").show();
                currentQuestionIndex = currentQuestionIndex - 1;
                $("#Summary").empty();
                $("#Summary").hide();
                _Assessment.ShowQuestion();
            }
            else {
                this.LoadPage(_currentPageObject.prevPageId);
            }

        },
        Next: function () {
            Summarybookmark = false;
            if (_Navigator.IsRevel()) {
                LifeCycleEvents.OnInteraction("Next link click.")
            }
            if (_currentPageId == "p5" && typeof (currentCompQuestionIndex) != 'undefined' && typeof (gComputerData.Questions) != 'undefined' && (currentCompQuestionIndex + 1) < gComputerData.Questions.length) {
                currentCompQuestionIndex = currentCompQuestionIndex + 1;
                _Computer.showComputerQuestion();
            }
            else if (_currentPageObject.pageId == quizpageid) {

                if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) < gRecordData.Questions.length) {
                    currentQuestionIndex = currentQuestionIndex + 1
                    $("#Questioninfo").show();
                    _Assessment.ShowQuestion()
                    if (gRecordData.Status != "Completed" && !this.IsPresenterMode() && !this.IsReviewMode()) {
                        $("#linknext").k_disable();
                        $("#linkprevious").k_disable();
                    }
                }

                else if (typeof (currentQuestionIndex) != 'undefined' && typeof (gRecordData.Questions) != 'undefined' && (currentQuestionIndex + 1) == gRecordData.Questions.length) {
                    //this.UpdateProgressBar();
                    // Show review instruction

                    $(".intro-content-question").hide();
                    $(".questionwrapper").hide();
                    currentQuestionIndex = currentQuestionIndex + 1;
                    $("#Summary").show();
                    $("#Questioninfo").hide();
                    $("#Summary").load("pagedata/Summary.htm", function () {
Summarybookmark = true;
                        _Navigator.GetBookmarkData();
                        _Assessment.ShowSummary()
                        $("#linkprevious").k_enable();

                    })
                    $("#climate-deal").css("margin-left", "23%");
                    $("#linknext").k_disable();


                }

            }
            else {

                this.LoadPage(_currentPageObject.nextPageId);
            }
        },
        GetProgressData: function () {
            var visitpage = 0;
            for (var i in _NData) {
                if (_NData[i].isAnswered != undefined && (_NData[i].isAnswered == true)) {
                    visitpage++;
                }
            }
            visitpage += this.GetAnswerCount() + this.GetComputerAnswerCount();
            return visitpage;
        },
        GetComputerAnswerCount: function () {
            var cnt = (gComputerData.Questions.filter(function (item) {
                return item.IsAnswered;
            }).length)

            return cnt;
        },
        GetAnswerCount: function () {
            var cnt = (gRecordData.Questions.filter(function (item) {
                return item.IsAnswered;
            }).length)
            cnt += gRecordData.Status == "Completed" ? 1 : 0;
            return cnt;
        },
        UpdateProgressBar: function () {
            var progData = this.GetProgressData();
            var lprog_pecent = (progData * 100 / progressLevels[0]).toFixed(0);
            $(".progressdiv").empty();
            $(".progressdiv").text("Progress: " + lprog_pecent + "%");
            $(".progressFg").css("width", lprog_pecent + "%");


        },
        GetCurrentPage: function () {
            return _currentPageObject;
        },
        CompletePage: function (extendedJson) {
            _currentPageObject.IsComplete = true;
            _currentPageObject = $.extend(true, _currentPageObject, extendedJson)
            _StateData[_currentPageObject.pageId] = $.extend(true, {}, _currentPageObject);
        },
        GetTotalScore: function () {
            var ObtainPoint = 0;

            for (var i in _NData) {
                if (_NData[i].points > 0) {
                    ObtainPoint += _NData[i].points
                }
            }
            var score = (ObtainPoint / totalsimscore) * 100;
            return score.toFixed(0);
        },
        UpdateScore: function () {
            var percScore = this.GetTotalScore()
            $("#scorediv").html("Score: " + percScore + "%");
        },
        SetPageScore: function (points) {
            if (!_currentPageObject.isAnswered) {
                _NData[_currentPageId].points = points;
                this.UpdateScore();
            }
        },
        IsReviewMode: function () {
            return isReviewMode;
        },
        SetIsReviewMode: function (isReviewModeStatus) {
            isReviewMode = isReviewModeStatus;
        },
        SetPageStatus: function (isAnswered) {
            if (isAnswered) {
                _NData[_currentPageObject.pageId].isAnswered = true;
                this.UpdateProgressBar();
            }

        },
        IsAnswered: function () {
            if (_currentPageObject.isAnswered != undefined && _currentPageObject.isAnswered)
                return true;

            return false;

        },
        IsLoaded: function () {
            if (_currentPageObject.isLoaded != undefined && _currentPageObject.isLoaded)
                return true;

            return false;

        },
        CheckIfPageLoaded: function (pageid) {
            return _NData[pageid].isLoaded != undefined && _NData[pageid].isLoaded ? true : false;
        },
        SetPresenterMode: function (val) {
            packageType = val;
        },
        IsPresenterMode: function () {
            if (packageType == "presenter") {
                return true;
            }
            else {
                return false;
            }
        },

        SetBookmarkData: function () {
            var bookmarkdata;
            if (this.IsScorm()) {
                bookmarkdata = _ScormUtility.GetSuspendData();
            }
            else if (this.IsRevel()) {
                bookmarkdata = JSON.stringify(k_Revel.get_StateData())
            }

            if (bookmarkdata != undefined && bookmarkdata != "") {
                bookmarkdata = JSON.parse(bookmarkdata);
                bookmarkpageid = bookmarkdata.BMPageId;
                Summarybookmark = bookmarkdata.Summarybookmark
                this.SetNavigatorBMData(bookmarkdata.VisistedPages)
                progressLevels = bookmarkdata.ProgressLevels;
                _ModuleCommon.SetReviewData(bookmarkdata.ReviewData)
                _Assessment.Setbookmarkdata(bookmarkdata.AssessmentData)
                _Computer.Setbookmarkdata(bookmarkdata.ComputerData)
            }
        },
        GetBookmarkData: function () {
            if (!this.IsScorm() && !this.IsRevel() && !this.IsReviewMode())
                return;
            var bookmarkobj = {}
            bookmarkobj.BMPageId = bookmarkpageid;
            bookmarkobj.VisistedPages = this.GetNavigatorBMData();
            bookmarkobj.ProgressLevels = progressLevels;
            bookmarkobj.ReviewData = _ModuleCommon.GetReviewData();
            bookmarkobj.AssessmentData = _Assessment.Getbookmarkdata();
            bookmarkobj.ComputerData = _Computer.Getbookmarkdata();
            bookmarkobj.Summarybookmark = _Navigator.GetSummarybookmark();
            if (this.IsRevel()) {
                if (k_Revel.get_LaunchData().mode == LaunchModes.do) {
                    var suspend_data = JSON.stringify(bookmarkobj);
                    k_Revel.set_StateData(JSON.parse(suspend_data))
                    k_Revel.PostData(gRecordData.Score, gRecordData.AssessmentScore);
                }
            }
            else if (this.IsScorm()) {
                _ScormUtility.SetSuspendData(JSON.stringify(bookmarkobj))
            }

        },
        GetNavigatorBMData: function () {
            var gVisistedPages = [];
            for (var i in _NData) {
                if (_NData[i].isAnswered) {
                    gVisistedPages.push(_NData[i].pageId)
                }
            }
            return gVisistedPages;
        },
        SetNavigatorBMData: function (gVisistedPages) {

            for (var i = 0; i < gVisistedPages.length; i++) {
                _NData[gVisistedPages[i]].isAnswered = true;
            }
        },

        SetBookMarkPage: function () {
         if (!this.IsScorm() && !this.IsRevel())
                return;
            if (this.IsReviewMode())
                return;
            if (this.IsScorm()) {
                _ScormUtility.SetBookMark(bookmarkpageid);
            }
            else if (this.IsRevel()) {
                this.GetBookmarkData();
            }
        },
        GetBookMarkPage: function () {
            return bookmarkpageid;
        },
        Initialize: function () {
            if (packageType == "scorm") {
                _ScormUtility.Init();
                _Navigator.SetBookmarkData();
                //bookmarkpageid = _ScormUtility.GetBookMark();
                if (_ScormUtility.IsScormReviewMode()) {
                    _Navigator.SetIsReviewMode(true);
                }
                this.GotoBookmarkPage();
            }
            else if (packageType == "revel") {
                g_tempIntv = setInterval(function () {
                    if ((typeof piSession != 'undefined' && typeof piSession.currentToken() != 'undefined' && piSession.currentToken() != null)) {
                        clearInterval(g_tempIntv);
                        g_tempIntv = null;
                        //The rest of the code will go here.
                        LifeCycleEvents.InitParams();
                        LifeCycleEvents.OnLoad();
                        if (!k_Revel.isLaunchInitialize()) {
                            k_Revel.InitLaunch()
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                var isTrue = this.SetBookmarkData();
                                if (isTrue && k_Revel.get_LaunchData().mode == "do") {
                                    this.GotoBookmarkPage();
                                } else {
                                    k_Revel.set_StateData(JSON.parse(suspend_data))
                                }
                            }
                        }
                        if (k_Revel.get_LaunchData().mode == "review") {
                            var suspend_data = JSON.stringify(k_Revel.get_StateData());
                            if (suspend_data != "" && suspend_data != "{}") {
                                this.SetBookmarkData(suspend_data);
                                isReview = true;
                            }
                        }
                    }
                }, 100);

            }
            else {
                _Navigator.Start();
            }
        },
        GotoBookmarkPage: function () {
            if (bookmarkpageid != undefined && bookmarkpageid != "" && !this.IsReviewMode()) {
                if (Summarybookmark) {
                    _Navigator.LoadPage(quizpageid);
                }
                else {
                    _Navigator.LoadPage(bookmarkpageid)
                }
            }
            else {
                _Navigator.Start();
            }
        },
        IsScorm: function () {
            if (packageType == "scorm")
                return true;

            return false;

        },
        IsRevel: function () {
            if (packageType == "revel")
                return true;
            return false;
        },
        GetPackageType: function () {
            return packageType;
        },
        GetQuizPageId: function () {
            return quizpageid;
        }
    };
})();


function setReader(idToStartReading) {
    $('#hiddenAnchor').attr("href", "#" + idToStartReading)
    $('#hiddenAnchor')[0].click()
}


