

var numOfCompQuestion = 4
var numOfCompPagesInModule = 1 + numOfQuestion
var currentCompQuestionIndex = 0;
var introHTML = "";
//	- Progress logic = (visitedpages / total pages ) * 100 %
//  	"visitedNumberOfPages"  -- increase this by one on every page/question -- on next click?
var visitedNumberOfPages = 0;


var gRecordData = null;


//	- Score -- number of correct attempted questions divided by total number of questions
var AssessmentScore = 0;

var _Computer = (function () {
	return {
		Shuffle: function (array) {
			var currentIndex = array.length, temporaryValue, randomIndex;

			// While there remain elements to shuffle...
			while (0 !== currentIndex) {

				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		},
		showComputerQuestion: function () {
			MCQTooltip.Clear();
			currQuestion = gComputerData.Questions[currentCompQuestionIndex]
			if (gComputerData.Status == "NotStarted") {
				gComputerData.Status = "Started";
			}
			$(".questionheading").html(currQuestion.QuestionHeading)
			$(".questioninstruction").html(currQuestion.InstructionText)
			$(".questiontext").html(currQuestion.QuestionText)

			if (currQuestion.UserSelectedOptionId == "") {
				// randomize options
				//currQuestion.Options = shuffle(currQuestion.Options)
			}

			$(".questionoptions").empty();
			//$(".questionoptions").append("<legend aria-label='Options'></legend>");


			$("#linkprevious").k_enable();
			$("#linknext").k_disable();
			if (currQuestion.type == "button") {

				$(".buildcomputer").show();
				$(".addtocart").hide();
				if (gComputerData.CartCost > gComputerData.Budget) {
					$(".buildcomputer").k_disable();
					$(".questiontext").html(currQuestion.QuestionText1)
				}
				gComputerData.AllAnswered = true;
				this.ShowFeedback();
				$("#linknext").k_enable();
				if (gComputerData.AllAnswered == true && gComputerData.Status != "Completed" && currentCompQuestionIndex == gComputerData.Questions.length - 1) {
					$("#linknext").k_disable();
				}
				if (gComputerData.AllAnswered == "true" || gComputerData.Status == "Completed") {
					$(".computerwrapper input[type='button']").hide();
				}
				if (navigator.userAgent.toLowerCase().indexOf('safari')) {
					$(".questionoptions").css({ "height": "unset", "overflow-y": "unset" });
				}
				this.UpdateCart();
				$("#progressdiv").focus();
				return;
			}
			else {
				for (var i = 0; i < currQuestion.Options.length; i++) {
					if (currQuestion.type == "checkbox") {
						optionObj = $(".checkoption").clone();
						optionObj.removeClass("checkoption");
						optionObj.find("img").attr("src", "assets/images/checkbox-v1.png");
						if (currQuestion.Options[i].checkboxgroup != undefined) {
							optionObj.find("input").attr("group", currQuestion.Options[i].checkboxgroup)
						}

					}
					else {
						optionObj = $(".radiooption").clone();
						optionObj.removeClass("radiooption");
						optionObj.find("img").attr("src", "assets/images/radiobtn-v2.png");
					}
					//optionObj.attr("for", currQuestion.Options[i].OptionId);
					optionObj.find("input").attr("name","options")
					optionObj.find("input").attr("id", currQuestion.Options[i].OptionId);
					optionObj.find("input").css("position", "absolute");
					optionObj.find(".inpputtext").html(currQuestion.Options[i].OptionText);
					optionObj.find(".inpputtext").attr("for", currQuestion.Options[i].OptionId)

					optionObj.show();

					$(".questionoptions").append(optionObj);
					if (currQuestion.Options[i].iscorrect != undefined && currQuestion.Options[i].iscorrect && gRecordData.Status == "Completed") {
						optionObj.find(".inpputtext").addClass("greenspan")
					}
					if (currQuestion.UserSelectedOptionId != undefined) {
						if ($.isArray(currQuestion.UserSelectedOptionId)) {
							if (currQuestion.UserSelectedOptionId.indexOf(currQuestion.Options[i].OptionId) >= 0) {
								$("#" + currQuestion.Options[i].OptionId).prop("checked", "true");
								$("#" + currQuestion.Options[i].OptionId).prev("img").attr("src", "assets/images/checkbox-sel-v1.png")
								$("#" + currQuestion.Options[i].OptionId).next(".inpputtext").css("font-weight", "bold");

								if (gRecordData.Status == "Completed" && (currQuestion.Options[i].iscorrect == undefined || currQuestion.Options[i].iscorrect == false)) {
									$("#" + currQuestion.Options[i].OptionId).next(".inpputtext").addClass("redspan");
								}

							}
						}
						else if (currQuestion.UserSelectedOptionId == currQuestion.Options[i].OptionId) {
							$("#" + currQuestion.Options[i].OptionId).prop("checked", "true");
							$("#" + currQuestion.Options[i].OptionId).prev("img").attr("src", "assets/images/radiobtnsel-v2.png")
							$("#" + currQuestion.Options[i].OptionId).next(".inpputtext").css("font-weight", "bold");

							if (gRecordData.Status == "Completed" && (currQuestion.Options[i].iscorrect == undefined || currQuestion.Options[i].iscorrect == false)) {
								$("#" + currQuestion.Options[i].OptionId).next(".inpputtext").addClass("redspan")
							}

						}

						$("#linknext").k_enable();

					}
				}
				$(".addtocart").show();

			}
			if (currentCompQuestionIndex == 11) {
				$(".questionoptions").css({ "margin-top": "-15px" });
				$(".questiontext").css({ "margin-top": "-20px" })
				if (navigator.userAgent.toLowerCase().indexOf('safari')) {
					$(".questionoptions").css({ "height": "255px", "overflow-y": "auto" });
				}
			}
			else {
				$(".questionoptions").css({ "margin-top": "unset" });
				$(".questiontext").css({ "margin-top": "unset" })
				if (navigator.userAgent.toLowerCase().indexOf('safari')) {
					$(".questionoptions").css({ "height": "unset", "overflow-y": "unset" });
				}
			}
			this.UpdateCart();
			if (currQuestion.UserSelectedOptionId != undefined && currQuestion.UserSelectedOptionId != "") {
				$(".addtocart").attr("value", "Update cart");
				$(".addtocart").k_enable();
			}

			else {
				$(".addtocart").attr("value", "Add to cart");
				$(".addtocart").k_disable();
			}


			if (_Navigator.IsPresenterMode()) {
				//showQuestionPresenterMode();
			}
			if (gComputerData.Status == "Completed") {
				$(".computerwrapper input").k_disable();
			}
			if (gComputerData.AllAnswered == "true" || gComputerData.Status == "Completed") {
				$(".computerwrapper input[type='button']").hide();
			}
			this.ShowFeedback();
			$("#progressdiv").focus();
		},
		UpdateCart: function (shiftfocus) {

			$(".cartitem").empty();
			if ($(".cartcomputername").length == 0) {
				$(".cartitem").before("<p class='cartcomputername'>" + gComputerData.baseunitname + "</p>")
			}
			$(".cartitem").append("<p class='cartcartprice'><span class='cartopttext font14'><b>Starting price</b></span><span class='cartoptprice font14'>$" + gComputerData.baseunitprice + "</span></p>")
			var ccost = parseInt(gComputerData.baseunitprice);
			for (var i = 0; i < gComputerData.Questions.length; i++) {
				var currQuestion = gComputerData.Questions[i];
				if (currQuestion.IsAnswered) {
					if ($.isArray(currQuestion.UserSelectedOptionId)) {
						for (var k = 0; k < currQuestion.UserSelectedOptionId.length; k++) {
							var correctoption = currQuestion.Options.filter(function (item) {
								return item.OptionId == currQuestion.UserSelectedOptionId[k];
							})[0];
							var opttext = correctoption.OptionText.split("[")[0];
							var optprice = correctoption.cost;
							ccost += correctoption.cost;
							$(".cartitem").append("<p class='font14'><span class='cartopttext font14'>" + opttext + "</span><span class='cartoptprice font14'>$" + optprice + "</span></p>")
						}
					}
					else {
						var correctoption = currQuestion.Options.filter(function (item) {
							return item.OptionId == currQuestion.UserSelectedOptionId;
						})[0];
						var opttext = correctoption.OptionText.split("[")[0];
						var optprice = correctoption.cost;
						ccost += correctoption.cost;
						$(".cartitem").append("<p class='font14'><span class='cartopttext font14'>" + opttext + "</span><span class='cartoptprice font14'>$" + optprice + "</span></p>")
					}
				}
			}
			gComputerData.CartCost = ccost;
			$(".carttotalprice").text(" $" + ccost)
			$(".addtocart").attr("value", "Update cart");
			$(".questiontabselected").removeClass("questiontabselected")
			$(".questiontab").each(function () {
				var alabel = $(this).attr("aria-label").indexOf("selected") >=0 ? $(this).attr("aria-label").substring(0, $(this).attr("aria-label").indexOf("selected")):
				$(this).attr("aria-label");
				$(this).attr("aria-label",alabel.trim())
				var questionid = parseInt($(this).attr("questionid"));
				if (gComputerData.Questions[questionid - 1].UserSelectedOptionId != undefined && gComputerData.Questions[questionid - 1].UserSelectedOptionId != "" || currentCompQuestionIndex == questionid - 1) {
					$(this).k_enable();
				}
				else {
					$(this).k_disable();
				}
				if ((currentCompQuestionIndex + 1) == questionid) {
					$(this).addClass("questiontabselected")
					$(this).attr("aria-selected","true")
					alabel = $(this).attr("aria-label") + " selected";
					$(this).attr("aria-label",alabel)
				}
				else
				{
					$(this).attr("aria-selected","false")
				}
			})
			if ($(".questiontabselected").length == 0)//for question 5,7,9
			{
				$(".questiontab[questionid='" + currentCompQuestionIndex + "']").addClass("questiontabselected")
				
			}
			if (gComputerData.AllAnswered != undefined && gComputerData.AllAnswered) {
				$(".buildcomputer").show();
				if (gComputerData.CartCost > gComputerData.Budget) {
					$(".buildcomputer").k_disable();
				}
				else {
					$(".buildcomputer").k_enable();
				}
			}
			_Navigator.UpdateProgressBar();
			this.ShowFeedback(shiftfocus);
		},
		ShowFeedback: function (shiftfocus) {
			shiftfocus == shiftfocus ==undefined ?  shiftfocus : false;
			currQuestion = gComputerData.Questions[currentCompQuestionIndex];

			if (currQuestion.UserSelectedOptionId != undefined && gComputerData.Status != "Completed") {
				$("#div_feedback").show();
				$("#div_feedback .div_fdkcontent").html("<p>"+currQuestion.Feedback+"</p>")
				$("#div_feedback").css("display", "inline-block");
				if (iOS && shiftfocus) {
					$("#div_feedback p:first").attr("role", "text")
				}
				$('html,body').animate({ scrollTop: document.body.scrollHeight }, 1000, function () { 
					if(shiftfocus)
					{	
						$("#div_feedback p:first").attr("tabindex", "-1")
						$("#div_feedback p:first").focus();					
					}
				});
			}
			else {
				$("#div_feedback").hide();
			}

		},
		showQuestionPresenterMode: function () {
			var currQuestion = gComputerData.Questions[currentQuestionIndex];
			var correctoption = currQuestion.Options.filter(function (item) {
				return item.IsCorrect;
			})[0];
			$("#" + correctoption.OptionId).prop("checked", "true");
			$("input[type='radio']").k_disable();
			var iscorrectimg = $("#" + correctoption.OptionId).closest("label").find(".iscorrect").find("img")
			$("#" + correctoption.OptionId).closest("label").css("position", "relative");
			iscorrectimg.attr("src", "assets/images/tick-icon-correct-1.png")
			iscorrectimg.closest("span").show();
			iscorrectimg.attr("aria-label", "Correct option selected");
			$("#linknext").k_enable();
		},
		showReviewSummary: function () {
			$("#div_feedback").show();
			$(".computerType").text(gComputerData.baseunitname);
			$("#totalCost").text(gComputerData.CartCost);
			for (i = 0; i < gComputerData.Questions.length; i++) {
				if (i == 12) {
					$(".reviewSummaryTable table tr:last td").css({ "border-bottom": "0px" })
					return;
				}
				var userSelectedId = gComputerData.Questions[i].UserSelectedOptionId;

				if ($.isArray(userSelectedId)) {
					for (var k = 0; k < userSelectedId.length; k++) {
						var tr1 = $(".sampletrheading").clone();
						tr1 = tr1.removeClass("sampletrheading")

						var tr2 = $(".sampletrfeedback").clone();
						tr2 = tr2.removeClass("sampletrfeedback")

						tr1.find('td:nth-child(1)').text(gComputerData.Questions[i].ReviewHeading + ": " + gComputerData.Questions[i].Options[userSelectedId[k] - 1].OptionText);
						tr2.find('td:nth-child(1)').text(gComputerData.Questions[i].Options[userSelectedId[k] - 1].feedback);
						tr1.show();
						tr2.show();
						$(".reviewSummaryTable tbody").append(tr1)
						$(".reviewSummaryTable tbody").append(tr2)
					}
				}
				else {

					var tr1 = $(".sampletrheading").clone();
					tr1 = tr1.removeClass("sampletrheading")

					var tr2 = $(".sampletrfeedback").clone();
					tr2 = tr2.removeClass("sampletrfeedback")

					tr1.find('td:nth-child(1)').text(gComputerData.Questions[i].ReviewHeading + ": " + gComputerData.Questions[i].Options[userSelectedId - 1].OptionText);
					tr2.find('td:nth-child(1)').text(gComputerData.Questions[i].Options[userSelectedId - 1].feedback);
					tr1.show();
					tr2.show();
					$(".reviewSummaryTable tbody").append(tr1)
					$(".reviewSummaryTable tbody").append(tr2)
				}
			}


		}
	}

})();


var MCQTooltip = MCQTooltip || function () {
	var tooltip = '<span class="tooltiptext tooltip-bottom"><div style="padding:5px 10px;" class="tooltipurl">###tooltip###</div><div class="navtipafterbottom"></div></span>';
	var _container = $(".computerwrapper")

	var tooltipData = {
		t1: [{ tooltipurl: "photoshop.htm" }],
		t2: [{ tooltipurl: "word.htm" }],
		t3: [{ tooltipurl: "powerpoint.htm" }],
		t4: [{ tooltipurl: "outlook.htm" }],
		t5: [{ tooltipurl: "skype.htm" }]

	}
	return {
		ShowInfo: function (_element) {
			_container = $(".computerwrapper");
			if (_container.find(".tooltiptext").length > 0 && _element.attr("tooltipid") == $(".navtipopen").attr("tooltipid")) {
				this.Clear();
			}
			else {
				this.Clear();
				// _element.attr({ "aria-label": "Information icon  open state", })
				tooltipid = _element.attr("tooltipid");

				_container.prepend(tooltip);
				var url = "pagedata/tooltipdata/" + tooltipData[tooltipid][0].tooltipurl;
				var alabel = _element.attr("aria-label") + " selected";
				_element.attr("aria-label",alabel)
				_element.addClass("navtipopen")
				$(".tooltiptext .tooltipurl").load(url, function () {

					MCQTooltip.Position();
					$(".tooltipurl p:first").attr("tabindex", "-1");
					if (iOS) {
						$(".tooltipurl p:first").attr("role", "text")
					}

					$(".tooltipurl p:first").focus();

				});
			}
		},

		Position: function () {
			var _element = $(".navtipopen")
			if (_element != undefined && _container.find(".tooltiptext").length > 0) {
				var elementpos = $(".toolptipwrapper").position();
				var top = elementpos.top - $(".tooltiptext").height() + 6;
				$(".tooltiptext").css({ "left": "10px", top: top + "px" });

				var pos = $(".navtipopen").position();
				$(".navtipafterbottom").css({ "left": (pos.left + 15) + "px" });
				$(".tooltiptext").show();
			}
		},
		Clear: function () {
			$(".tooltiptext").remove();
			$(".navtipopen").removeClass("navtipopen");
			$(".tooltipicon").each(function(){
				var alabel = $(this).attr("aria-label").indexOf("selected")>=0 ? $(this).attr("aria-label").substring(0,$(this).attr("aria-label").indexOf("selected")).trim():$(this).attr("aria-label");
				$(this).attr("aria-label",alabel);
			})
		}
	}
}();

