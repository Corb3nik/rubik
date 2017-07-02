const wappalyzer = require('wappalyzer');

wappalyzer.run([process.argv[2], '--quiet'], function(stdout, stderr) {
  if ( stdout ) {
    process.stdout.write(stdout);
  }

  if ( stderr ) {
    process.stderr.write(stderr);
  }
});
