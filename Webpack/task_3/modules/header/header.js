import $ from 'jquery';
$(document).ready(function() {
    $('body').prepend('<header></header>');
    $('header').append('<div id="logo"></div>');
    $('header').append('<h1>Holberton Dashboard</h1>');
    console.log('Init header');
  });