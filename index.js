const express = require('express');
const app = express();
const port = 3301
// vercel project
app.use("/", (req, res) => res.send('Hello World'))

app.listen(port, () => console.log(`App running at port ${port}`))

