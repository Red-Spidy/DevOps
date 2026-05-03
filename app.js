const express = require('express');
const app = express();

const PORT = 3000;
const VERSION = "v3";

app.use(express.static(__dirname));

app.get('/api/status', (req, res) => {
    res.json({
        status: "Running",
        version: VERSION,
        time: new Date().toLocaleString("en-IN", {
timeZone: "Asia/Kolkata"}),
        uptime: process.uptime().toFixed(2) + " sec"
    });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
