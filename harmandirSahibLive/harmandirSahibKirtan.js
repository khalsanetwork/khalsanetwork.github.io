// Script to get live kirtan for North-America from Harmandir Sahib

// http://new.sgpc.net/kirtan/2017/January/recorded04012017.mp3
// http://new.sgpc.net/kirtan/2017/January/recorded04012017%20%281%29.mp3

function dateToXX (dt) {
	if (dt.toString().length == 1){
		return '0'+dt;
	}
	else {
		return dt.toString();
	}
}

var today = new Date();
today.setDate(today.getDate() - 1); // To get yesterday's date
var date = dateToXX(today.getDate());
var month = dateToXX(today.getMonth()+1);
var monthName = today.toLocaleString("en-us", { month: "long" });
var year = today.getFullYear();

var dateforURL = date + month + year;

var initURL = "http://new.sgpc.net/kirtan/";
// var audio = document.getElementById('mainAudio');

function getLiveAudioURL() {
	return initURL + year + '/' + month + '/' + 'recorded' + dateforURL + '%20%281%29.mp3';
}

var playing = false;

function play() {
	console.log('Playing');
	var audio = document.getElementById('mainAudio');
	// setCurrentTime();
	if (!playing) {
		audio.play();
		$('.audioButtons').show();
		$('#playButton').attr('src', '../img/buttons/pauseButtonCircle.png');
		playing = true;
	}
	else {
		// setTimeout(audio.pause(), 100);
		console.log('Paused');
		audio.pause();
		$('.audioButtons').hide();
		$('#playButton').attr('src', '../img/buttons/playbutton.png');
		playing = false;
	}
}

$(function() {
	var url = getLiveAudioURL();
	$('#mainAudio').attr("src", url);
	var audio = document.getElementById('mainAudio');
	// audio.play();
	// setTimeout(audio.pause(), 3500);
	audio.pause();
	// setCurrentTime();
});

function playLiveAudio() {
	// var url = getLiveAudioURL();
	// $('#mainAudio').attr("src", url);
	// var audio = $('#mainAudio');
	setCurrentTime();
	play();
	// glowBox('playImage');
	// $('#playImage').attr('style', 'animation: roll 3s infinite;');
	// audio.currentTime = 45000;
}

function setCurrentTime() {
	var audio = document.getElementById('mainAudio');
	// document.getElementById('mainAudio').currentTime = 45000;
	var date = new Date();
	var currentHour = date.getHours();
	var currentMin = date.getMinutes();

	var time = (currentHour * 3600) + (currentMin * 60) - (4 * 3600);
	console.log('Time: ' + time);
	audio.currentTime = time;
}

function forward() {
	var audio = document.getElementById('mainAudio');
	audio.currentTime += 60;
	console.log('Current Time: ' + audio.currentTime);
}

function backward() {
	var audio = document.getElementById('mainAudio');
	audio.currentTime -= 60;
	console.log('Current Time: ' + audio.currentTime);
}

$(function() {
	$('#titleimg').hide();
	$('.audioButtons').hide();
	$('#titleimg').show('slow');
});


function glowBox(e_ID) {

  glowElement = document.getElementById(e_ID);
  console.log(glowElement);
  glowElement.setAttribute('style', '-webkit-animation: glowing 3s ease-in-out infinite alternate;  -moz-animation: glowing 3s ease-in-out infinite alternate;  animation: glowing 3s ease-in-out infinite alternate;');

}

