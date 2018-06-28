/*$(document).ready(function(){
    $('#present').mouseenter(function(){
        alert("MouseEnter!"); // This will create an alert box
        console.log("MouseEnter!"); // This will log to the JS console on your browser which is a bit nicer to read than alerts, you do not need both, just preference
        $(this).fadeIn('fast',1);
    })
    $('#present').mouseleave(function(){
        alert("MouseLeave!"); // This will create an alert box
        console.log("MouseLeave!");
        $(this).fadeIn('fast',0.5);
    })
});*/
$(document).ready(function() {
$(document).mousemove(function(e){
    $("#play_button").stop().animate({left:e.pageX-40, top:e.pageY-40});
    console.log('loaded');
});

$("#circle").hover(function(){

         
    $("#play_button").show(); //Show tooltip
    }, function() {
        $("#play_button").hide(); //Hide tooltip
    })

$("nav").click(function() {
  $('.transform').toggleClass('transform-active');
  $('.hide').toggleClass('hide-active');
});
});


var vid = document.getElementById("myVideo"); 

function playVid() { 
    vid.play(); 
} 

function pauseVid() { 
    vid.pause(); 
}



