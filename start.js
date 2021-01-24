// java -Xmx1024M -Xms1024M -jar server.jar nogui
const { spawn  } = require('child_process');

const child = spawn('java', ['-Xmx1G', '-Xmx1G', '-jar', 'mcserver.jar', 'nogui']);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
// data from standard output is here as buffers
});

// since these are streams, you can pipe them elsewhere
// child.stderr.pipe(dest);

child.on('close', (code) => {
console.log(`child process exited with code ${code}`);
});

console.log('started')
