function onCalculateBtnClicked() {
    var i,
        sequenceAsNumbers = [],
        maxFromSequence = -999999999, //Don't know why, but with Number.MIN_VALUE doesn't work. Sorry about that.
        minFromSequence = 999999999,
        sequence = jsConsole.read('#input-first-number');

    sequence = sequence.split(' ');

    for (i = 0; i < sequence.length; i++) {
        sequenceAsNumbers[i] = parseInt(sequence[i]);
    }
    
    for (i = 0; i < sequenceAsNumbers.length; i++) {
        if (sequenceAsNumbers[i] > maxFromSequence) {
            maxFromSequence = sequenceAsNumbers[i];
        }

        if (sequenceAsNumbers[i] < minFromSequence) {
            minFromSequence = sequenceAsNumbers[i];
        }
    }

    jsConsole.writeLine('The biggest number is: ' + maxFromSequence);
    jsConsole.writeLine('The smalest number is: ' + minFromSequence);
    console.log('The biggest number is: ' + maxFromSequence);
    console.log('The smalest number is: ' + minFromSequence);
    console.log(minFromSequence > maxFromSequence);
}