const controllers = require("../controllers");
const auth = require("./auth");

module.exports = app => {
  app.get("/",auth.isAuthenticated,controllers.home.index);
  app.get("/about", auth.isAuthenticated, controllers.home.about);

  app.get("/users/register",auth.isAuthenticated, controllers.users.registerGet);
  app.post("/users/register", controllers.users.registerPost);

  app.get("/users/login", controllers.users.loginGet);
  app.post("/users/login", controllers.users.loginPost);

  app.post("/users/logout", controllers.users.logout);

  app.get("/cameras", auth.isAuthenticated,controllers.camera.getStream);

  app.get("/faces",auth.isAuthenticated, controllers.faces.getFacesPage);

  app.get("/alerts",auth.isAuthenticated, controllers.alerts.getAlertsPage);

  app.post("/alerts/add", controllers.alerts.addAlert);

  
  app.all("*", (req, res) => {
    res.status(404);
    res.send("404 Not Found!");
    res.end();
  });
};
