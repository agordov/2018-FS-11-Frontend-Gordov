import _ from 'lodash';

function say() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Dynamic text']);
    element.style.backgroundColor = 'blue';
    return element
}

document.body.appendChild(say());