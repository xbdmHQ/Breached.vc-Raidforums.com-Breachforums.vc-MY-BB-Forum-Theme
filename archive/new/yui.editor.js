function addemot(emot, emoturl, qse_area, type) {
  area = '';
  if (type) {
    area = '.yuieditor-emoticons-more_' + qse_area + '';
  } 
  else {
    area = '.yuieditor-emoticons_' + qse_area + '';
  }
  $(area).append('<li><a class="yuieditor-emoticons" title="' + emot + '" onclick="document.getElementById(\'shout_text\').value += \' '+ emot +' \';$(\'.yuieditor-dropdown\').hide();document.getElementById(\'shout_text\').focus()"><img src="' + emoturl + '" alt="' + emot + '"></a></li>');

}

function createemotlist(qse_area) {
  if (document.getElementsByClassName('yuieditor-emoticons_' + qse_area + '') [0].innerHTML === '') {
    for (var i in emoticons.dropdown) {
      addemot(i, emoticons.dropdown[i], qse_area, 0);
    }
  }
}


function toolbar(qse_area) {
  button = '<div id="yuieditor-color_' + qse_area + '_popup" class="yuieditor-dropdown yuieditor-color-picker" style="display: none;">' +
  '<div class="color_palette_placeholder_' + qse_area + '" data-local="' + qse_area + '" data-orientation="h" data-height="7" data-width="10" data-bbcode="true"></div>' +
  '</div>' +
  '<div id="yuieditor-emoticons_' + qse_area + '_popup" class="yuieditor-dropdown yuieditor-insertemoticon yuieditor-insertemoticon-popup" style="display: none;">' +
  '<ul class="yuieditor-insertemoticon yuieditor-emoticons-ul yuieditor-emoticons_' + qse_area + '"></ul>' +
  '<ul class="yuieditor-insertemoticon yuieditor-emoticons-ul yuieditor-emoticons-more_' + qse_area + '" style="display: none;"></ul>' +
  '</div>' +
  '<div class="yuieditor-toolbar">' +
  '<div class="yuieditor-group yuieditor-group_' + qse_area + '">' +
  '</div>' +
  '</div>';
  return button;
};
($.fn.on || $.fn.live).call($(document), 'click', '.yuieditor-button-emoticon', function (e) {
  e.preventDefault();
  qse_area = $(this).attr('data-area');
  createemotlist(qse_area);

});




