$(function(){

var CardItems = 0;
$(document).on("click", ".add-item", function(event){
    event.preventDefault();
    
    $(".cart-items")
        .text(++CardItems)
        .show().css("display", "flex");

    });

    $(".carousel").flickity({ 
        cellAlign: "left",
        contain: true,
        percentPosition: false,
        autoPlay: false,
        prevNextButtons: true

    });
    
    $(".subscription").on("submit", "form", function(event) {
        event.preventDefault();

        var eMail = $("#email-input");

        0 !== eMail.val().length ? (alert("Thanks for subscribing!"),
        eMail.val("")) : alert("Please submit an email address.")
        
     });
});