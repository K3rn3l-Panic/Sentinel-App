const Alert = require('mongoose').model('Alert');

module.exports = {
  getAlertsPage: (req, res) => {
    Alert.find((err, alerts) => res.render('alerts/alerts', { alerts }));
  },
  addAlert: (req, res) => {
    const { body } = req;

    Alert.create({
      name: body.name,
      image: body.image,
      timestamp: body.timestamp,
    }).then(() => {
      res.json({ success: 'true', message: 'Alert created!' });
    });
  },
  removeAlert: (req, res) => {
    const { timestamp } = req.body;
    console.log(timestamp);

    Alert.findOne({ timestamp }).remove((err) => {
      res.redirect('/alerts');
    });
  },
};
