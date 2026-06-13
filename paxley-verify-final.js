// Final launch verification — a NEW command-injection Paxley should flag.
const { exec } = require('child_process');
function run(req, res) {
  exec('cat ' + req.query.file, (e, out) => res.send(out));  // command injection
}
module.exports = { run };
