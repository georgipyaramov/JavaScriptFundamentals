var coordX = 5
var coordY = 7
var radiusR = 5;

if (Math.sqrt((coordX * coordX) + (coordY * coordY)) < radiusR) {
    Console.log('The coordinates' + coordX + ', ' + coordY + ' are IN the circle  0, 5');
}
else {
    Console.log('The coordinates' + coordX + ', ' + coordY + ' are NOT in the circle  0, 5');
}