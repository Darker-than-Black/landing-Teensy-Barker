var wow = new WOW(
    {
        boxClass:     'wow',
        animateClass: 'animated',
        offset:       0,       
        mobile:       true,   
        live:         true,
        callback:     function(box) {
        },
        scrollContainer: null
    }
);
wow.init();

$(document).ready(function(){
	//$("input[type='tel']").mask("(999)-999-9999");
	$('#form-ask').submit(function (e) {
    	console.log( "Handler for .submit() called." );
    	e.preventDefault();
    	var name = $('.form-connect-name').val();
        var phone = $('.form-connect-phone').val();
        var email = $('.form-connect-email').val();
        var comment = $('.form-connect-questions').val();
        var action = $('.form-connect ').attr('action');
        console.log(name+" "+phone+' '+email+' '+comment+' ');
        $.ajax({
                method: "POST",
                url: action,
                data: { username: name, phone: phone, email: email, comment: comment }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.form-connect-name').val('');
                $('.form-connect-phone').val('');
                $('.form-connect-email').val('');
                $('.form-connect-questions').val('');
            });
	});
});



var btn_section = document.getElementsByClassName('tariff')[0],
	document_body = document.body,
	close = document.getElementsByClassName('close')[0],
	modal = document.getElementsByClassName('modal')[0];
var quantity_windows = btn_section.childElementCount; // подсчет количества кнопок
var modal_window = [];
// цыкл нужен что бы создать ассоцыативный массив путей к кнопкам
for(var i=0;i<quantity_windows;i++) {
	modal_window.push({ 
		enter: document.getElementsByClassName('tariff__plans--btn')[i],
	})
};

btn_section.onclick = function (e) {
	for(var i=0;i<quantity_windows;i++) {
		if(e.path[0] == modal_window[i].enter) {
			modal.style.display = "block";
			document_body.style.overflow = "hidden";
			return false;
		}
	}
};
// ивент клика на крестик в модальном окне
close.onclick = function (e) {
	modal.style.display = "none";
	document_body.style.overflow = "auto";
	return false;
};
// ивент клика мыши за областю модального окна, что бы оно зкарылось,
// для тех кто не знает для чего придемали крестик
window.onclick = function(e) {
	if(e.target == modal){
		modal.style.display = "none";
		document_body.style.overflow = "auto";
		return false;
 	}
};

// Smooth scroll to anchor
$('.header__btn')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          //$target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            //$target.focus();
          };
        });
      }
    }
  });