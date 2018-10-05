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
	modal_windows_section = document.getElementsByClassName('modal_windows')[0],
	document_body = document.body;
var quantity_windows = btn_section.childElementCount;
var modal_window = [];
//for(var i=0;i<quantity_windows;i++) {
	modal_window.push({ 
		enter: document.getElementsByClassName('tariff__plans--btn'),
		close: document.getElementsByClassName('close'),
		modal: document.getElementsByClassName('modal')
	})
//};

modal_window.push({ 
	enter: document.getElementsByClassName('header__btn'),
	close: document.getElementsByClassName('close'),
	modal: document.getElementsByClassName('modal')
});

btn_section.onclick = function (e) {
	for(var i=0;i<quantity_windows;i++) {
		if(e.path[0] == modal_window[i].enter) {
			console.log('yes')
			modal_window[i].modal.style.display = "block";
			document_body.style.overflow = "hidden";
			return false;
		}
	}
};
modal_windows_section.onclick = function (e) {
	for(var i=0;i<quantity_windows+1;i++) {
		if(e.path[0] == modal_window[i].close){
			modal_window[i].modal.style.display = "none";
			document_body.style.overflow = "auto";
			return false;
		}
	}
};
// window.onclick = function(e) {
//     for(var i=0;i<quantity_windows+1;i++) {
// 		if(e.target == modal_window[i].modal){
// 			modal_window[i].modal.style.display = "none";
// 			document_body.style.overflow = "auto";
// 			return false;
// 		}
// 	}
//};

// modal_window[3].enter.onclick = function (e) {
// 	//console.log(e.path)
// 	modal_window[3].modal.style.display = "block";
// 	document_body.style.overflow = "hidden";
// 	return false;
//};