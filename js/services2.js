// alert('hey');

// $(document).ready(function(){
//   $('#services').hover(function(){
//     $(this).find('#card').stop(true, true).slideDown()
//   },
//     function(){
//       $(this).find('#card').stop(true, true).slideUp()
//     }).find('#card').hide()
//
// });


$(document).ready(function(){
  $('#card').hover(function(){
    $('#card').find('.subCard').stop(true, true).slideDown()
  },
function(){
  $('#card').find('.subCard').stop(true, true).slideUp()}).find('.subCard').hide()
});


$(document).ready(function(){
  $('#thor').hover(function(){
    $('#thor').find('.subThor').stop(true, true).slideDown()
  },
function(){
  $('#thor').find('.subThor').stop(true, true).slideUp()}).find('.subThor').hide()
});



$(document).ready(function(){
  $('#gen').hover(function(){
    $('#gen').find('.subGen').stop(true, true).slideDown()
  },
function(){
  $('#gen').find('.subGen').stop(true, true).slideUp()}).find('.subGen').hide()
});
