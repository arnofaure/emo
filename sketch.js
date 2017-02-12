var aileronBold;
var eyeL, eyeR;
var footL, footR;
var emoHeight, emoWidth;
var faceSize = 400;
var confusedBody;
var changeColor;
var imoFace;
var bubble, bubble2;

var confusedIsTrue = false;

var sadIsTrue = false;

var resetButton;

var sliderEmo2, scaleWrapper2;
var sliderEmo3, scaleWrapper3;

var solution = false;
var bigger = 0;

var howMuch2, howMuch3;

var bkgSolution;

var theSolutionIs = "none";

var backToHome;
var solutionBox;

var bHappy, bSad, bAngry, bAfraid, bTired, bShy, bBored, bConfused;
var angryFace1, angryFace2, angryFace3;
var happyFace1, happyFace2, happyFace3;
var sadFace1, sadFace2, sadFace3;
var afraidFace1, afraidFace2, afraidFace3;
var tiredFace1, tiredFace2, tiredFace3;
var shyFace1, shyFace2;
var boredFace1;
var confusedFace1;

var cardHug, cardAlone, cardTalk, cardSleep, cardShare, cardHelp;
var useHug;

var emotionSelection;
var newButtonSolution;

var emotionText = "...";

var solutionBagde, solutionIcon;

var langSelect, lang;
var en = "en";
var btnFR, btnEN;
var welcome;
var question;
var solution1, solution2, solution3, solution4, solution5, solution6, what, solutionTextWrapper, solutionText, solutionFeelbetter;

var theFinalStar;

var bkgFinal;

var music, finalSound;
var isPlaying = false;
var audioButton;

var emoTxtHappy, emoTxtSad, emoTxtAngry, emoTxtAfraid, emoTxtTired, emoTxtShy, emoTxtBored, emoTxtConfused;


function preload() {
  // LOAD THE FACE IMAGES
  startFace = loadImage('images/face-main-start-00.png');
  angryFace1 = loadImage('images/face-main-angry-1.png');
  angryFace2 = loadImage('images/face-main-angry-2.png');
  angryFace3 = loadImage('images/face-main-angry-3.png');
  happyFace1 = loadImage('images/face-main-happy-1.png');
  happyFace2 = loadImage('images/face-main-happy-2.png');
  happyFace3 = loadImage('images/face-main-happy-3.png');
  afraidFace1 = loadImage('images/face-main-afraid-1.png');
  afraidFace2 = loadImage('images/face-main-afraid-2.png');
  afraidFace3 = loadImage('images/face-main-afraid-3.png');
  sadFace1 = loadImage('images/face-main-sad-1.png');
  sadFace2 = loadImage('images/face-main-sad-2.png');
  sadFace3 = loadImage('images/face-main-sad-3.png');
  tiredFace1 = loadImage('images/face-main-tired-1.png');
  tiredFace2 = loadImage('images/face-main-tired-2.png');
  tiredFace3 = loadImage('images/face-main-tired-3.png');
  shyFace1 = loadImage('images/face-main-shy-1.png');
  shyFace2 = loadImage('images/face-main-shy-2.png');
  boredFace1 = loadImage('images/face-main-bored-1.png');
  confusedFace1 = loadImage('images/face-main-confused-1.png');
  confusedBody = loadImage('images/body-main-confused.png');
  music = loadSound('audio/music.mp3');
  finalSound = loadSound('audio/final-sound.mp3');

}

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  clear();

  welcome = select('.welcome-wrapper');

  langSelect = "en"
  loadLanguage(langSelect);

  textFont('Noto Sans');
  textStyle(BOLD);
  imoFace = startFace;

  emoHeight = 450;
  emoWidth = 300;
  noStroke();

  changeColor = select('#main-color');
  solutionBox = select('#solution-wrapper');

  bHappy = select('#buttonHappy')
  bSad = select('#buttonSad')
  bAngry = select('#buttonAngry')
  bAfraid = select('#buttonAfraid')
  bTired = select('#buttonTired')
  bShy = select('#buttonShy')
  bBored = select('#buttonBored')
  bConfused = select('#buttonConfused')

  cardHug = select('#card-hug');
  cardAlone = select('#card-alone');
  cardTalk = select('#card-talk');
  cardSleep = select('#card-sleep');
  cardShare = select('#card-share');
  cardHelp = select('#card-help');

  solutionBadge = select('#solution-found');
  solutionIcon = select('#solution-icon');

  solutionTextWrapper = select('.solution-final');

  bkgFinal = select('.solution-final-wrapper');

  theFinalStar = select('#theStar');

  backToHome = select('#imo-logo');

  bubble = select('.talking-bubble')
  bubble2 = select('.talking-bubble-2')

  newButtonSolution = select('#solution-button');
  newButtonSolution.mousePressed(solutionIsTrue);
  backToHome.mousePressed(reset);

  resetButton = select('#reset-button');
  resetButton.mousePressed(reset);

  bHappy.mousePressed(happy);
  bSad.mousePressed(sad);
  bAngry.mousePressed(angry);
  bAfraid.mousePressed(afraid);
  bTired.mousePressed(tired);
  bShy.mousePressed(shy);
  bBored.mousePressed(bored);
  bConfused.mousePressed(confused);

  scaleWrapper3 = select('#scale-wrapper-3');
  scaleWrapper3.addClass('display-none');
  sliderEmo3 = select('#emoSlider-3');

  scaleWrapper2 = select('#scale-wrapper-2');
  scaleWrapper2.addClass('display-none');
  sliderEmo2 = select('#emoSlider-2');

  emotionSelection = select('.emotion-selection');
  bkgSolution = select('#bkg-solution');

  cardHug.mousePressed(hugTime)
  cardHug.mousePressed(solutionSelected)

  cardAlone.mousePressed(aloneTime)
  cardAlone.mousePressed(solutionSelected)

  cardTalk.mousePressed(talkTime)
  cardTalk.mousePressed(solutionSelected)

  cardSleep.mousePressed(sleepTime)
  cardSleep.mousePressed(solutionSelected)

  cardShare.mousePressed(shareTime)
  cardShare.mousePressed(solutionSelected)

  cardHelp.mousePressed(helpTime)
  cardHelp.mousePressed(solutionSelected)

  // Buttons that select the language (and start the music)
  btnFR = select('#button-fr');
  btnEN = select('#button-en');

  btnFR.mousePressed(inFrench);
  btnEN.mousePressed(inEnglish);

  audioButton = select("#audio-button")
  audioButton.mousePressed(playSong);

}


