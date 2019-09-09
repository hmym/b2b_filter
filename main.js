'use strict';

{
  let ids = document.querySelectorAll('[id]');
  
  let box = document.getElementsByClassName('box');

  const item = document.getElementById('item');
  const dataRed = item.querySelectorAll('[data-color="red"]');
  const dataGreen = item.querySelectorAll('[data-color="green"]');
  const dataBlue = item.querySelectorAll('[data-color="blue"]');
  const dataYellow = item.querySelectorAll('[data-color="yellow"]');

  // boxが表示されていたら消す関数
  function hide_boxes() {
    for (let i = 0; i < box.length; i++) {
      box[i].style.display = 'none';
    }
  }
  // boxを表示する関数
  function block_boxes(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].style.display = 'block';
    }
  }
  
  for(let i = 0; i < ids.length; i++) {
    // いずれかのボタンがクリックされたら
    ids[i].addEventListener('click', function() {
      // 表示されているboxがあれば消す
      hide_boxes();
      // クリックされたボタンがredだった場合
      if (i === 0 ) {
        // データ属性にdata-color="red"がセットされているものを表示する
        block_boxes(dataRed);
      // クリックされたボタンがgreenだった場合
      } else if (i === 1) {
        // データ属性にdata-color="green"がセットされているものを表示する
        block_boxes(dataGreen);
      // クリックされたボタンがblueだった場合
      } else if (i === 2) {
        // データ属性にdata-color="blue"がセットされているものを表示する
        block_boxes(dataBlue);
      // クリックされたボタンがyellowだった場合
      } else {
        // データ属性にdata-color="yellow"がセットされているものを表示する\
        block_boxes(dataYellow);
      }
    });
  }
}
