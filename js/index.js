$(document).ready(start);

function start(){
    $( '.dropdown' ).hover(openMenu);
}

function openMenu() {
  $('.sub-menu').slideToggle();
}
