$(document).ready(start);

function start(){
    $('.dropdown' ).hover(openMenu);
    $('.button-done').click(completedFood);
    $('.suggest-button').click(slideMenuToggle);
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
