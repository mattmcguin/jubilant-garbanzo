function highestProductFromThreeInts(inputArray){
    // Throw those errors :)
    if (inputArray.length < 3) {
        throw new Error('There must be more than 2 integers!');
    }

    // Declare all info we need to keep track of
    let highestInt = Math.max(inputArray[0], inputArray[1]);
    let lowestInt = Math.min(inputArray[0], inputArray[1]);
    let highestProductOfTwo = highestInt * lowestInt;
    let lowestProductOfTwo = highestInt * lowestInt;
    let highestProductOfThree = highestProductOfTwo * inputArray[2];

    // Loop starts from index 2 because already have 0 and 1
    for (let i = 2; i < inputArray.length; i++) {
        let currentInt = inputArray[i];

        // Check to see if the current int gives us a new highest product of 3
        highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * currentInt, lowestProductOfTwo * currentInt);

        // Check to see if the current int gives us a new highest/lowest product of 2
        highestProductOfTwo = Math.max(highestProductOfTwo, highestInt * currentInt, lowestInt * currentInt);
        lowestProductOfTwo = Math.min(lowestProductOfTwo, highestInt * currentInt, lowestInt * currentInt);

        // Check for new highest/lowest ints
        highestInt = Math.max(highestInt, currentInt);
        lowestInt = Math.min(lowestInt, currentInt);
    }

    return highestProductOfThree;

}

const inputArray = [-10, -10, 1, 3, 2, 7, 6, -11];
console.log(highestProductFromThreeInts(inputArray));