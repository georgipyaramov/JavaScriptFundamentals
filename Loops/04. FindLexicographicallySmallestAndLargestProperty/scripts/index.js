findSmallest(window);
findBiggest(window);
findSmallest(navigator);
findBiggest(navigator);
findSmallest(document);
findBiggest(document);

function findSmallest(object) {
    var smallest = 'zzz';

    for (var property in object) {
        if (property<smallest) {
            smallest = property;
        }
    }

    jsConsole.writeLine('The smallest lexicographically property in ' + object + ' is ' + smallest);
}

function findBiggest(object) {
    var biggest = 'aaa';

    for (var property in object) {
        if (property > biggest) {
            biggest = property;
        }
    }

    jsConsole.writeLine('The biggest lexicographically property in ' + object + ' is ' + biggest);
}