// module.exports = function() {
//   const fs = require('fs');
//   process.stdout.write()
// }
const fs = require('fs');
module.exports = fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
});
