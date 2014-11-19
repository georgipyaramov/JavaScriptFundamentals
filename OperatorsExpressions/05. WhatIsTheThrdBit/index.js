var givenNum = 367;
var p = 3;
var mask = 1 << p;
var numAndMask = givenNum & mask;
var bit = numAndMask >> p;
console.log(bit === 1);