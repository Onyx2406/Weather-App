// Launch-readiness check: a NEW security issue Paxley should flag on this PR.
const express = require('express');
const { exec } = require('child_process');
const router = express.Router();
router.get('/run', (req, res) => {
  // command injection via user-controlled input
  exec('echo ' + req.query.msg, (e, out) => res.send(out));
});
module.exports = router;

// retrigger on clean f12df76 worker
