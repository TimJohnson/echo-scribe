var uiWrap = $('#echoScribeUIWrap');
var recordingSplash = $('#recordingSplash');
var mainRecording = $('#mainRecording');
var mainFinished = $('#mainFinished');
var stagingCenterWrap = $('#stagingCenterWrap');
var userBetsy = $('#userBetsy');
var meetingId = $('#meetingId');
var meetingSelector = $('#meetingSelector');
var endMinute = $('#endMinute');
var endSecond = $('#endSecond');
var finishedMeetingNotes = $('#finishedMeetingNotes');

// start recording
function showRecordingUI(roomName) {
  $(uiWrap).addClass('is-recording');
  $(recordingSplash).addClass('in');
  $(meetingId).html(roomName + '<div>3&ndash;4pm</div>');
  $(meetingSelector).addClass('changed');
  startTimer();
  startProgressBar();
  
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function (e) {
    var textarea = document.getElementById('mySpeech');
    for (var i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        textarea.innerHTML += e.results[i][0].transcript;
        }
      }
    }

  
  
  setTimeout(function(){
    $(mainRecording).show().addClass('in');
    startTimer();
  }, 2500);
}


// finish recording
function finishRecordingUI() {
	$(uiWrap).removeClass('is-recording').addClass('is-finished');
  var endSecondVal = $(second).text();
  var endMinuteVal = $(minute).text();
  $(endMinute).html(endMinuteVal);
  $(endSecond).html(endSecondVal);
  console.log(second);
  console.log(minute);
  
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.stop();


  setTimeout(function(){
    $(mainRecording).removeClass('in');
    $(recordingSplash).removeClass('in');
  }, 1500);

  setTimeout(function(){
    $(mainFinished).addClass('meeting-logged');
  }, 2500);

	setTimeout(function(){
    $(finishedMeetingNotes).addClass('in');
        $(mainRecording).hide();
	}, 3100);
}


function isScribing() {

}

function betsyAdded() {
	$(userBetsy).addClass('in');
}

function meetingFactIsNotAReason() {
	$(meetingId).html('Fact Is Not Reason<div>3&ndash;4pm</div>');
	$(meetingSelector).addClass('changed');
}

// on startup
function startupScripts() {
	$(stagingCenterWrap).addClass('in');
  $.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("img/quill_white.svg","img/scribe_line_white.svg");
}

//stopwatch

var timer = 0;
var timerInterval;
var ms = document.getElementById('ms');
var second = document.getElementById('second');
var minute = document.getElementById('minute');

function startTimer() {
  stop();
  timerInterval = setInterval(function() {
    timer += 1/60;
    msVal = Math.floor((timer - Math.floor(timer))*100);
    secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
    minuteVal = Math.floor(timer/60);
    ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
    second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
    minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/30);
}

function stopTimer() {
  clearInterval(timerInterval);
}


// progress bar

function startProgressBar() {

var progressBar = $('#recordingProgress').children('.progressbar');

  var start = new Date();
var maxTime = 835000;
var timeoutVal = Math.floor(maxTime/100);
animateUpdate();

function updateProgress(percentage) {
    $(progressBar).css("width", percentage + "%");
}

function animateUpdate() {
    var now = new Date();
    var timeDiff = now.getTime() - start.getTime();
    var perc = Math.round((timeDiff/maxTime)*100);
      if (perc <= 100) {
       updateProgress(perc);
       setTimeout(animateUpdate, timeoutVal);
      }
}

}

// Doc ready
$( document ).ready(function() {


	// betsyAdded();
	// meetingFactIsNotAReason();	
	startupScripts();





});