const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

//use cors
app.use(cors())

//import route posts
const postsRouter = require('./routes/posts');
const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
})