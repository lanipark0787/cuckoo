// .btn-1에 check 클래스 추가
$('.pr_btn_1').addClass('check');



$('.pr_btn_1').on('click', function () {
    $('.check').removeClass('check');
    $(this).addClass('check');
    $('.product>ul').attr('hidden', true);
    $('#Sig_list_1').attr('hidden', false);
});



$('.pr_btn_2').on('click', function () {
    $('.check').removeClass('check');
    $(this).addClass('check');
    $('.product>ul').attr('hidden', true);
    $('#Sig_list_2').attr('hidden', false);
});




$('.pr_btn_3').on('click', function () {
    $('.check').removeClass('check');
    $(this).addClass('check');
    $('.product>ul').attr('hidden', true);
    $('#Sig_list_3').attr('hidden', false);
});




/*************** sns 캐러셀 자동 ***************/
setInterval(function () {
    $('.slider').animate({
        left: '-560px'
    }, 200, function () {
        $('.slider').append($('.slider>li:first')).css('left', 0);
    });
}, 3000);


/*************** sns 캐러셀 이전&다음 버튼 ***************/
$('.next').click(function () {
    $('.product>ul').animate({
        left: '-560px'
    }, 200, function () {
        $('.slider').append($('.slider>li:first')).css('left', 0);
    });
});
$('.prev').click(function () {
    $('.slider').animate({
        left: '-315px'
    }, 0, function () {
        $('.slider').prepend($('.slider>li:last'));
    });
    $('.slider').animate({
        left: 0
    }, 200);
});
