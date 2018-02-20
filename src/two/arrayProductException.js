function getProductsOfAllIntsExceptAtIndex(inputArray) {
    
    // Checks to make sure the input is good :)
    if (inputArray.length < 2) {
        throw new Error('There must be more than one index');
    }

    let resultingArray = [];
    let currentProduct = 1;

    // Get all products before the index
    for (let i = 0; i < inputArray.length; i++) {
        resultingArray[i] = currentProduct;
        currentProduct *= inputArray[i];
    }

    // Reset current product
    currentProduct = 1;

    // Get all products after index and multiply those 
    // by the same index in the before array
    for (let i = inputArray.length - 1; i >= 0; i--) {
        resultingArray[i] *= currentProduct;
        currentProduct *= inputArray[i];
    }

    return resultingArray;
}

const arrayValues = [1, 7, 3, 4];
console.log(getProductsOfAllIntsExceptAtIndex(arrayValues));