const express = require('express');
const app = express();
const port = 3301

app.use("/", (req, res) => res.json({ messase: "Hello Vercel" }))

app.listen(port, () => console.log(`App running at port ${port}`))
