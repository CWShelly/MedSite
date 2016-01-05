// $(document).ready(function(){
//   $('#services').accordion({heightStyle:'content', collapsible:true, active: false});
//
// });

// $(document).ready(function(){
//   $('#services').hover(function(){
//     $(this).find('#card').stop(true, true).slideDown()
//   }, function(){
//     $(this).find('#card').stop(true, true).slideUp()
//   }).find('#card').hide()
//   })

$(document).ready(function(){
  $('#services').hover(function(){
    $(this).find('#card').stop(true, true).slideDown()
  },
    function(){
      $(this).find('#card').stop(true, true).slideUp()
    }).find('#card').hide()

});

$(document).ready(function(){
  $('#services').hover(function(){
    $(this).find('#thor').stop(true, true).slideDown()
  },
    function(){
      $(this).find('#thor').stop(true, true).slideUp()
    }).find('#thor').hide()

});


$(document).ready(function(){
  $('#services').hover(function(){
    $(this).find('#gen').stop(true, true).slideDown()
  },
    function(){
      $(this).find('#gen').stop(true, true).slideUp()
    }).find('#gen').hide()

});




  // $(document).ready(function(){
  //   $('#services').hover(function(){
  //     $(this).find('#thor').stop(true, true).slideDown()
  //   }, function(){
  //     $(this).find('#thor').stop(true, true).slideUp()
  //   }).find('#thor').hide()
  //   })
