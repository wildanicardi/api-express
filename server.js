// deklarasi variablepackage yang digunakan 
const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose');
config = require('./DB');

// deklarasi file route
const productRoute = require('./routes/product.route');
// set koneksi monggose secara global dan cek apakah telah tersambung dengan db
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
// deklarasi prefix route
app.use('/products', productRoute);

// listen port ketika serer dijalankan
const port = process.env.PORT || 4000;
const server = app.listen(port, function () {
  console.log('Listening on port ' + port);
});