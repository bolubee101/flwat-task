const express = require('express');
const invalidJson = require('./api/middleware/invalidJson');
const app = express();
app.use('/validate-rule', express.json({ limit: '10mb' }));
const PORT = process.env.PORT || 3000;
let apiRoutes = require('./api/routes/apiRoutes');

// middlewar to handler for invalid json payload
app.use('/', invalidJson);
// using the routes
app.use('/', apiRoutes);

app.get('*', (req, res) => {
  res.status(404);
  return res.json({
    status: 'error',
    message: 'endpoint not found',
    data: 'null',
  });
});

let server = app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
module.exports={server,app};
