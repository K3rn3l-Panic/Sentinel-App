const Alert = require('mongoose').model('Alert');

module.exports = {
  getAlertsPage: (req, res) => {
    Alert.find((err, alerts) => res.render('alerts/alerts', { alerts }));
  },
  addAlert: (req, res) => {
    const { body } = req;

    Alert.create({
      names: body.names,
      image: body.image,
      timestamp: body.timestamp,
    })
      .then(() => {
        res.json({ success: 'true', message: 'Alert created!' });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeAlert: (req, res) => {
    const { id } = req.body;

    Alert.findOne({ _id: id }).remove((err) => {
      res.redirect('/alerts');
    });
  },
};
