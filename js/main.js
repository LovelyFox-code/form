
$('.prev__step').click(function () {
    var cur = $('.form__step').index($('.form__step.active'));
    if (cur!=0) {
        $('.form__step').removeClass('active');
        $('.form__step').eq(cur-1).addClass('active');
    }
});
$('.next__step').click(function () {
    var cur = $('.form__step').index($('.form__step.active'));
    if (cur!=$('.form__step').length-1) {
        $('.form__step').removeClass('active');
        $('.form__step').eq(cur+1).addClass('active');
    }
    else if(cur!=$('.form__step').is(":last-child")){
        $('.finish').css('display', 'inline')
        $('.steps__form').css('display', 'none')
    }
});
    
