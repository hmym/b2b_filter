'use strict';

{
  let ids = document.querySelectorAll('[id]');
  
  let box = document.getElementsByClassName('box');

  const item = document.getElementById('item');
  const dataRed = item.querySelectorAll('[data-color="red"]');
  const dataGreen = item.querySelectorAll('[data-color="green"]');
  const dataBlue = item.querySelectorAll('[data-color="blue"]');
  const dataYellow = item.querySelectorAll('[data-color="yellow"]');

  // boxクラスが表示されていたら消す関数
  function kesu() {
    for (let i = 0; i < box.length; i++) {
      box[i].style.display = 'none';
    }
  }
  
  for(let i = 0; i < ids.length; i++) {
    // いずれかのボタンがクリックされたら
    ids[i].addEventListener('click', function() {
      // 表示されているものがあれば消す
      kesu();
      // クリックされたボタンがredだった場合
      if (i === 0 ) {
        // データ属性にdata-color="red"がセットされているものを表示する
        for (let i = 0; i < dataRed.length; i++) {
          dataRed[i].style.display = 'block';
        }
      // クリックされたボタンがgreenだった場合
      }else if(i === 1) {
        // データ属性にdata-color="green"がセットされているものを表示する
        for (let i = 0; i < dataGreen.length; i++) {
          dataGreen[i].style.display = 'block';
        }
      // クリックされたボタンがblueだった場合
      }else if(i === 2) {
        // データ属性にdata-color="blue"がセットされているものを表示する
        for (let i = 0; i < dataBlue.length; i++) {
          dataBlue[i].style.display = 'block';
        }
      // クリックされたボタンがyellowだった場合
      }else{
        // データ属性にdata-color="yellow"がセットされているものを表示する
        for (let i=0; i<dataYellow.length; i++) {
          dataYellow[i].style.display = 'block';
        }
      }
    });
  }
}
