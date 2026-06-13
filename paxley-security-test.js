// TEMP: Paxley PR-guard smoke test — introduces a deliberate code-injection finding.
// This file is added by a throwaway test PR and will be removed.
const express = require('express');
const router = express.Router();

router.get('/calc', (req, res) => {
  // Intentional vulnerability for Paxley to detect: code injection via eval()
  const result = eval(req.query.expr);
  res.send(String(result));
});

module.exports = router;
