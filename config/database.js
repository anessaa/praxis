var mongoose = require('mongoose');
mongoose.Promose = global.Promise;

mongoose.connect(process.env.DATABASE_URL, {useMongoClient: true});

var db = mongoose.connection;

db.once('open', () => {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
})