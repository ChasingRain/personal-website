$('div .tile').hover(function() {
  $(this).addClass('divhover');
}, function() {
  $(this).removeClass('divhover');
})

$('.gallery').click(function() {
  let html = '<img src="'+$(this).children('img').attr('src') + '" >'
  $(html).modal();
  // $(this).children('img').modal();
  // .html($(this).children('img').attr('src'))
})
