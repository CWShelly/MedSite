// $(document).ready(function($){
//   $('#checkbox').change(function(){
//     setInterval(function(){
//       moveR();
//     },3000);
//   });

  $(document).ready(function($){
    // $('#checkbox').change(function(){
      setInterval(function(){
        moveR();
      },4000);
    // });
// });

var slideX = $('#slides ul li').length;
var slideW = $('#slides ul li').width();
var slideH = $('#slides ul li').height();
var slideULW = slideX * slideW;

$('#slides').css({width: slideW, height: slideH});

$('#slides ul').css({width:slideULW, marginLeft: -slideW});

$('#slides ul li:last-child').prependTo('#slides ul');

function moveL(){
  $('#slides ul').animate({
    left: + slideW
  }, 200, function(){
    $('#slides ul li:last-child').prependTo('#slides ul');
    $('#slides ul').css('left', '');
  });
};


function moveR(){
  $('#slides ul').animate({
    left: -slideW}, 200, function(){
      $('#slides ul li:first-child').appendTo('#slides ul');
      $('#slides ul').css('left', '');
    });
  };


$('a.previous').click(function(){
  moveL();
});

$('a.next').click(function(){
  moveR();

});

});
