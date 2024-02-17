/* 
Child process module:
This module contains the following main methods that will help 
us create, manipulate, and run processes: exec, spawn, and fork.

It provides the ability to spawn subprocesses in a manner that is similar, but not identical, to popen(3)
*/

// Importing it
const cp = require('child_process')
// 1. I need to open calculator.
// cp.execSync('calc');
// cp.execSync('start firefox');
const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
}); 
