var coordX = 4
var coordY = 3
var circleStartCoordX = 1;
var circleStartCoordy = 1;
var radius = 3;
var rectangleX = -1;
var rectangleY = 1;
var rectangleHeight = 2;
var rectangleWidth = 6;
var inCircle = (Math.sqrt(((coordX - circleStartCoordX) * (coordX - circleStartCoordX))
     + (coordY - circleStartCoordy) * (coordY - circleStartCoordy))) < radius; //-1 to the coordinates because the circle is at x=1 , y=1
var outRect = ((coordX < rectangleX) || (coordX > rectangleX + rectangleWidth) || (coordY > rectangleY) || (coordY < rectangleY - rectangleHeight));
var result = inCircle && outRect

console.log('The coordinates are in the circle and out of the rectangle. -> ' + result);
