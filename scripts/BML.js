/*! js-url - v2.5.3 - 2018-04-05 */!function () { var a = function () { function a() { } function b(a) { return decodeURIComponent(a.replace(/\+/g, " ")) } function c(a, b) { var c = a.charAt(0), d = b.split(c); return c === a ? d : (a = parseInt(a.substring(1), 10), d[a < 0 ? d.length + a : a - 1]) } function d(a, c) { for (var d = a.charAt(0), e = c.split("&"), f = [], g = {}, h = [], i = a.substring(1), j = 0, k = e.length; j < k; j++) if (f = e[j].match(/(.*?)=(.*)/), f || (f = [e[j], e[j], ""]), "" !== f[1].replace(/\s/g, "")) { if (f[2] = b(f[2] || ""), i === f[1]) return f[2]; h = f[1].match(/(.*)\[([0-9]+)\]/), h ? (g[h[1]] = g[h[1]] || [], g[h[1]][h[2]] = f[2]) : g[f[1]] = f[2] } return d === a ? g : g[i] } return function (b, e) { var f, g = {}; if ("tld?" === b) return a(); if (e = e || window.location.toString(), !b) return e; if (b = b.toString(), f = e.match(/^mailto:([^\/].+)/)) g.protocol = "mailto", g.email = f[1]; else { if ((f = e.match(/(.*?)\/#\!(.*)/)) && (e = f[1] + f[2]), (f = e.match(/(.*?)#(.*)/)) && (g.hash = f[2], e = f[1]), g.hash && b.match(/^#/)) return d(b, g.hash); if ((f = e.match(/(.*?)\?(.*)/)) && (g.query = f[2], e = f[1]), g.query && b.match(/^\?/)) return d(b, g.query); if ((f = e.match(/(.*?)\:?\/\/(.*)/)) && (g.protocol = f[1].toLowerCase(), e = f[2]), (f = e.match(/(.*?)(\/.*)/)) && (g.path = f[2], e = f[1]), g.path = (g.path || "").replace(/^([^\/])/, "/$1"), b.match(/^[\-0-9]+$/) && (b = b.replace(/^([^\/])/, "/$1")), b.match(/^\//)) return c(b, g.path.substring(1)); if (f = c("/-1", g.path.substring(1)), f && (f = f.match(/(.*?)\.([^.]+)$/)) && (g.file = f[0], g.filename = f[1], g.fileext = f[2]), (f = e.match(/(.*)\:([0-9]+)$/)) && (g.port = f[2], e = f[1]), (f = e.match(/(.*?)@(.*)/)) && (g.auth = f[1], e = f[2]), g.auth && (f = g.auth.match(/(.*)\:(.*)/), g.user = f ? f[1] : g.auth, g.pass = f ? f[2] : void 0), g.hostname = e.toLowerCase(), "." === b.charAt(0)) return c(b, g.hostname); a() && (f = g.hostname.match(a()), f && (g.tld = f[3], g.domain = f[2] ? f[2] + "." + f[3] : void 0, g.sub = f[1] || void 0)), g.port = g.port || ("https" === g.protocol ? "443" : "80"), g.protocol = g.protocol || ("443" === g.port ? "https" : "http") } return b in g ? g[b] : "{}" === b ? g : void 0 } }(); "function" == typeof window.define && window.define.amd ? window.define("js-url", [], function () { return a }) : ("undefined" != typeof window.jQuery && window.jQuery.extend({ url: function (a, b) { return window.url(a, b) } }), window.url = a) }();
// the code above is for getting querystring parameter by calling
//$.url('?parameterName')


/*	- total number of pages = 1+ 5+ 1+1
			- landing
			- number of questions
			- review
			- summary
KnowDO === Change the number as required in the module
*/

var numOfPagesInModule = 1 + 5 + 1 + 1


//	- Progress logic = (visitedpages / total pages ) * 100 %
//  	"visitedNumberOfPages"  -- increase this by one on every page/question -- on next click?
var visitedNumberOfPages = 1;

/*	- docuent.ready pull following data
		tracked data
			- NumOfPagesVisited, score, questions data, user id, assignment id, record id
			- Record title, Video Link
		jump to the last visited page/question

		if no tracked data found pull
 		Record title, Video Link, Question Data

KnowDO === Need service call to retrieve data
		   For proto use hardcoded data

//		QuestionsData === JSON for questions === this data is pulled from library record
	var gQuestionsData = 	{
			"QuestionSequence" : "Numbers/LowerAlphabets/UpperAlphabets/Roman/bullets/Radio",
			"OptionSequence" : "Numbers/LowerAlphabets/UpperAlphabets/Roman/bullets/Radio",
			"RandomizeQuestions" : "True/False",
			"RandomizeOptions" : "True/False",
			"Questions" : [
							{
								"QuestionId" : "1",
								"QuestionText" : "What is this?",
								"Options" : [
											 {
												"OptionId" : "1",
												"OptionText" : "this is first option",
												"IsCorrect" : "True/False",
												"CorrectFeedback" : "",
												"InCorrectFeedback" : "",
											 }
											],

								"UserSelectedOptionId" : ""

							}
						]

*/
var gRecordData = null;

$(document).ready(function () {

    $.ajax({
        type: 'GET',
        url: "scripts/record" + $.url('?id') + "data.txt",
        success: function (data) {
			 eval(data)
			startRecordPlayer();
        },
        error: function (xhr, data, message) {
            console.log("Error while pulling data for record id " + $.url('?id'))
        }
    });
});

 //	- Score -- number of correct attempted questions divided by total number of questions
var moduleScore = 0;

function startRecordPlayer(){
	//show record title
	window.document.title = gRecordData.RecordTitle
	$("#header-title").find("h1").text(gRecordData.RecordTitle)

	if( gRecordData.Status == "NotStarted" ){


	}
	else
	{
		// if its not landing page
		if(gRecordData.LastVisitedPage != "1"  ){

		}
	}

}
