$(document).ready(function() {

    $("#cart").click(function() {
     $("#cartMenu").show();
    
    });
    
    $("#account").click(function() {
     $("#accountMenu").show();
    
    });
    
    $("#help").click(function() {
     $("#helpMenu").show();
    });
    
    $('.dropdown-menu').mouseleave(function() {
     $('.dropdown-menu').hide();
    });
    
    });