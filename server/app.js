const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const log = require('./routes/log.route'); // Imports routes for the products

// initialize our express app
const app = express();

const mongoose = require('mongoose');
let mongoDB = process.env.MONGODB_URI || process.env.DB_CONN;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const posts = [
        {
          id: 1,
          author: 'John',
          title: 'Templating with EJS',
          body: 'Blog post number 1'
        },
        {
          id: 2,
          author: 'Drake',
          title: 'Express: Starting from the Bottom',
          body: 'Blog post number 2'
        },
        {
          id: 3,
          author: 'Emma',
          title: 'Streams',
          body: 'Blog post number 3'
        },
        {
          id: 4,
          author: 'Cody',
          title: 'Events',
          body: 'Blog post number 4'
        }
      ]
    res.render('index',{ posts: posts });
});

app.use('/logs', log);

let port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
