const mongoose = require('mongoose');
const User = require('../data/User');
const Alert = require('../data/Alert');

mongoose.Promise = global.Promise;

module.exports = (settings) => {
  mongoose.connect(settings.db);
  const db = mongoose.connection;

  db.once('open', (err) => {
    if (err) {
      throw err;
    }

    console.log('MongoDB ready!');

    User.seedAdminUser();
  });

  db.on('error', err => console.log(`Database error: ${err}`));
};
