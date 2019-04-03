//Init SpeechSynth
const synth = window.speechSynthesis;

//DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

//Init voices array
let voice = [];

const getVoices = () => {
  voices = synth.getVoices();
  //Loop through voices and create a select option for each
  voices.forEach(voice => {
    //Create option element
    const option = document.createElement("option");
    //Fill option with voice and language
    option.textContent = voice.name + "(" + voice.lang + ")";
    //Set voice option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}
