$(document).ready(function(){
    $(".js-btn-form").on("click", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

        if ($('.js-preview').position().top()) {
            alert('hjfvhwem')
        }
});