function setWindowHeight() {
    var windowHeight = window.innerHeight;

    var classElements = document.getElementsByClassName('fullWindowHeight');
    for( i=0 ; i<classElements.length; i++) {
      classElements[i].style.height = windowHeight + "px";
    }
};

function setMiddleHeight(){
    var halfWindowHeight = window.innerHeight/2 - 100;
    var classElements = document.getElementsByClassName('middleWindowHeigh');
    for( i=0 ; i<classElements.length; i++){
        classElements[i].style.marginTop = halfWindowHeight + "px";
    }
}



$(document).ready(function(){
    setWindowHeight();
    setMiddleHeight();
});

$(document).ready(function() {
    $(window).resize(function() {
        setWindowHeight();
        setMiddleHeight();
    } );
} );



