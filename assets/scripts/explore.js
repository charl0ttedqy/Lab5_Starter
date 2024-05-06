// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //initialize const elements
  const speechSyn = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const faceImg = document.querySelector('#explore img');

  //initialize voices list
  let voices = [];

  //helper function to populate voices list
  function addToVoiceList(){
    voices = speechSyn.getVoices();
    //loop though voices
    for(let i=0; i< voices.length; i++){
      const option = document.createElement('option');
      option.textContent = voices[i].name + '( ' + voices[i].lang + ' )';
      //if default
      if(voices[i].default) {
        option.textContent += ' - DEFAULT';
      }

      //set lang and name of voices[i]
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  //call helper function
  addToVoiceList(); 
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addToVoiceList;
  }

  //press talk button, change faceImg and speak
  talkButton.addEventListener('click', function(event){
    event.preventDefault();

    //create new utterThis const and set option
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    //loop through voices and find the selected option
    for (let i=0; i<voices.length; i++){
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    //change faceImg to open when synthesizing
    faceImg.src = 'assets/images/smiling-open.png';
    speechSyn.speak(utterThis);
    //change back to close smiling face when done
    utterThis.onend = function(){
      faceImg.src = 'assets/images/smiling.png';
    }

  });
  

}