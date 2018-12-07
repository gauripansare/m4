var hotspotclicked = false;;
var hotspot;

$(document).on("click", ".divHotSpot", function (event) {
 if (_Navigator.IsPresenterMode()) {
        return;
    }
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

    }, 400)



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

    }, 400)

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
    if ($(this).k_IsDisabled()) return;
   var open = "open;"
    if ($(this).hasClass("expanded")) {
        $(".hintlink").removeClass("expanded")
        $(".hintlink").attr("aria-expanded", "false")
        $(".hintcontainer").slideUp(100);
        $(".pageheading").focus();
        open = "close";
    }
    else {
        $(".hintcontainer").slideDown(100, function () {
            $(".hintlink").addClass("expanded");
            $(".hintlink").attr("aria-expanded", "true");  
            $(".hintcontainer .hintcontent").find("p:first").attr("tabindex","-1")
            if(iOS)
            {
                $(".hintcontainer .hintcontent").find("p:first").attr("role","text")
            }
            $(".hintcontainer .hintcontent").find("p:first").focus(); 
        });
    }
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint " + open)
    }
     if(touchend){
        $(this).mouseout();
        touchend = false;
    }
   
});
$(document).on("click", ".closehintlink", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(".hintlink").removeClass("expanded")
    $(".hintlink").attr("aria-expanded", "false")
    $(".hintcontainer").slideUp(100,function(){$("h2.pageheading").focus();});
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnInteraction("Hint button click. Hint closed")
    }

});
$(document).on("keydown", "input.EmbededElement", function (event) {
    if ($(this).k_IsDisabled()) return;
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



$(document).on('click', ".activityimg", function (event) {
    return;
    if ($(".divHotSpot").hasClass("disabled") || $(".divHotSpot").length == 0)
        return;
    _ModuleCommon.AddEditPropertiesClick(event);
});

$(document).on('click', ".startbtn", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
    //_Navigator.LoadPage("p5")
});
$(document).on('click', ".reviewsubmit", function (event) {
    if ($(this).k_IsDisabled()) return;
    _Navigator.Next();
});
var touchend = false;
$(document).on('touchstart', ".hintlink", function (event) {
    mouseenter();
    touchend = false;
});
$(document).on('touchend ', ".hintlink", function (event) {
    mouseleave();
    touchend = true;
});


$(document).on('mouseenter', ".hintlink", function (event) {
    mouseenter();
});

$(document).on('mouseleave', ".hintlink", function (event) {
    mouseleave();
});

function mouseenter(){
    $(".hintlink .hintlinkspan").css({ "color": "#b22222", "border-bottom": "1px solid #b22222" })
    $(".hintlink").find("path").css({ "fill": "#b22222" })    
}
function mouseleave(){
    $(".hintlink .hintlinkspan").css({ "color": "#047a9c", "border-bottom": "1px solid #047a9c" })
    $(".hintlink").find("path").css({ "fill": "#047a9c" })
}



$(document).on("change", ".computerradio", function (event) {
    $(".addtocart").k_enable();
    $(".computerradio").each(function () {
        $(this).prev("img").attr("src", "assets/images/radiobtn-v2.png");
        $(this).next(".inpputtext").css("font-weight", "normal");

    });
    $(this).prev("img").attr("src", "assets/images/radiobtnsel-v2.png");
    $(this).next(".inpputtext").css("font-weight", "bold");

});
$(document).on("change", ".computercheckbox", function (event) {
    if ($("input[type='checkbox']:checked").length > 0) {
        $(".addtocart").k_enable();
    }
    else {
        $(".addtocart").k_disable();
    }
    var group = $(this).attr("group");
    var chkid =  $(this).attr("id")
    $(".computercheckbox").each(function () {
        if ($(this).prop("checked") == true) {
            $(this).prev("img").attr("src", "assets/images/checkbox-sel-v1.png");
            $(this).next(".inpputtext").css("font-weight", "bold");
            if(group!=undefined && $(this).attr("group")!=undefined && group == $(this).attr("group"))
            {
                if(chkid!= $(this).attr("id") )
                {
                    $(this).prop("checked",false)
                    $(this).prev("img").attr("src", "assets/images/checkbox-v1.png");
                    $(this).next(".inpputtext").css("font-weight", "normal");
                }
            }
        }
        else {
            $(this).prev("img").attr("src", "assets/images/checkbox-v1.png");
            $(this).next(".inpputtext").css("font-weight", "normal");
        }
        
    });

})


$(document).on("change", ".assessmentradio", function (event) {
    if ($(this).k_IsDisabled()) return;
    if ($(this).hasClass("disabled"))
        return;
    $(".assessmentSubmit").k_enable();
});
$(document).on("click", ".assessmentSubmit", function (event) {
    if ($(this).k_IsDisabled()) return;
    if (_Navigator.IsRevel()) {
        LifeCycleEvents.OnSubmit();
    }
    gRecordData.Questions[currentQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");
    gRecordData.Questions[currentQuestionIndex].IsAnswered = true;
    _Navigator.GetBookmarkData();
    _Navigator.Next();
});
$(document).on("click", ".addtocart", function (event) {
    if ($(this).hasClass("disabled"))
        return;
    if (gComputerData.Questions[currentCompQuestionIndex].type == "checkbox") {
        gComputerData.Questions[currentCompQuestionIndex].UserSelectedOptionId = $("input[type='checkbox']:checked").map(function () {
            return $(this).attr("id");
        }).get();
    }
    else {
        gComputerData.Questions[currentCompQuestionIndex].UserSelectedOptionId = $("input[type='radio']:checked").attr("id");

    }
    gComputerData.Questions[currentCompQuestionIndex].IsAnswered = true;
    _Computer.UpdateCart(true);
    _Navigator.GetBookmarkData();
    _ModuleCommon.EnableNext()

});
$(document).on("click", ".changecomputer", function (event) {
    $("#div_feedback .div_fdkcontent").html("");
    $("#div_feedback").hide();
    $('html,body').animate({ scrollTop: document.body.scrollHeight }, 500, function () {
        $("h2.pageheading").focus();
     });
    $(".divHotSpot").k_enable();
    $(".divHotSpot").removeClass("hotspotclicked")
})
$(document).on("click", ".beginbuild", function (event) {
    _Navigator.SetPageStatus(true);
    _Navigator.GetBookmarkData();
    _Navigator.Next();

});
$(document).on("click", ".questiontab", function () {
    if ($(this).hasClass("disabled"))
        return;

    var qid = parseInt($(this).attr("questionid"));
    currentCompQuestionIndex = qid - 1;
    _Computer.showComputerQuestion();

});
$(document).on("keyup", ".questiontab", function (event) {
    if ($(this).k_IsDisabled()) return;
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
       $(this).trigger("click")
    }
});
$(document).on("click", ".tooltipicon", function (event) {
    MCQTooltip.ShowInfo($(this));

});
$(document).on("keyup", ".tooltipicon", function (event) {
    if ($(this).k_IsDisabled()) return;
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
       $(this).trigger("click")
    }
});
$(document).on("click", ".buildcomputer", function (event) {
    if ($(this).hasClass("disabled"))
        return;
    gComputerData.Status = "Completed";
    currentCompQuestionIndex = 12;
    _Navigator.LoadPage("p6");

});
$(document).on("keyup", ".buildcomputer", function (event) {
    if ($(this).k_IsDisabled()) return;
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
       $(this).trigger("click")
    }
});
$(document).on("click", "#radioCheckedUnchecked", function (event) {
    $(this).next("input").next(".inpputtext").trigger("click");
});

$(document).on("click", "#checkboxCheckedUnchecked", function (event) {
    $(this).next("input").next(".inpputtext").trigger("click");
});

$(document).on('click', ".inputcircle", function (event) {
    if ($(this).k_IsDisabled()) return;
    $(this).next(".inpputtext").trigger("click");
});



window.onload = function () {
    _ScormUtility.Init();
}

window.onunload = function () {
    _ScormUtility.End();
}

window.addEventListener("scroll", function () {
   
    $(".hintdoc").parent().hide();
    var currPage = _Navigator.GetCurrentPage();
    if (currPage.pageId == "p1" )
        return;
    var target = $(".header-content-dock");

    if (window.pageYOffset > $("#header-content").height() - 10) {
        var width = $("#wrapper").width();
        target.css({ "visibility": "visible", "top": "0px", "width": width + "px" })
    }
    else if (window.pageYOffset < $("#header-content").height() - 10) {
        target.css({ "visibility": "hidden", "top": "-80px"})

    }
    
}, false);

$(document).on("blur", ".infodiv p", function (event) {
      var index = $(this).index(".infodiv p");
      var next = $(".infodiv p").get((index + 1))
      if (next == undefined) {          
          $(".navtipopen").focus();
      }
});

