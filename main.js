'use strict';

{
  let ids = document.querySelectorAll('[id]');
  
  let box = document.getElementsByClassName('box');

  const item = document.getElementById('item');
  const dataRed = item.querySelectorAll('[data-color="red"]');
  const dataGreen = item.querySelectorAll('[data-color="green"]');
  const dataBlue = item.querySelectorAll('[data-color="blue"]');
  const dataYellow = item.querySelectorAll('[data-color="yellow"]');

  
  function kesu() {
    for (let i = 0; i < box.length; i++) {
      box[i].style.display = 'none';
    }
  }
  
  for(let i = 0; i < ids.length; i++) {
    ids[i].addEventListener('click', function() {
      kesu();

      if (i === 0 ) {
        for (let i = 0; i < dataRed.length; i++) {
          dataRed[i].style.display = 'block';
        }
      }else if(i === 1) {
        for (let i = 0; i < dataGreen.length; i++) {
          dataGreen[i].style.display = 'block';
        }
      }else if(i === 2) {
        for (let i = 0; i < dataBlue.length; i++) {
          dataBlue[i].style.display = 'block';
        }
      }else{
        for (let i=0; i<dataYellow.length; i++) {
          dataYellow[i].style.display = 'block';
        }
      }
    });
  }
}
