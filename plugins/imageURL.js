import Vue from 'vue';

Vue.prototype.$imageURL = fileName => `${process.env.imagePath}/${fileName}.${process.env.imageExtension}`;
