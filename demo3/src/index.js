import _ from 'lodash';
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    //添加文字
    element.innerHTML = _.join(['Hello', 'VickyRong!!!','汉体书写可爱文字'], ' ');
    //添加按钮
    var btn = document.createElement('button');
    btn.innerHTML = '点我';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
  
  document.body.appendChild(component());