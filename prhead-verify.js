// Verify PR-head scanning: a NEW command injection Paxley must flag on this PR.
const { exec } = require('child_process');
module.exports = (req, res) => exec('grep ' + req.query.q + ' /var/log/app.log', (e, o) => res.send(o));
