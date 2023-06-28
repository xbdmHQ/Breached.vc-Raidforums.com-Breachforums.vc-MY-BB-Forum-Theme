

$(window).scroll(function(){if($(this).scrollTop()>=200){$('#scrolltop').fadeIn(200);}else{$('#scrolltop').fadeOut(200);}});$('#scrolltop').click(function(){$('html, body').animate({scrollTop:0},500);});


