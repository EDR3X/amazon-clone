const express = require("express");
const app = express();
const PORT = 5050;

app.listen(PORT, () => `listening to: localhost:${PORT}`);
