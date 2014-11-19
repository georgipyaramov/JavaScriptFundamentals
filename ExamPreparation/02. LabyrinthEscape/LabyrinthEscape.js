/**
 * Created by Georgi on 5/18/14.
 */
function solve(args) {
    var firstLine = args[0].split(' '),
        secondLine = args[1].split(' '),
        rows = parseInt(firstLine[0]),
        cols = parseInt(firstLine[1]),
        position  = {
            x: parseInt(secondLine[0]),
            y: parseInt(secondLine[1])
        },
        directionArray,
        matrix = [],
        directions = [];
        args.splice(0, 2),
        directionArray = args;


    //console.log(directionArray);
    var someNum = 1;
    for (var i = 0; i < rows; i+=1) {
        matrix[i] = [];
        for (var j = 0; j < cols; j+=1) {
            matrix[i][j] = someNum;
            someNum += 1;
        }
    }

    console.log(matrix);

    for (i = 0; i < rows; i+=1
        ) {
        directions[i] = [];
        for (j = 0; j < cols; j+=1) {
            directions[i] = directionArray[i].split('');
        }

    }
    //console.log(directions);

    //console.log(position.x);
    //console.log(position.y);

    var numberOfCells = 0;
    var sumOfNumbers = 0;
    while (true) {

        if (position.x < 0 || position.x > rows ||
            position.y < 0 || position.y > cols) {
            console.log('out ' + sumOfNumbers);
            return ('out ' + sumOfNumbers);
        }

        if (matrix[position.x][position.y] === 0) {
            console.log('lost ' + numberOfCells);
            return ('lost ' + numberOfCells);
        }

        var currenPos = matrix[position.x][position.y];
        sumOfNumbers += matrix[position.x][position.y];
        matrix[position.x][position.y] = 0;
        console.log(sumOfNumbers);
        console.log(currenPos);
        switch (directions[position.x][position.y]) {
            case 'u': position.x -= 1;
                break;
            case 'l': position.y -= 1;
                break;
            case 'd': position.x += 1;
                break;
            case 'r': position.y += 1;
                break;
        }

        console.log(position.x);
        console.log(position.y);






        numberOfCells += 1;
    }


}

var args =[
    "3 4",
    "1 3",
    "lrrd",
    "dlll",
    "rddd"]

solve(args);