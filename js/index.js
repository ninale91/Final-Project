$(document).ready(start);

function start(){
  $('.contact').click(slideMenuToggle);
}

function slideMenuToggle(){
  $('.contact').toggleClass('open');
}
