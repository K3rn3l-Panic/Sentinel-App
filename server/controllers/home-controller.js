const auth = require('../config/auth');

module.exports = {
  index: (req, res) => {
    res.redirect('/alerts');
  },
  about: (req, res) => {
    res.render('home/about');
  },
};
