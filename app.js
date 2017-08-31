$(document).ready(onReady);

function onReady() {
  // Your code here

  // Make R red
$('.red').css('color', 'red');
  // Make O orange
$('.orange').css('color', 'orange');
  // Make Y yellow
$('.yellow').css('color', 'yellow');
  // Make G green
$('p').css('color', 'green');
  // Make B blue
$('div span').first().css('color', 'blue');
  // Make I indigo
$('div span:nth-child(2)').css('color', 'indigo');
  // Make V violet
$('div span').last().css('color', 'violet');
}
