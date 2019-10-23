import _ from 'lodash';
import './style.css';                    //添加css的loader
import imgSrc from './images/01.jpg';    //添加图片资源
import Data from './data.xml'            //加载文件资源



function component() {
    var element = document.createElement('div');
    //添加文字
    element.innerHTML = _.join(['Hello', 'VickyRong!!!','汉体书写可爱文字'], ' ');
    //添加css
    element.classList.add('hello'); 
    //添加图片资源
    var img = new Image();
    img.src = imgSrc;
    element.appendChild(img);
    //加载数据
    console.log(Data)
  
    return element;
}
  
  document.body.appendChild(component());