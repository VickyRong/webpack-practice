import _ from 'lodash';
import { cube } from './math.js'


if(process.env.NODE_ENV !== 'production'){
  console.log('looks like we are in dev mode!')
}


function component() {
    var element = document.createElement('pre');
    element.innerHTML = [
      'Hello webpack!',
     '5 cubed is equal to ' 
     + cube(5)].join('\n\n')

    return element;
}
  
  document.body.appendChild(component());