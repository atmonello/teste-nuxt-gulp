import Vue from 'vue';

let imageExtension = 'png';

if (process.browser) {
  imageExtension = window.navigator.userAgent.match(/safari/gi) ? 'png' : 'webp';
}
Vue.prototype.$imageURL = fileName => `${process.env.imagePath}/${fileName}.${imageExtension}`;
