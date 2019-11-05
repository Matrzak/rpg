var clicked = false;
var gold = false;

function changeTitleColour(){
  anime({
    targets: ".gold",
    color: gold ? "#FFF" : "#D4AF37",
    duration: 1000
  });
  gold = !gold;
}

$(document).on('click', '.trigger', (event) => {
  if(!clicked) clicked = !clicked;
  else return;
  event.preventDefault();
  $(".waveBottom").fadeOut(1000, () => {$(".waveWrapper").fadeOut(2000)});
  anime({
    targets: ".top",
    easing: 'linear',
    opacity: 0,
    complete: () => {
      setTimeout(() => {
        $(".top, .waveWrapper").remove();
        window.location.href = "/login";
      }, 2000);
    }
  });

});
$(".button")
  .mouseenter(function() {
    changeTitleColour();
  })
  .mouseleave(function() {
    console.log('no bylo');
    changeTitleColour();
});
