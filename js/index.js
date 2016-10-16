$(document).ready(start);

function start(){
    $('.dropdown' ).hover(openMenu);
    $('.button-done').click(completedFood);
    $('.suggest-button').click(slideMenuToggle);
    $('.contact-button').click(fatAlert);
}

function openMenu() {
  $('.sub-menu').slideToggle();
}

function completedFood() {
  $('.post-wrapper').toggleClass('eaten');
  $('.food-image').toggleClass('eaten');
  $('.resturant-location').toggleClass('eaten');
  $('.smashed-it').toggleClass('eaten');
}

function slideMenuToggle(){
  $('.suggest-panel').toggleClass('open');
}

function fatAlert(){
  alert('No need to contact me, I am too busy eating. Make a suggestion instead!');
}
