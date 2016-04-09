$('.rank-country-container').on('click', function(){
  if ($(this).parents('.rank-container-carbon').length) {
    toggleSubject = '.rank-container-temp';
    selfSubject = '.rank-container-carbon';
  } else if ($(this).parents ('.rank-container-temp').length) {
    toggleSubject = '.rank-container-carbon';
    selfSubject = '.rank-container-temp';
  }

  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(toggleSubject + ' .rank-country-container').show();
  } else {
    $('.rank-country-container').removeClass('active').removeClass('active-toggle');
    $(selfSubject + ' .rank-country-container').show();
    $(this).addClass('active');
    countryId = $(this).attr('id');
    $(toggleSubject + ' .rank-country-container').show().hide();
    $(toggleSubject + ' .rank-country-container#' + countryId).show().addClass('active-toggle');
  }

});
