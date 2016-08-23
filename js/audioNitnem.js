// Live Kirtan

var harmandirSahib = "http://sgpc.net:8070/live?type=.mp3";


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 harmandirSahib = "http://sgpc.net:8070/live16";
}


var dukhNivaranSahibLudhiana = "http://akalmultimedia.net:8000/GDNSLDH";

var hazurSahib = "http://radio2.sikhnet.com:8038/live";

var dukhNivaranSahibSurrey = "http://dukhnivaran.primcast.com:6356/;stream.mp3";

var dasmeshDarbarSurrey = "http://radio2.sikhnet.com:8036/live";

var fremontGurdwaraCalifornia = "http://radio2.sikhnet.com:8026/live";

var dashmeshCultureCenterCalgary = "http://radio2.sikhnet.com:8030/live";

var guruNanakSikhGurdwaraSurrey = "http://radio2.sikhnet.com:8034/live";

// Hukumnama

var dailyHukumnama = "http://old.sgpc.net/hukumnama/jpeg%20hukamnama/hukamnama.mp3?_=1";    

// Nitnem

var japJiSahib = "http://old.sgpc.net/CDN/Japji_Sahib.mp3";

var jaapSahib = "http://old.sgpc.net/CDN/Jaap_Sahib.mp3";

var tavPrasadSavaiye = "http://old.sgpc.net/CDN/Savaiye.mp3";

var chaupaiSahib = "http://old.sgpc.net/CDN/Chaupai_Sahib.mp3";

var anandSahib = "http://old.sgpc.net/CDN/Anand_Sahib.mp3";

var rehraasSahib = "http://sgpc.net/nitnem2/Rehraas%20sahib.mp3";

var ardaas = "http://sgpc.net/nitnem2/Ardaas.mp3";

// Online radios

var sikhRadio = "http://5.9.86.167:8005/;stream.nsv&type=mp3&volume=80&autostart=true";

var sikhnetRadioStation = "http://radio2.sikhnet.com:8010/autodj";

var sikhnetWesternNonTraditional = "http://radio2.sikhnet.com:8012/autodj";

var sikhnetClassicalRaag = "http://radio2.sikhnet.com:8014/autodj";

var simranSikhnet = "http://radio2.sikhnet.com:8016/autodj";

var sriAkhandPaathSahibSikhnet = "http://radio2.sikhnet.com:8018/autodj";

var theClassicsSikhnet = "http://radio2.sikhnet.com:8501/autodj";

var kathaSikhnet = "http://radio2.sikhnet.com:8013/autodj";

var storiesSikhnet = "http://radio2.sikhnet.com:8017/autodj";

// Main Audio Player 
var audioElement = document.getElementById("liveAudio");

var state = 'pause';


// function hover(element) {
//     element.setAttribute('src', 'img/buttons/playButtonWhite.png');
// }
// function unhover(element) {
//     element.setAttribute('src', 'img/buttons/playbutton.png');
// }


function setAudioSource(ID) {

  switch (ID) {
      case '1':audioElement.setAttribute('src', japJiSahib);break;
      case '2':audioElement.setAttribute('src', jaapSahib);break;  
      case '3':audioElement.setAttribute('src', tavPrasadSavaiye);break;  
      case '4':audioElement.setAttribute('src', chaupaiSahib);break;  
      case '5':audioElement.setAttribute('src', anandSahib);break;  
      case '6':audioElement.setAttribute('src', rehraasSahib);break;  
      case '7':audioElement.setAttribute('src', ardaas);break;  
      case '8':audioElement.setAttribute('src', harmandirSahib);break;  
      case '9':audioElement.setAttribute('src', harmandirSahib);break;  
      case '10':audioElement.setAttribute('src', harmandirSahib);break;  
      case '11':audioElement.setAttribute('src', harmandirSahib);break;  
      case '12':audioElement.setAttribute('src', harmandirSahib);break;  
      case '13':audioElement.setAttribute('src', harmandirSahib);break;  
      case '14':audioElement.setAttribute('src', harmandirSahib);break;  
      case '15':audioElement.setAttribute('src', harmandirSahib);break;  
      case '16':audioElement.setAttribute('src', harmandirSahib);break;  
      case '17':audioElement.setAttribute('src', harmandirSahib);break;  
      case '18':audioElement.setAttribute('src', harmandirSahib);break;  
      case '19':audioElement.setAttribute('src', harmandirSahib);break;  
      case '20':audioElement.setAttribute('src', harmandirSahib);break;  
      case 'X':audioElement.setAttribute('src', harmandirSahib);break;
  }
  
}



