$(document).ready(function() {

  // $('body').animate({
  //   backgroundPositionY:'-2180px'
  // },20000)

  $("#contact_form").submit(function(e) {
    e.preventDefault();
    var formData = $("#contact_form").serialize();
    $.ajax({
      type: 'POST',
      url: $('#contact_form').attr('action'),
      data: formData
    })
    .done(function(response) {
      console.log('it was successful')
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
      var text = $('#contact_form').find('input[name="name"]').val();
      $("#contact_form").addClass("shrink");
      $(".container").addClass("bgchange");
      $(".thanks").addClass("reveal");
      // $("body").addClass("invert");
      $(".thanks").append("<span>" + text + "</span>");
    })
    .fail(function(data) {
      // Make sure that the formMessages div has the 'error' class.
      // $(formMessages).removeClass('success');
      // $(formMessages).addClass('error');

      // Set the message text.
      if (data.responseText !== '') {

      } else {
        console.log('Oops! An error occured and your message could not be sent.');
      }
    });
  });
})