function playSong() {
  if (!isPlaying) {
    music.setVolume(0.4);
    music.loop();
    if ($(".audio").hasClass("audio-mute")) {
      audioButton.removeClass('audio-mute');
    }
    isPlaying = true;
  } else {
    music.stop();
    isPlaying = false;
    if (!$(".audio").hasClass("audio-mute")) {
      audioButton.addClass('audio-mute');
    }
  }
}

function playFinalSound() {
  music.stop();
      isPlaying = false;
  // finalSound.setVolume(0.4);
  finalSound.play();
}

function inFrench() {
  langSelect = "fr";
  loadLanguage(langSelect);
  welcomeOff();
  playSong();
}

function inEnglish() {
  langSelect = "en";
  loadLanguage(langSelect);
  welcomeOff();
  playSong();

}


// This function loads the json file that corresponds to the selected language
function loadLanguage(language) {
  var x = language;
  lang = loadJSON("lang/emotion-" + x + ".json");
}

function welcomeOff() {
  if (!$(".welcome-wrapper").hasClass("display-none")) {
    welcome.addClass('display-none');
  }
}

//This function replaces all the text in the selected language
function languageText() {
  question = select("#talking-text");
  question.html(lang.question);


    emoTxtHappy = select('#emo-txt-happy');
    emoTxtHappy.html(lang.happy)

    emoTxtSad = select('#emo-txt-sad');
    emoTxtSad.html(lang.sad)

    emoTxtAngry = select('#emo-txt-angry');
    emoTxtAngry.html(lang.angry)

    emoTxtAfraid = select('#emo-txt-afraid');
    emoTxtAfraid.html(lang.afraid)

    emoTxtTired = select('#emo-txt-tired');
    emoTxtTired.html(lang.tired)

    emoTxtShy = select('#emo-txt-shy');
    emoTxtShy.html(lang.shy)

    emoTxtBored = select('#emo-txt-bored');
    emoTxtBored.html(lang.bored)

    emoTxtConfused = select('#emo-txt-confused');
    emoTxtConfused.html(lang.confused)

  what = select("#what-txt");
  what.html(lang.what);

  solution1 = select("#hug-txt");
  solution1.html(lang.hug);

  solution2 = select("#alone-txt");
  solution2.html(lang.alone);

  solution3 = select("#talk-txt");
  solution3.html(lang.talk);

  solution4 = select("#sleep-txt");
  solution4.html(lang.sleep);

  solution5 = select("#share-txt");
  solution5.html(lang.share);

  solution6 = select("#help-txt");
  solution6.html(lang.help);

  // solutionText = select("#the-solution-is");
  // solutionText.html(lang.solution);

  solutionFeelbetter = select('#talking-FeelBetter');
  solutionFeelbetter.html(lang.solution);

}



