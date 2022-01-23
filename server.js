const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
const routes = require('./app/routes/mahasiswa_routes');

//use cors
app.use(cors())

//import route posts
const PORT = 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json())

app.use('/mahasiswa', routes);


app.listen(PORT, () => {
    console.log(`App running at http://localhost:${PORT}`);
})