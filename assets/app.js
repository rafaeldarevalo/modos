

/* -------------------------------------------------------------------------- */
/*                                    MENU                                    */
/* -------------------------------------------------------------------------- */

/*Scroll transition to anchor*/
$( document ).ready(function() {
    $("a.toscroll").on('click',function(e) {
        var url = e.target.href;
        var hash = url.substring(url.indexOf("#")+1);
        $('html, body').animate({
            scrollTop: $('#'+hash).offset().top + -100
        }, 1000);
        return false;
    });
    $(".open-menu").on("click", function(){
        $(".menu-m").addClass("active");
    });
    $(".close").on("click", function(){
        $(".menu-m").removeClass("active");
    });
    $(".link-m").on("click", function(){
        $(".menu-m").removeClass("active");
    });
    
});




/* -------------------------------------------------------------------------- */
/*                                 ANIMACIONES                                */
/* -------------------------------------------------------------------------- */

var revealElements = document.getElementsByClassName("anima");
var revealElementsHorizontal = document.getElementsByClassName("animaHorizontal");
for (var i = 0; i < revealElements.length; i++) { 
    new ScrollMagic.Scene({
        triggerElement: revealElements[i],  
        offset: -300,												
    })

    
        .setClassToggle(revealElements[i], "visible")
        .addTo(controller);
}

/* -------------------------------------------------------------------------- */
/*                                  PARALLAX                                  */
/* -------------------------------------------------------------------------- */

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: 0.6,
    transition: 'cubic-bezier(0,0,0,1)',
    orientation: 'down'
    
});