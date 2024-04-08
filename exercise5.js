const fs = require('fs');

// Read the contents of 'input.txt'
function readInputFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading input file:', err.message);
    } else {
      console.log('Input file contents:');
      console.log(data);
      callback(data); // Pass the content to the next step
    }
  });
}

// Append "First modification" and write to 'output1.txt'
function writeOutput1File(filePath, content, callback) {
  const modifiedContent = content + 'First modification';
  fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to output1 file:', err.message);
    } else {
      console.log('Output1 file written successfully!');
      callback();
    }
  });
}

// Read 'output1.txt'
function readOutput1File(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading output1 file:', err.message);
    } else {
      console.log('Output1 file contents:');
      console.log(data);
      callback(data); // Pass the content to the next step
    }
  });
}

// Append "Second modification" and write to 'output2.txt'
function writeOutput2File(filePath, content, callback) {
  const modifiedContent = content + 'Second modification';
  fs.writeFile(filePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to output2 file:', err.message);
    } else {
      console.log('Output2 file written successfully!');
      callback();
    }
  });
}

// Read 'output2.txt' and print to the console
function readOutput2File(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading output2 file:', err.message);
    } else {
      console.log('Output2 file contents:');
      console.log(data);
    }
  });
}

// Example usage:
const inputFilePath = 'D:/Vann/Bootcamp 4 at SabaiCode & WingBank/Code/3rd-homework/input.txt';
const output1FilePath = 'D:/Vann/Bootcamp 4 at SabaiCode & WingBank/Code/3rd-homework/output1.txt';
const output2FilePath = 'D:/Vann/Bootcamp 4 at SabaiCode & WingBank/Code/3rd-homework/output2.txt';

readInputFile(inputFilePath, (inputContent) => {
  writeOutput1File(output1FilePath, inputContent, () => {
    readOutput1File(output1FilePath, (output1Content) => {
      writeOutput2File(output2FilePath, output1Content, () => {
        readOutput2File(output2FilePath);
      });
    });
  });
});
