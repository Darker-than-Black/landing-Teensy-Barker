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

$('#form-ask').submit(function (e) {
    alert( "Handler for .submit() called." );
    e.preventDefault();
});


var btn_section = document.getElementsByClassName('tariff')[0],
	modal_windows_section = document.getElementsByClassName('modal_windows')[0],
	ducument_body = document.body;
var quantity_windows = btn_section.childElementCount;
var modal_window = [];
for(var i=0;i<quantity_windows;i++) {
	modal_window.push({ 
		enter: document.getElementsByClassName('tariff__plans--btn')[i],
		close: document.getElementsByClassName('close')[i],
		modal: document.getElementsByClassName('modal')[i]
	})
};

modal_window.push({ 
	enter: document.getElementsByClassName('header__btn')[0],
	close: document.getElementsByClassName('close')[3],
	modal: document.getElementsByClassName('modal')[3]
});

btn_section.onclick = function (e) {
	for(var i=0;i<quantity_windows;i++) {
		if(e.path[0] == modal_window[i].enter) {
			console.log('yes')
			modal_window[i].modal.style.display = "block";
			ducument_body.style.overflow = "hidden";
			return false;
		}
	}
};
modal_windows_section.onclick = function (e) {
	for(var i=0;i<quantity_windows+1;i++) {
		if(e.path[0] == modal_window[i].close){
			modal_window[i].modal.style.display = "none";
			ducument_body.style.overflow = "auto";
			return false;
		}
	}
};
window.onclick = function(e) {
    for(var i=0;i<quantity_windows+1;i++) {
		if(e.target == modal_window[i].modal){
			modal_window[i].modal.style.display = "none";
			ducument_body.style.overflow = "auto";
			return false;
		}
	}
};

modal_window[3].enter.onclick = function (e) {
	//console.log(e.path)
	modal_window[3].modal.style.display = "block";
	ducument_body.style.overflow = "hidden";
	return false;
};