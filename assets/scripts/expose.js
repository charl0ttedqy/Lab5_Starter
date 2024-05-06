// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //const element initailization
  const hornSelect = document.getElementById('horn-select');
  const hornIcon = document.querySelector('section#expose img');
  const hornAudio = document.querySelector('section#expose audio');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('section#expose button');
  const confetti = new JSConfetti();

  //selct horn icon and audio
  hornSelect.addEventListener('change', function(){
    hornIcon.src = 'assets/images/' + hornSelect.value + '.svg';
    hornAudio.src = 'assets/audio/'+ hornSelect.value + '.mp3';
  });

  //control volume icon and call changeVolume to determine volume
  volumeControl.addEventListener('input', function(){
    const volume = volumeControl.value;

    //change volumeIcon accordingly
    if (volume == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if (volume >= 1 && volume < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if (volume >= 33 && volume < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    //set volume of hornAudio (value between 0-1)
    hornAudio.volume = volume/100;
  });

  //play horn audio
  playButton.addEventListener('click', function(){
    //play horn audio
    hornAudio.play();
    //if party horn, confetti
    if (hornSelect.value=='party-horn'){
      confetti.addConfetti();
    }
  });
}

