$(document).ready(function() {
    $(window).scroll(function() {
        if ($(document).scrollTop() > 800) {
            $(".side-posts").addClass("test");
            } else {
            $(".side-posts").addClass("limited");
           }
    });
});