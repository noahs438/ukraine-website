// VERSION 1
// Imports
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/css'))
app.use('/images', express.static('images'))
app.use(express.static((__dirname, 'js')))



app.get('/', (req, res,) => {
    res.render("index")
    res.render('index.js')
})

// NOT IMPORTANT (just users routes)
const userRouter = require('./routes/users');

// Link routes to path
app.use('/users', userRouter);


// Listen on port
app.listen(port, () => console.info('Listening on port ' + port));
