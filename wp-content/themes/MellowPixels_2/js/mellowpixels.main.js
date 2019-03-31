(function($) {  

  var setHeight = function() {
    windowHeight = window.innerHeight,
    $('#fulscreen-wrapper').css('height', windowHeight);
    $('#fullheight-page').css('min-height', windowHeight-283);
  };
  
  $(document).ready(function () {
    setHeight();  
  })

  $(window).resize(function() {
    setHeight();
  });

  $('#front-screen-logo').bind('click', function(){
    var header_height = document.getElementById('masthead').offsetHeight;
    console.log("height "+window.innerHeight+'header_height '+header_height);
    $('body').animate({ scrollTop: window.innerHeight - header_height + 10 }, 500);
  })
})(jQuery);

