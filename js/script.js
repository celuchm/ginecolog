function setWindowHeight() {
    var windowHeight = window.innerHeight;

    var classElements = document.getElementsByClassName('fullWindowHeight');
    for( i=0 ; i<classElements.length; i++) {
      classElements[i].style.height = windowHeight + "px";
    }
};

function setMiddleHeight(){
    var halfWindowHeight = window.innerHeight/2 - 200;
    var classElements2 = document.getElementsByClassName('middleWindowHeigh');
    for( i=0 ; i<classElements2.length; i++){
        classElements2[i].style.paddingTop = halfWindowHeight + "px";
    }
}




$(document).ready(function() {
    setWindowHeight();
    setMiddleHeight();
    $(window).resize(function() {
        setWindowHeight();
        setMiddleHeight();
    } );
    
    $("#menuBoxOfer").click(function() {
    $('html, body').animate({
        scrollTop: $("#oferSection").offset().top
    }, 2000);
});

$("#menuBoxMap").click(function() {
    $('html, body').animate({
        scrollTop: $("#mapSection").offset().top
    }, 2000);
});
} );






