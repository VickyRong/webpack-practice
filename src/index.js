import _ from 'lodash';
import './style.css'
import imgSrc from './pic_01.jpeg'

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack','杨柳依依'], ' ');
    element.classList.add('hello');
    var bgImg = new Image();
    bgImg.src = imgSrc;
    element.appendChild(bgImg);
    return element;
  }
  
  document.body.appendChild(component());