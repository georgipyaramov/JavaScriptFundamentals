function onCalculateBtnClicked() {
    var number = jsConsole.readInteger('#input-first-number');
    var i;

    for (i = 1; i <= number; i+=1) {
        jsConsole.writeLine(i);
    }
}