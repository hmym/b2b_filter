'use strict';

{
  let ids = document.querySelectorAll('[id]');
  let box = document.getElementsByClassName('box');
  const dataRed = document.getElementsByClassName('data-red');
  const dataGreen= document.getElementsByClassName('data-green');
  const dataBlue= document.getElementsByClassName('data-blue');
  const dataYellow= document.getElementsByClassName('data-yellow');

  function kesu() {
    for (let i=0; i<box.length; i++) {
      box[i].style.display = 'none';
    }
  }
  
  for(let i=0; i<ids.length; i++) {
    ids[i].addEventListener('click', function() {
      if (i === 0 ) {
        kesu();
        for (let i=0; i<dataRed.length; i++) {
          dataRed[i].style.display = 'block';
        }
      }else if(i === 1) {
        kesu();
        for (let i=0; i<dataGreen.length; i++) {
          dataGreen[i].style.display = 'block';
        }
      }else if(i === 2) {
        kesu();
        for (let i=0; i<dataBlue.length; i++) {
          dataBlue[i].style.display = 'block';
        }
      }else{
        kesu();
        for (let i=0; i<dataYellow.length; i++) {
          dataYellow[i].style.display = 'block';
        }
      }
    });
  }
}
