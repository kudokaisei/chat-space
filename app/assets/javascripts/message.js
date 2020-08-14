$(function(){
  function buildHTML(message){
    if(message.image) {
      let html =
        `<div class="message-field">
          <div class="message-field__view">
            <div class="message-field__view__name">
              ${message.user_name}
            </div>
            <div class="message-field__view__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message-field__message">
            <p class="message-field__message__text">
              ${message.content}          
            </p>
            <img class="message-field__message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="message-field">
        <div class="message-field__view">
          <div class="message-field__view__name">
            ${message.user_name}
          </div>
          <div class="message-field__view__date">
            ${message.created_at}
          </div>
        </div>
        <div class="message-field__message">
          <p class="message-field__message__text">
            ${message.content}          
          </p>
        </div>
      </div>`
      return html;
    };
  } 

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      let html = buildHTML(message)
      $(".message-zone").append(html);
      $('form')[0].reset();
    })
  });
});


