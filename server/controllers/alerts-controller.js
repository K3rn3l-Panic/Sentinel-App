const Alert = require("mongoose").model("Alert");

module.exports = {
  getAlertsPage: (req, res) => {
    Alert.find((err, alerts) => {
      console.log(alerts)
      res.render("alerts/alerts", {alerts:alerts});
    });
  },
  addAlert: (req, res) => {
    let body = req.body;
    console.log(req.body);

    Alert.create({
      name: body.name,
      image: body.image,
      timestamp: body.timestamp
    }).then(alert => {});
  }
};
