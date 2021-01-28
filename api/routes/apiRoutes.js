const express = require('express');
const router = express.Router();
const validator=require("../components/validate-rule controller");
const details=require("../components/details");


router.get('/', (req, res) => {
  res.status(200);
  res.json(details);
});

router.post('/validate-rule', (req, res) => {
  let reqPayload = req.body;
  let response=validator(reqPayload);
  res.status(response.statusCode);
  delete response.statusCode;
  res.json(response);
});

module.exports = router;
