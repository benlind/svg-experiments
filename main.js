var surface = Snap("#svg");
var circ = surface.circle(100, 100, 50);
circ.attr({
    fill: "#addedd",
    strokeWidth: 10,
    stroke: "#beeeef"
});

var rocketShip = Snap.select('#rocket-ship');
var exhaust = rocketShip.select('#exhaust');
var ship = rocketShip.select('#ship');
rocketShip.stop().animate({ opacity: .7}, 200, mina.easeout, function() {
  exhaust.stop().animate({opacity: 0, transform: 't-20,34 s4'}, 2500, mina.easeout);
  ship.stop().animate({transform: 't60,-100 s.4'}, 5000, mina.easeout);
});
