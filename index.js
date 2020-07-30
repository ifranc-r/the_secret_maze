const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');


const app = express();
const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_URL || 6379;

const beginingRoutes = require('./routes/begining');
const first_room = require('./routes/first_room');
const second_room = require('./routes/second_room');
const third_room = require('./routes/third_room');
const meuble_et_clef = require('./routes/meuble_et_clef');
const add_custumer = require('./controllers/add_custumer');

let client = redis.createClient(REDIS_PORT);

client.on("error", function(error) {
  console.error(error);
});
client.on("connected", function() {
});


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/', beginingRoutes);
app.use('/first_room', first_room);
app.use('/second_room', second_room);
app.use('/third_room', third_room);
app.use('/meuble_et_clef', meuble_et_clef);
app.use(meuble_et_clef);

app.post('/submit_add_custumer', (req, res) => {
client.get("user",(err,data)=>{
    if (err) {
      return;
    };
    if (data){
      var obj = JSON.parse(data);
      obj.push(req.body.user);
      client.set("user",JSON.stringify(obj, null, 4));
    }
    else {
      client.set("user",JSON.stringify([req.body.user], null, 4));
    }
  });
});

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(PORT);
