function onCalculateBtnClicked() {
    var number = jsConsole.readInteger('#input-first-number');
    var i;

    for (i = 1; i <= number; i += 1) {
        if (!(i % 3 === 0 && i % 7 === 0)) { 
            jsConsole.writeLine(i);
        }
    }
}
//The first number that will not be printed is 21