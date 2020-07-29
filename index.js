const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const beginingRoutes = require('./routes/begining');
const first_room = require('./routes/first_room');
const second_room = require('./routes/second_room');
const third_room = require('./routes/third_room');
const meuble_et_clef = require('./routes/meuble_et_clef');
const add_custumer = require('./controllers/add_custumer');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', beginingRoutes);
app.use('/first_room', first_room);
app.use('/second_room', second_room);
app.use('/third_room', third_room);
app.use('/meuble_et_clef', meuble_et_clef);
app.use(meuble_et_clef);

app.get('/submit_add_custumer', add_custumer.add_custumer);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(PORT);
