// Working with directories:
let fs = require('fs');

// 1. To create a directory
// fs.mkdirSync('node1/module/new-dir');

// 2. To check the content inside a dir.
//let dirPath = "/module/new-dir";
//let dirContent = fs.readdirSync(dirPath)
//console.log(dirContent)

// 3. To check where a dir/file exists or not
let doesExist = fs.existsSync('node1/module/new-dir');
let fileDoesExist = fs.existsSync('node1/module/my4.bat');
console.log(doesExist);
console.log(fileDoesExist); // true

// 4. Remove directory:
fs.rmdirSync('node1/module/new-dir2')
console.log('Directory has been removed');
