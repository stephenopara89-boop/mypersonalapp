const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send(`
    <h1>My Personal App</h1>
    <p>Node.js is working!</p>
    <p>NGINX is working too!</p>
  `);
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "My Personal App is running"
  });
});

// Only start the server when this file is run directly
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Node.js app running at http://0.0.0.0:${PORT}`);
  });
}

module.exports = app;
