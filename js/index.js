$(document).ready(start);

function start(){
    $('.dropdown' ).hover(openMenu);
    $('.button-done').click(completedFood);
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
