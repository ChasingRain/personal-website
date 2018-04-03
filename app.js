const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.use("/public", express.static('public'))

const mainRoutes = require('./routes/index.js');
const postRoutes = require('./routes/posts');

app.use(mainRoutes);
app.use('/posts', postRoutes);

// app.use(bodyParser.urlencoded({ extended: false}));
//
// const mainRoutes = require('./routes');
app.listen(3000);
