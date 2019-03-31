;(function($) {
  /*$(document).ready(function(){
    alert(localized_data.ajax_url);
  })*/

  $("#mellowpxls-contact-form").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var serialized_form_d = $(this).serialize(); // serializes the form's elements.
    
    $.ajax({
           type: "POST",
           url: localized_data.ajax_url,
           data: serialized_form_d,
           success: function(data) {
              $("#mellowpxls-contact-form").find("input[type='text']").addClass("blowup_inputA").end()
                                  .find("input[type='email']").addClass("blowup_inputB").end()
                                  .find("textarea[name='message']").addClass("blowup_textarea").end()
                                  .find("input[type='submit']").addClass("blowup_inputC").end();

              $(".message-sent-wrapper").toggleClass("show").end();
              $(".message-sent-wrapper").find("em").addClass("fadein").end();
           }
    });
  });

})(jQuery);
