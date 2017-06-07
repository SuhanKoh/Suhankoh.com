$(document).ready(function() {

  //Edge case for back button once linked back
  var jquery_hashid = window.location.hash.substr(1);
  if (jquery_hashid!=''){
    if($('.mdl-layout__tab-panel').hasClass('is-active')){       
      $('.mdl-layout__tab-panel').removeClass('is-active'); 
    }
    $('#'+jquery_hashid).addClass('is-active');
    if($('.mdl-layout__drawer').hasClass('is-visible')){
      $('.mdl-layout__drawer').removeClass('is-visible');
      $('.mdl-layout__drawer').attr('aria-hidden', true );
      $('.mdl-layout__obfuscator').removeClass('is-visible');
    }
  }

  $('.link_tab').click(function(){
    if($('.mdl-layout__tab-panel').hasClass('is-active')){       
      $('.mdl-layout__tab-panel').removeClass('is-active');
    }
    $($(this).attr('href')).addClass('is-active');
    if($('.mdl-layout__drawer').hasClass('is-visible')){
      $('.mdl-layout__drawer').removeClass('is-visible');
      $('.mdl-layout__drawer').attr('aria-hidden', true );
      $('.mdl-layout__obfuscator').removeClass('is-visible');
    }
  });
});
