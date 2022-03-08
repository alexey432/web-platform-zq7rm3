'use strict';

//setting up the Router with pages
Router.init('mainArea', [
  new Page('#home', 'pages/home.html'), // 1st Page is default if no URL match
  new Page('#about', 'pages/about.html'),
  // add new pages here
]);
