var num = 11;

if ((num !== 2) && (num % 2 === 0) || (num !== 3) && (num % 3 === 0) ||
    (num !== 5) && (num % 5 === 0) || (num !== 7) && (num % 7 === 0)) {
    console.log('The number is NOT prime');
}
else {
    console.log('The number IS prime');
}