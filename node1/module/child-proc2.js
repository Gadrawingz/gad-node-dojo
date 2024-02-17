// Print architecture, pid, platform & version of the process.
const exec = require('child_process').exec;
exec('my4.bat', (err, stdout, stderr) => {
    if(err) {
        console.error(err)
        return;
    }
    console.log(stdout);
})