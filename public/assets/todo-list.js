$(document).ready(function() {

    $('li').click(function() {
        $(this).css({'text-decoration':'line-through'});
        $(this).animate({fontSize: '10px'},10);
    })
});