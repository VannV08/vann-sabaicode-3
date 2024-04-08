/**
 * Filters an array of numbers synchronously based on a callback.
 * @param {number[]} arr - The input array of numbers.
 * @param {function} callback - The callback function that checks if a number is even.
 * @returns {number[]} - An array containing only the even numbers.
 */function filterEvenNumbers(arr, callback) {
    const evenNumbers = [];
    for (const num of arr) {
      if (callback(num)) {
        evenNumbers.push(num);
      }
    }
    return evenNumbers;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  const isEven = (num) => num % 2 === 0;
  const evenResult = filterEvenNumbers(numbers, isEven);
  console.log("Even numbers:", evenResult); // Output: [2, 4, 6]