import _ from 'lodash';
import './style.css';
import imageWebpack from './assets/images/webpack.png';

function component() {
    const elem = document.createElement('div');
    const imageElem = new Image();
    imageElem.src = imageWebpack;
    elem.innerHTML = _.join(['Hello', 'webpack'], ' ');
    elem.appendChild(imageElem);
    elem.classList.add('hello');
    return elem;
}

document.body.appendChild(component());