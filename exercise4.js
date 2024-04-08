const fs = require('fs');

/**
 * Write data to a file asynchronously using fs.writeFile.
 * @param {string} filePath - The path to the file.
 * @param {string} content - The content to write to the file.
 * @param {function} callback - The callback function to handle completion.
 */
function writeFileAsync(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err.message);
    } else {
      console.log('File written successfully!');
    }
    callback(); // Call the provided callback (if needed)
  });
}

// Example usage:
const filePath = 'D:/Vann/Bootcamp 4 at SabaiCode & WingBank/Code/3rd-homework/file.txt'; // Replace with the actual file path
const fileContent = 'Hello, world! This is the content to write.';
writeFileAsync(filePath, fileContent, () => {
  console.log('File writing completed.'); // Optional callback logic
});
