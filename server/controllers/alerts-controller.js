const Alert = require("mongoose").model("Alert");

module.exports = {
  getAlertsPage: (req, res) => {
    res.render("alerts/alerts");
  },
  addAlert: (req, res) => {
    let body = req.body;
    Alert.create(body).then(alert => {});
  }
};
