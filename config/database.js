const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.MONGODB_URI);

db.on('connected', () => { console.log('MongoDB is connected') });
db.on('error', (err) => { console.log(err.message + ' is MongoDB not running?') });
db.on('disconnected', () => { console.log('MongoDB disconnected') });