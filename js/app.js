$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    // Ryu change to ready 
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
   // Ryu back to still 
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  // Ryu change to throwing. Play hadouken sound
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
      .animate (
      {'left': '1020px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '620px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  // Cool pose when 'x' is pressed
  $('body').keydown(function(key) {

    if (key.which == 88){
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
 })
   .keyup(function (key) {
        if(key.which == 88) {
          $('.ryu-cool').hide();
          $('.ryu-still').show();
        }
  });
  

});

// Hadouken sound
function playHadouken() {
  $('#hadouken-sound')[0].volume= 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}