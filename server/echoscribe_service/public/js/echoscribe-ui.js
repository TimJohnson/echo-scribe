var uiWrap = $('#echoScribeUIWrap');
var recordingSplash = $('#recordingSplash');
var mainRecording = $('#mainRecording');
var stagingCenterWrap = $('#stagingCenterWrap');
var userBetsy = $('#userBetsy');
var meetingId = $('#meetingId');
var meetingSelector = $('#meetingSelector');

function showRecordingUI(roomName) {
	$(uiWrap).addClass('is-recording');
	$(recordingSplash).addClass('in');
	
	$(meetingId).html(roomName ? roomName + '<div>3&ndash;4pm</div>' : 'Red Ventures <div>3&ndash;4pm</div>');
	setTimeout(function(){
		$(mainRecording).show().addClass('in');
		startTimer();
	}, 2500);
}

function startTimer() {

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

function startupScripts() {
	$(stagingCenterWrap).addClass('in');
}

function startTranscription() {
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
}

function stopTranscription() {
	var recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;
	recognition.lang = "en-US";
  recognition.stop();
	
	$(uiWrap).removeClass('is-recording');
	$(recordingSplash).addClass('out');
	
	setTimeout(function(){
		$(mainRecording).show().addClass('out');
		startTimer();
	}, 2500);
}

// Doc ready
$( document ).ready(function() {

	startupScripts();
	meetingFactIsNotAReason();





});