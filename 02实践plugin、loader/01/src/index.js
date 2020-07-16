import jietu from './test.png';
import './index.scss'
var img = new Image();
img.src = jietu;
img.classList.add('test')

var div = document.getElementById('root')
div.append(img)