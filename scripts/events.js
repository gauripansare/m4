

$(document).on("mouseover", ".qheight", function (event) {
    $(this).css({
        "font-weight": "bold"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#003058",
        "color": "#F9FF00"
    });

});
$(document).on("mouseout", ".qheight", function (event) {
    $(this).css({
        "font-weight": "normal"
    });
    $(this).children(".question_icon").children("span").css({
        "background-color": "#007AA2",
        "color": "#FFF"
    });
});
$(document).on("click", ".qheight", function (event) {
    $(".qheight").removeClass("optionselected");

    $(this).addClass("optionselected");

});
$(document).on("click", ".submitdata", function (event) {
     _ModuleCommon.checkboxcheckAns();
});
$(document).on("change", ".chkbox", function (event) {
   var length = $("input[type='checkbox']:checked").length;
   if(length >=1)
    {
        $(".submitdata").k_enable();
    }
    else
    {
        $(".submitdata").k_disable();
    }
});

$(document).on('click', "#continuebtn", function (event) {
    _ModuleCommon.OnContinue();
});
var hotspotclicked = false;;
var hotspot;
$(document).on("click", ".divHotSpot", function (event) {
    event.preventDefault();
    $(this).k_disable()
    if (hotspotclicked || _Navigator.IsAnswered())
        return;
    hotspotclicked = true;
    $(this).addClass("hotspotclicked")
    hotspot = $(this);
    setTimeout(function () {
        hotspotclicked = false;
        _ModuleCommon.HotspotClick(hotspot, event);
       
    },400)

    
    
});
$(document).on("dblclick", ".divHotSpotdbl", function (event) {
    event.preventDefault();
    $(this).k_disable()
    if (hotspotclicked || _Navigator.IsAnswered())
        return;
    hotspotclicked = true;
    $(this).addClass("hotspotclicked")
    hotspot = $(this);
    setTimeout(function () {
        hotspotclicked = false;
        _ModuleCommon.HotspotClick(hotspot, event);
       
    },400)
    
});
$(document).on("click", "#linkprevious", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Prev();
});
$(document).on("click", "#linknext", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});
$(document).on("click", ".btnretry", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});


$(document).on("click", ".hintlink", function (event) {
    if ($(this).hasClass("expanded")) {
        $(".hintlink").removeClass("expanded")
        $(".hintlink").attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
    }
    else {
        $(".hintcontainer").slideDown(100, function () {
            $(".hintlink").addClass("expanded");
            $(".hintlink").attr("aria-expanded", "true");
        });
    }

});
$(document).on("click", ".closehintlink", function (event) {

    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100);


});
$(document).on("keydown", "input.EmbededElement", function (event) {
    if ($(this).attr("disabled") || $(this).hasClass("disabled")) {
        event.preventDefault();
        return;
    }
    if (window.event) {
        key = window.event.keyCode;
    } else if (event) {
        key = event.keyCode;
    }
    if (key == 13) {
        _ModuleCommon.InputEnter($(this));
    }
});

$(window).resize(function () {
    _ModuleCommon.OrientationChange();
});

$(window).resize(function () {
});

$(document).on('click', ".activityimg", function (event) {
    return;
    if ($(".divHotSpot").hasClass("disabled") || $(".divHotSpot").length == 0)
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});

$(document).on('click', ".startbtn", function (event) {
 _Navigator.Next();
 //_Navigator.LoadPage("p7")
});
$(document).on('click', ".reviewsubmit", function (event) {
    _Navigator.Next();
});
$(document).on('mouseover', ".hintlink", function (event) {
    $(".hintlink .hintlinkspan").css({"color":"#b22222","border-bottom":"1px solid #b22222"})
    $(this).find("path").css({"fill":"#b22222"})
});

$(document).on('mouseout', ".hintlink", function (event) {
 $(".hintlink .hintlinkspan").css({"color":"#047a9c","border-bottom":"1px solid #047a9c"})
 $(this).find("path").css({"fill":"#047a9c"}) 
});

$(document).on("change", ".assessmentradio", function (event) {
    $(".assessmentSubmit").k_enable();    
});
$(document).on("change", ".computerradio", function (event) {
    $(".addtocart").k_enable(); 
    $(".computerradio").each(function(){
        $(this).prev("img").attr("src","assets/images/radiobtn-v2.png");
        $(this).next(".inpputtext").css("font-weight","normal");
        
    });
    $(this).prev("img").attr("src","assets/images/radiobtnsel-v2.png");
    $(this).next(".inpputtext").css("font-weight","bold");

});
$(document).on("change", ".computercheckbox", function (event) {
    if($("input[type='checkbox']:checked").length >0)
    {
        $(".addtocart").k_enable();    
    }
    else
    {
        $(".addtocart").k_disable();
    }
    $(".computercheckbox").each(function(){
        if($(this).prop("checked") == true)
        {
         $(this).prev("img").attr("src","assets/images/checkbox-sel-v1.png");
         $(this).next(".inpputtext").css("font-weight","bold");
        }
        else
        {
         $(this).prev("img").attr("src","assets/images/checkbox-v1.png");
         $(this).next(".inpputtext").css("font-weight","normal");
        }
    });
   
})

$(document).on("click", ".assessmentSubmit", function (event) {
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id") ;
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.Next();
});
$(document).on("click", ".addtocart", function (event) {
    if($(this).hasClass("disabled"))
        return;
    if(gComputerData.Questions[currentCompQuestionIndex].type == "checkbox")
    {
        gComputerData.Questions[currentCompQuestionIndex].UserSelectedOptionId =  $("input[type='checkbox']:checked").map(function () {
            return $(this).attr("id");
        }).get();
    }
    else
    {
        gComputerData.Questions[currentCompQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id") ;
       
    }
    gComputerData.Questions[currentCompQuestionIndex].IsAnswered = true;
    UpdateCart();
    
    _ModuleCommon.EnableNext()
    
});
$(document).on("click",".changecomputer",function(event){
    $("#div_feedback .div_fdkcontent").html("");
    $("#div_feedback").hide();
    $('html,body').animate({ scrollTop: document.body.scrollHeigh }, 500, function () { });
    $(".divHotSpot").k_enable();
    $(".divHotSpot").removeClass("hotspotclicked")
})
$(document).on("click",".beginbuild",function(event){
    _Navigator.SetPageStatus(true);
    _Navigator.Next();
    
});
$(document).on("click",".questiontab",function(){
    if($(this).hasClass("disabled"))
    return;

    var qid = parseInt($(this).attr("questionid"));
    currentCompQuestionIndex = qid -1;
    showComputerQuestion();

});
$(document).on("click",".tooltipicon",function(event){
    MCQTooltip.ShowInfo($(this));
    
});
$(document).on("click",".buildcomputer",function(event){
    if($(this).hasClass("disabled"))
        return;
    gComputerData.Status = "Completed";
    currentCompQuestionIndex = 12;
    _Navigator.LoadPage("p6"); 
  
});
$(document).on("click", "#radioCheckedUnchecked", function (event) {
    $(this).next("input").next(".inpputtext").trigger( "click" );
});

$(document).on("click", "#checkboxCheckedUnchecked", function (event) {
    $(this).next("input").next(".inpputtext").trigger( "click" );
});

$(document).on('click', ".inputcircle", function (event) {
    $(this).next(".inpputtext").trigger( "click" );
});



