// 1. File system
const fs = require('fs');

// 1. Reading the file...
let fileContent = fs.readFileSync('node1/module/test-file1.txt');
console.log('Data of file1: '+fileContent);

// 2. Writing the file.
fs.writeFileSync('node1/module/test-file2.txt', 'This is the content written to file2');
console.log('File has been written!');

// 3. Appending a file
fs.appendFileSync('node1/module/test-file2.txt', ' This appended text');
console.log('File has been appended')

// For deleting a file, I go like this:
// fs.unlinkSync('file3.txt')