function draw() {
  if (solution) {
    clear();
  } else {
    translate(width / 2, height / 2);
    strokeCap(ROUND);
    stroke(0);
    strokeWeight(8);
    footL = line(-50, 180, -50, 250);
    footR = line(50, 180, 50, 250);

    noStroke();
    // fill(ck)
    rectMode(CENTER);
    fill(color(changeColor.style('color')));
    rect(0, -emoHeight * .2, emoWidth, emoHeight * .8, 20, 20, 0, 0);
    fill(255);
    rect(0, emoHeight / 2 - emoHeight * .2, emoWidth, emoHeight * .2, 0, 0, 20, 20);

    //emotion
    fill(0);
    textSize(35);
    textAlign(CENTER, CENTER);
    text(emotionText, 0, 130);


    //the faces
    imageMode(CENTER);
    if (confusedIsTrue) {
      image(confusedBody, 0, -emoHeight * .20, 300, 360);
    }
    image(imoFace, 0, -emoHeight * .15, faceSize, faceSize);
    howMuch3 = sliderEmo3.value();
    howMuch2 = sliderEmo2.value();

    checkEmotion();
    languageText();
  }
}

function checkEmotion() {
  if (emotionText == lang.happy) {
    if (howMuch3 === 1) {
      imoFace = happyFace1;
    } else if (howMuch3 === 2) {
      imoFace = happyFace2;
    } else if (howMuch3 === 3) {
      imoFace = happyFace3;
    }
  } else if (emotionText == lang.angry) {
    if (howMuch3 === 1) {
      imoFace = angryFace1;
    } else if (howMuch3 === 2) {
      imoFace = angryFace2;
    } else if (howMuch3 === 3) {
      imoFace = angryFace3;
    }
  } else if (emotionText == lang.sad) {
    if (howMuch3 === 1) {
      imoFace = sadFace1;
    } else if (howMuch3 === 2) {
      imoFace = sadFace2;
    } else if (howMuch3 === 3) {
      imoFace = sadFace3;
    }
  } else if (emotionText == lang.afraid) {
    if (howMuch3 === 1) {
      imoFace = afraidFace1;
    } else if (howMuch3 === 2) {
      imoFace = afraidFace2;
    } else if (howMuch3 === 3) {
      imoFace = afraidFace3;
    }
  } else if (emotionText == lang.tired) {
    if (howMuch3 === 1) {
      imoFace = tiredFace1;
    } else if (howMuch3 === 2) {
      imoFace = tiredFace2;
    } else if (howMuch3 === 3) {
      imoFace = tiredFace3;
    }
  } else if (emotionText == lang.shy) {
    if (howMuch2 === 1) {
      imoFace = shyFace1;
    } else if (howMuch2 === 2) {
      imoFace = shyFace2;
    }
  }
}

