
var props = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' '),
    prop,
    el = document.createElement('div');

for(var i = 0, l = props.length; i < l; i++) {
    if(typeof el.style[props[i]] !== "undefined") {
        prop = props[i];
        break;
    }
}

// mobile redirect
// if ($(window).width() <= 800) {
//   $( ".mobile-content-container.instafeed-mobile" ).html( "<div id='instafeed' style='overflow: scroll'></div>" );
//   console.log('less than 800px')
//   // window.location = "http://privateselectionrecords.net/rsvp";
//
// }


//initialize jquery on page load
$(document).ready(function(){
//
//   $(window).resize(function() {
//   if ($(window).width() >= 570) {
//     $('#instafeed').remove();
//     $( "<div id='instafeed' style='overflow: scroll'></div>" ).appendTo(".face.three");
//   }
//  else {
//     console.log('More than 400 so no appending.');
//  }
// });

var xAngle = 0, yAngle = 0;
$('body').keydown(function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            evt.preventDefault();
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            evt.preventDefault();
            break;
    };
    document.getElementById('cube').style[prop] = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
});





// $('#arrows').fadeIn('slow').delay(5000).fadeOut('slow').delay(10000);
})
