const fs = require('fs');

/**
 * Read a file asynchronously and print its contents to the console.
 * @param {string} filePath - The path to the file.
 * @param {function} callback - The callback function to handle the file contents.
 */
function readFileAndPrint(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err.message);
    } else {
      console.log('File contents:');
      console.log(data);
    }
    callback(); // Call the provided callback (if needed)
  });
}

// Example usage:
const filePath = 'D:/Vann/Bootcamp 4 at SabaiCode & WingBank/Code/3rd-homework/file.txt'; // Replace with the actual file path
readFileAndPrint(filePath, () => {
  console.log('File reading completed.'); // Optional callback logic
});