function happy() {
  emotionText = lang.happy;
  imoFace = happyFace1;
  confusedIsTrue = false;
  if (!$("#main-color").hasClass("happyness")) {
    changeColor.addClass('happyness');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fear');
    changeColor.removeClass('anger');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper3.removeClass('display-none');
  newButtonSolution.removeClass('display-none');

}

function sad() {
  emotionText = lang.sad;
  imoFace = sadFace1;
  confusedIsTrue = false;
  if (!$("#main-color").hasClass("sadness")) {
    changeColor.addClass('sadness');
    changeColor.removeClass('happyness');
    changeColor.removeClass('fear');
    changeColor.removeClass('anger');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper3.removeClass('display-none');
  newButtonSolution.removeClass('display-none');
}

function angry() {
  emotionText = lang.angry;
  confusedIsTrue = false;
  if (!$("#main-color").hasClass("anger")) {
    changeColor.addClass('anger');
    changeColor.removeClass('happyness');
    changeColor.removeClass('fear');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper3.removeClass('display-none');
  newButtonSolution.removeClass('display-none');

}

function afraid() {
  emotionText = lang.afraid;
  imoFace = afraidFace1;
  confusedIsTrue = false;
  if (!$("#main-color").hasClass("fear")) {
    changeColor.addClass('fear');
    changeColor.removeClass('happyness');
    changeColor.removeClass('anger');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper3.removeClass('display-none');
  newButtonSolution.removeClass('display-none');
}

function tired() {
  emotionText = lang.tired;
  imoFace = tiredFace1;
  confusedIsTrue = false;

  if (!$("#main-color").hasClass("fatigue")) {
    changeColor.addClass('fatigue');
    changeColor.removeClass('happyness');
    changeColor.removeClass('anger');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fear');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper3.removeClass('display-none');
  newButtonSolution.removeClass('display-none');

}

function shy() {
  emotionText = lang.shy;
  imoFace = shyFace1;
  confusedIsTrue = false;

  if (!$("#main-color").hasClass("shyness")) {
    changeColor.addClass('shyness');
    changeColor.removeClass('happyness');
    changeColor.removeClass('anger');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fear');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('boredom');
    changeColor.removeClass('confusion');
  }
  if (!$("#scale-wrapper-3").hasClass("display-none")) {
    scaleWrapper3.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  scaleWrapper2.removeClass('display-none');
  newButtonSolution.removeClass('display-none');

}

function bored() {
  emotionText = lang.bored;
  imoFace = boredFace1;

  if (!$("#main-color").hasClass("boredom")) {
    changeColor.addClass('boredom');
    changeColor.removeClass('happyness');
    changeColor.removeClass('anger');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fear');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('confusion');
    newButtonSolution.removeClass('display-none');
  }

  if (!$("#scale-wrapper-3").hasClass("display-none")) {
    scaleWrapper3.addClass('display-none');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  newButtonSolution.removeClass('display-none');
}

function confused() {
  emotionText = lang.confused;
  imoFace = confusedFace1;
  confusedIsTrue = true;
  if (!$("#main-color").hasClass("confusion")) {
    changeColor.addClass('confusion');
    changeColor.removeClass('happyness');
    changeColor.removeClass('anger');
    changeColor.removeClass('sadness');
    changeColor.removeClass('fear');
    changeColor.removeClass('fatigue');
    changeColor.removeClass('shyness');
    changeColor.removeClass('boredom');
  }
  if (!$("#scale-wrapper-3").hasClass("display-none")) {
    scaleWrapper3.addClass('display-none');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$(".talking-bubble").hasClass("display-none")) {
    bubble.addClass('display-none');
  }
  newButtonSolution.removeClass('display-none');

}

function solutionIsTrue() {
  if (!solution) {
    solution = true;
    if (!$("#scale-wrapper-3").hasClass("display-none")) {
      scaleWrapper3.addClass('display-none');
    }
    if (!$("#scale-wrapper-2").hasClass("display-none")) {
      scaleWrapper2.addClass('display-none');
    }

    emotionSelection.addClass('emo-selection-down');

    if (!$("#bkg-solution").hasClass("animation-bkg")) {
      bkgSolution.addClass('animation-bkg');
    }

    // bkgSolution.addClass('animation-bkg');
    bkgSolution.removeClass('animation-bkg-reverse');

    newButtonSolution.addClass('display-none');
    solutionBox.removeClass('display-none');

    cardHug.addClass('animation-solution-in');
    cardAlone.addClass('animation-solution-in');
    cardTalk.addClass('animation-solution-in');
    cardSleep.addClass('animation-solution-in');
    cardShare.addClass('animation-solution-in');
    cardHelp.addClass('animation-solution-in');
  } else {
    solution = false;
    bigger = 0;
    emotionSelection.removeClass('emo-selection-down');
    bkgSolution.addClass('animation-bkg-reverse');
    bkgSolution.removeClass('animation-bkg');
    solutionBox.addClass('display-none');
  }
}

function hugTime() {
  theSolutionIs = "hug";
}

function aloneTime() {
  theSolutionIs = "alone";
}

function talkTime() {
  theSolutionIs = "talk";
}

function sleepTime() {
  theSolutionIs = "sleep";
}

function shareTime() {
  theSolutionIs = "share";
}

function helpTime() {
  theSolutionIs = "help";
}

function solutionSelected() {
  playFinalSound();
  solution = false;
  bigger = 0;
  if (!$(".emotion-selection").hasClass("emo-selection-down")) {
    emotionSelection.addClass('emo-selection-down');
  }
  bkgSolution.addClass('animation-bkg-reverse');
  bkgSolution.removeClass('animation-bkg')
  solutionBox.addClass('display-none');
  solutionBadge.removeClass('display-none');

  bkgFinal.removeClass('display-none');
  bkgFinal.addClass('solution-final-anim');
theFinalStar.removeClass('display-none');

if (!$("#theStar").hasClass("animation-star")) {
  theFinalStar.addClass('animation-star');
}


  resetButton.removeClass('display-none');

  if ($(".talking-bubble-2").hasClass("display-none")) {
    bubble2.removeClass('display-none');
  }

  if (theSolutionIs === "hug") {
    solutionIcon.addClass('solution-hug');
  } else if (theSolutionIs === "alone") {
    solutionIcon.addClass('solution-alone');
  } else if (theSolutionIs === "talk") {
    solutionIcon.addClass('solution-talk');
  } else if (theSolutionIs === "sleep") {
    solutionIcon.addClass('solution-sleep');
  } else if (theSolutionIs === "share") {
    solutionIcon.addClass('solution-share');
  } else if (theSolutionIs === "help") {
    solutionIcon.addClass('solution-help')
  }

}

function reset() {
  solution = false;
  bigger = 0;
  imoFace = startFace;
  emotionText = "...";
  confusedIsTrue = false;
  emotionSelection.removeClass('emo-selection-down');
  bkgSolution.removeClass('animation-bkg');

  changeColor.removeClass('happyness');
  changeColor.removeClass('anger');
  changeColor.removeClass('sadness');
  changeColor.removeClass('fear');
  changeColor.removeClass('fatigue');
  changeColor.removeClass('shyness');
  changeColor.removeClass('boredom');

  solutionIcon.removeClass('solution-hug');
  solutionIcon.removeClass('solution-alone');
  solutionIcon.removeClass('solution-talk');
  solutionIcon.removeClass('solution-sleep');
  solutionIcon.removeClass('solution-share');
  solutionIcon.removeClass('solution-help');

  if (!$("#solution-wrapper").hasClass("display-none")) {
    solutionBox.addClass('display-none');
  }
  if (!$("#scale-wrapper-3").hasClass("display-none")) {
    scaleWrapper3.addClass('display-none');
  }
  if (!$("#scale-wrapper-2").hasClass("display-none")) {
    scaleWrapper2.addClass('display-none');
  }
  if (!$("#solution-button").hasClass("display-none")) {
    newButtonSolution.addClass('display-none');
  }

  if (!$("#solution-found").hasClass("display-none")) {
    solutionBadge.addClass('display-none');
  }

  if (!$("#reset-button").hasClass("display-none")) {
    resetButton.addClass('display-none');
  }

  if ($(".talking-bubble").hasClass("display-none")) {
    bubble.removeClass('display-none');
  }

  if (!$(".talking-bubble-2").hasClass("display-none")) {
    bubble2.addClass('display-none');
  }

  if (!$(".solution-final-wrapper").hasClass("display-none")) {
    bkgFinal.addClass('display-none');
  }

  if (!$("#theStar").hasClass("display-none")) {
    theFinalStar.addClass('display-none');
  }

  if ($("#theStar").hasClass("animation-star")) {
    theFinalStar.removeClass('animation-star');
  }

    bkgFinal.removeClass('solution-final-anim');


playSong();
  theSolutionIs = "none"

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
