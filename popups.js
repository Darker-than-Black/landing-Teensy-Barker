$(document).ready(function() {
    var plus_one = 0;
    $("input[type='tel']").mask("(999)-999-9999");
    $('.order-call ').click(function() {
        $('.subs-back').show();
        $('.banner-subscribe').show();
    });
    $('.banner-subscribe form').submit(function(e) {
        e.preventDefault(e);
        $('.banner-subscribe-main').hide();
        var name = $('.subscribe-name').val();
        var phone = $('.subscribe-phone').val();
        var action = $('.banner-subscribe form').attr('action');
        console.log('n:' + name + ' p : ' + phone + ' a:' + action);
        $.ajax({
                method: "POST",
                url: action,
                data: { username: name, phone: phone }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.sub-thx').show();
            });
    });
    $('.banner-subscribe-close').click(function() {
        $('.subs-back').hide();
        $('.banner-subscribe').hide();
    });
    $('.hid').mouseenter(function() {
        $(this).next().show();
    });
    $('.hid').mouseleave(function() {
        $(this).next().hide();
    });

    $('.sub-form form').submit(function(e) {
        e.preventDefault(e);
        var email = $('.sub-form-email').val();
        var action = $('.sub-form form').attr('action');
        $.ajax({
                method: "POST",
                url: action,
                data: { email: email }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.sub-form-email').val('');
            });
    });
    $('.back_mail form').submit(function(e) {
        e.preventDefault(e);
        var name = $('.back_mail-name').val();
        var phone = $('.back_mail-phone').val();
        var email = $('.back_mail-email').val();
        var comment = $('.back_mail-msg').val();
        var action = $('.back_mail form').attr('action');
        $.ajax({
                method: "POST",
                url: action,
                data: { username: name, phone: phone, email: email, comment: comment }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.back_mail-name').val('');
                $('.back_mail-phone').val('');
                $('.back_mail-email').val('');
                $('.back_mail-msg').val('');
            });
    });
    $('.order-book').click(function() {
        // $('.subs-back').show();
        // $('.banner-booking-l').show();
    });
    $('.banner-booking-l-close').click(function() {
        $('.subs-back').hide();
        $('.banner-booking-l').hide();
        plus_one = 0;
        if ($('.book-form-room').val() == 1) { maxsize = 6; }
        if ($('.book-form-room').val() == 2) { maxsize = 5; }
        if ($('.book-form-room').val() == 3) { maxsize = 4; }
        if ($('.book-form-amount-res').text() == maxsize) {
            $('.book-form-amount-res').text(parseInt($('.book-form-amount-res').text()) - 1);
            for (var i = maxsize; i > parseInt($('.book-form-amount-res').text()); i--) {
                $('.book-form-team-pics img:nth-child(' + i + ')').attr('src',
                    window.location.hostname+'/wp-content/themes/pastka/additionals/popups/black-m.png')
            };
        };
    });
    $('.book-form form').submit(function(e) {
        e.preventDefault(e);
        var name = $('.book-form-name').val();
        var phone = $('.book-form-phone').val();
        var email = $('.book-form-email').val();
        var comment = $('.book-form-msg').val();
        console.log($('.book-form-price').val());
        var price = $('.book-form-price').val();
        var room = $('.book-form-room').val();
        var date = $('.book-form-date').val();
        var time = $('.book-form-time').val();
        var team = $('.book-form-amount-res').text();
        var promocode = $('.book-form-promo').val();
        var action = $('.book-form form').attr('action');
        var lang = $('.book-form-lang').val();
        $.ajax({
                method: "POST",
                url: action,
                data: {
                    username: name,
                    phone: phone,
                    email: email,
                    comment: comment,
                    price: price,
                    room: room,
                    date: date,
                    time: time,
                    team: team,
                    lang: lang,
                    promocode: promocode
                }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.banner-booking-l').hide();
                $('.book-thx').show();
            });
        $.ajax({
                method: "POST",
                url: location.protocol + "//" + location.host +
                    '/wp-content/themes/pastka/scripts/add_order.php',
                data: {
                    username: name,
                    phone: phone,
                    email: email,
                    comment: comment,
                    price: price,
                    room: room,
                    date: date,
                    time: time,
                    gamers: team,
                    roomname: room,
                    promocode: promocode

                }
            })
            .done(function(msg) {
                console.log("Data Saved: " + msg);
                $('.banner-booking-l').hide();
                $('.book-form-name').val('');
                $('.book-form-phone').val('');
                $('.book-form-email').val('');
                $('.book-form-msg').val('');
                $('.book-form-price').val('400');
                $('.book-form-room').val('');
                $('.book-form-date').val('');
                $('.book-form-time').val('');
                $('.book-form-amount-res').text('2');
                $('.book-form-promo').val('');
                $('.book-thx').show();
                $(".book-date[date='" + date + "'][time='" + time + "']").addClass('disabled');
            });

    });
    $('.banner-booking-thx-close').click(function() {
        $('.subs-back').hide();
        $('.book-thx').hide();
    });
    $('.book-form-plus').click(function() {
        var maxsize = 6;
        if ($('.book-form-room').val() == 1) { maxsize = 6; }
        if ($('.book-form-room').val() == 2) { maxsize = 5; }
        if ($('.book-form-room').val() == 3) { maxsize = 4; }
        if ($('.book-form-amount-res').text() < maxsize) {
            $('.book-form-amount-res').text(parseInt($('.book-form-amount-res').text()) + 1);
            for (var i = 2; i <= parseInt($('.book-form-amount-res').text()); i++) {
                $('.book-form-team-pics img:nth-child(' + i + ')').attr('src',
                    window.location.hostname+'/wp-content/themes/pastka/additionals/popups/white-m.png')
            }
        };
        if ($('.book-form-amount-res').text() == maxsize && plus_one == 0) {
            var price = parseInt($('.book-form-p').text().substr(0, 3)) + 100;
            $('.book-form-p').text(price + ' грн.');
            $('.book-form-price').val(price);
            plus_one = 1;
        };
    });
    $('.book-form-minus').click(function() {
        var maxsize = 6;
        if ($('.book-form-room').val() == 1) { maxsize = 6; }
        if ($('.book-form-room').val() == 2) { maxsize = 5; }
        if ($('.book-form-room').val() == 3) { maxsize = 4; }
        if ($('.book-form-amount-res').text() == maxsize) {
            var price = parseInt($('.book-form-p').text().substr(0, 3)) - 100;
            $('.book-form-p').text(price + ' грн.');
            plus_one = 0;
            $('.book-form-price').val(price);
        };
        if ($('.book-form-amount-res').text() > 2) {
            $('.book-form-amount-res').text(parseInt($('.book-form-amount-res').text()) - 1);
            for (var i = maxsize; i > parseInt($('.book-form-amount-res').text()); i--) {
                $('.book-form-team-pics img:nth-child(' + i + ')').attr('src',
                    window.location.hostname+'/wp-content/themes/pastka/additionals/popups/black-m.png')
            };

        };
    });
});