/**
 * Created by Georgi on 5/18/14.
 */
function solve(args) {
    var n = parseInt(args[0]),
        allNumbers = [],
        bestSum;

    for (var i = 1; i < n; i+=1) {
        allNumbers[i - 1] = parseInt(args[i]);
    }

    bestSum = allNumbers[0];
    for (var i = 0; i < allNumbers.length; i+=1) {
        var currentSum = 0;
        for (var j = i; j < allNumbers.length; j+=1) {
            currentSum += allNumbers[j];

            if (bestSum < currentSum) {
                bestSum = currentSum;
            }
        }
    }

    return bestSum;
}
