process.stdout.write('prompt > ');
// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd') {
    const pwd = require('./pwd');
    pwd();
    process.stdout.write('\nprompt > ');
  }
});
