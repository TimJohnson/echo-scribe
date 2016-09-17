var uiWrap = $('#echoScribeUIWrap');
var recordingSplash = $('#recordingSplash');
var mainRecording = $('#mainRecording');
var stagingCenterWrap = $('#stagingCenterWrap');
var userBetsy = $('#userBetsy');
var meetingId = $('#meetingId');
var meetingSelector = $('#meetingSelector');

function showRecordingUI() {
	$(uiWrap).addClass('is-recording');
	$(recordingSplash).addClass('in');
	
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


// Doc ready
$( document ).ready(function() {

	startupScripts();
	betsyAdded();
	meetingFactIsNotAReason();





});