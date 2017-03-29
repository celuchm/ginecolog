function setWindowHeight() {
    var windowHeight = window.innerHeight;

    var classElements = document.getElementsByClassName('fullWindowHeight');
    for( i=0 ; i<classElements.length; i++) {
      classElements[i].style.height = windowHeight  + "px";
    }
};

function setHalfHeight(){
    
    var sectionGabinetHeight = $('#sectionGabinet').height()/2 - $('#gabinetMiddle').height()/2;
    
   
        $('#gabinetMiddle').css("margin-top", sectionGabinetHeight);
    
    
}




$(document).ready(function() {
    setWindowHeight();
    setHalfHeight();
    $(window).resize(function() {
        setWindowHeight();
        setHalfHeight();
    } );

} );






