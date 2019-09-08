'use strict';

{
//  let id = 'red';
  let ids = document.querySelectorAll('[id]');
  const typeRed = document.getElementsByClassName('type-red');
  const typeGreen= document.getElementsByClassName('type-green');
  const typeBlue= document.getElementsByClassName('type-blue');
  const typeYellow= document.getElementsByClassName('type-yellow');
  
  for(let i=0; i<ids.length; i++) {
    ids[i].addEventListener('click', function() {
      if (i === 0 ) {
        for (let i=0; i<typeRed.length; i++) {
          typeRed[i].style.display = 'block';
        }
        for (let i=0; i<typeGreen.length; i++) {
          typeGreen[i].style.display = 'none';
        }
        for (let i=0; i<typeBlue.length; i++) {
          typeBlue[i].style.display = 'none';
        }
        for (let i=0; i<typeYellow.length; i++) {
          typeYellow[i].style.display = 'none';
        }
      }else if(i === 1) {
        for (let i=0; i<typeRed.length; i++) {
          typeRed[i].style.display = 'none';
        }
        for (let i=0; i<typeGreen.length; i++) {
          typeGreen[i].style.display = 'block';
        }
        for (let i=0; i<typeBlue.length; i++) {
          typeBlue[i].style.display = 'none';
        }
        for (let i=0; i<typeYellow.length; i++) {
          typeYellow[i].style.display = 'none';
        }

      }else if(i === 2) {
        for (let i=0; i<typeRed.length; i++) {
          typeRed[i].style.display = 'none';
        }
        for (let i=0; i<typeGreen.length; i++) {
          typeGreen[i].style.display = 'none';
        }
        for (let i=0; i<typeBlue.length; i++) {
          typeBlue[i].style.display = 'block';
        }
        for (let i=0; i<typeYellow.length; i++) {
          typeYellow[i].style.display = 'none';
        }
      }else{
        for (let i=0; i<typeRed.length; i++) {
          typeRed[i].style.display = 'none';
        }
        for (let i=0; i<typeGreen.length; i++) {
          typeGreen[i].style.display = 'none';
        }
        for (let i=0; i<typeBlue.length; i++) {
          typeBlue[i].style.display = 'none';
        }
        for (let i=0; i<typeYellow.length; i++) {
          typeYellow[i].style.display = 'block';
        }
      }
    });
  }
}