function playAudio(x) {

  // audioElement.currentTime = this.time;
  setAudioSource(x);
  audioElement.play();

}

function pauseAudio() {
      this.time = audioElement.currentTime;
      audioElement.pause();
}



function getElementfromID(ID) {
  switch (ID) {
    case '1':
      retrievedElement = document.getElementById('a');
      break;
    case '2':
      retrievedElement = document.getElementById('b');
      break;  
    case '3':
      retrievedElement = document.getElementById('c');
      break;  
    case '4':
      retrievedElement = document.getElementById('d');
      break;  
    case '5':
      retrievedElement = document.getElementById('e');
      break;  
    case '6':
      retrievedElement = document.getElementById('f');
      break;  
    case '7':
      retrievedElement = document.getElementById('g');
      break;  
    case '8':
      retrievedElement = document.getElementById('h');
      break;  
    case '9':
      retrievedElement = document.getElementById('i');
      break;  
    case '10':
      retrievedElement = document.getElementById('j');
      break;  
  }
 return retrievedElement;
}

// Now Playing Text
var nowPlayingText = document.getElementById('nowPlaying');


var glowElement = document.getElementById('a');

function glowBox(e_ID) {

  glowElement = getElementfromID(e_ID);
  // glowElement.setAttribute('style', 'box-shadow: 0 5px 25px 0 #004080, 0 20px 30px 0 #004080;');
  // glowElement.setAttribute('style', 'background-color: #CCFFFF;');

glowElement.setAttribute('style', '-webkit-animation: glowing 3s ease-in-out infinite alternate;  -moz-animation: glowing 3s ease-in-out infinite alternate;  animation: glowing 3s ease-in-out infinite alternate;');

}


var unglowElement = document.getElementById('a');

function unglowBox(e_ID) {

  unglowElement = getElementfromID(e_ID);
  unglowElement.setAttribute('style', 'box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.30), 0 20px 30px 0 rgba(0, 0, 0, 0.30);');
}

var musicPlayerPlay = document.getElementById('X')

var musicPlayerStop = document.getElementById('STOP')


var oldElementID = 0;

var currentElementAltText = document.getElementById('1').getAttribute('alt');

// onclick="play(document.getElementById('1'));"





var nextElement = '2';

function play(element) {

  if (element == 'next') {

    nextElement = parseInt(oldElementID) + 1;

    if (document.getElementById(nextElement) == null) {
      play(document.getElementById('1'));
      return;
    }
    
    play(document.getElementById(nextElement));
    return;
  }

  if (element == 'previous') {

    nextElement = parseInt(oldElementID) - 1;

    if (document.getElementById(nextElement) == null) {
      play(document.getElementById('7')); //Change this value '8' to the current last element ID, whenever new stations are added or removed!!!
      return;
    }
    
    play(document.getElementById(nextElement));
    return;
  }

  currentElementAltText = document.getElementById(element.id).getAttribute('alt');
   
  if (oldElementID == element.id || oldElementID == 0) {

    if (state == 'pause') {
      state = 'play';
      element.setAttribute('src', 'img/buttons/pauseButtonCircle.png');
      element.setAttribute('style', 'animation: roll 3s infinite;');
      musicPlayerPlay.setAttribute('src', 'img/buttons/pauseButtonCircle.png');
      playAudio(element.id);
      glowBox(element.id);
      nowPlayingText.innerText = currentElementAltText;
      musicPlayerPlay.setAttribute('onclick', "play(document.getElementById('" + element.id + "'));");
      // nowPlayingText.innerText = 'Hello';
    }

    else if (state == 'play') {
      state = 'pause';
      element.setAttribute('src', 'img/buttons/playbutton.png');
      musicPlayerPlay.setAttribute('src', 'img/buttons/playbutton.png');
      element.setAttribute('style', '');
      pauseAudio();
      unglowBox(element.id);
    }
    oldElementID = element.id;

  } else {

      // console.log(oldElementID);
      oldEle = document.getElementById(oldElementID)
      oldEle.setAttribute('src', 'img/buttons/playbutton.png');
      if (state == 'pause') {
        state = 'play';
      } else {
        state = 'pause';
      }
      oldElementID = element.id;
      oldEle.setAttribute('style', '');
      unglowBox(oldElementID.id);
      play(element);  
  }
}



// Volume Slider
$("#volume").slider({
    min: 0,
    max: 100,
    value: 100,
    range: "min",
    animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
  });


function setVolume(myVolume) {
    audioElement.volume = myVolume;
}
