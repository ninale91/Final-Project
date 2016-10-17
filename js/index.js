$(document).ready(start);

function start(){
    $('.dropdown' ).hover(openMenu);
    $('.button-done').click(completedFood);
    $('.suggest-button').click(slideMenuToggle);
    $('.contact-button').click(fatAlert);
    $('#hamburger-button').click(openResponsiveMenu);
}

function openMenu() {
  $('.sub-menu').slideToggle();
}

function completedFood() {
  var wrapper = $(this).closest('.post-wrapper');
  wrapper.toggleClass('eaten');
  wrapper.find('.food-image').toggleClass('eaten');
  wrapper.find('.resturant-location').toggleClass('eaten');
  wrapper.find('.smashed-it').toggleClass('eaten');
}

function slideMenuToggle(){
  $('.suggest-panel').toggleClass('open');
}

function fatAlert(){
  alert('No need to contact me, I am too busy eating. Make a suggestion instead!');
}

function openResponsiveMenu() {
  $('nav').slideToggle();
}
