// /**
//  * Applies a callback function to each element of an array.
//  * @param {number[]} arr - The input array of numbers.
//  * @param {function} callback - The callback function to process each element.
//  * @returns {number[]} - An array containing the squared values.
//  */
// function squareArrayElements(arr, callback) {
//     const squaredValues = arr.map(callback);
//     return squaredValues;
// }
//   // Example usage:
// const numbers = [1, 2, 3, 4, 5];
// const squareCallback = (num) => num ** 2;
// const squaredResult = squareArrayElements(numbers, squareCallback);
//   console.log("Squared values:", squaredResult); // Output: [1, 4, 9, 16, 25]

//second way -2
/**
 * Squares each number in an array using a loop.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - An array containing the squared values.
 */
function squareArrayElementsWithLoop(arr) {
    const squaredValues = [];
    for (const num of arr) {
      const squaredNum = num ** 2;
      squaredValues.push(squaredNum);
    }
    return squaredValues;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const squaredResult = squareArrayElementsWithLoop(numbers);
  console.log("Squared values (using loop):", squaredResult); // Output: [1, 4, 9, 16, 25]
  