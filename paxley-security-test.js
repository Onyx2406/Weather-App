// TEMP: Paxley PR-guard smoke test — deliberate findings, will be removed.
const express = require('express');
const { exec } = require('child_process');
const router = express.Router();

router.get('/calc', (req, res) => {
  // code injection via eval()
  const result = eval(req.query.expr);
  res.send(String(result));
});

router.get('/ping', (req, res) => {
  // command injection via child_process.exec with user input
  exec('ping -c 1 ' + req.query.host, (e, out) => res.send(out));
});

module.exports = router;
