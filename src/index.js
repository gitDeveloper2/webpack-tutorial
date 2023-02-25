// import image from './assets/image.png';
import './style.scss';
require('bootstrap');
// require('bootstrap/dist/css/bootstrap.css');

const title=document.createElement("h3");
title.textContent="weboack made easy!";
const page=document.querySelector('body');
page.append(title);

const img=new Image();
// img.src=image;

// page.appendChild(img);