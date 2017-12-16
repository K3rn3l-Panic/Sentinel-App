const controllers = require('../controllers');
const auth = require('./auth');
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ dest: 'uploads/', storage: storage });


module.exports = (app) => {
  app.get('/', controllers.home.index);
  app.get('/about', auth.isAuthenticated, controllers.home.about);

  app.get('/users/register', controllers.users.registerGet);
  app.post('/users/register', controllers.users.registerPost);

  app.get('/users/login', controllers.users.loginGet);
  app.post('/users/login', controllers.users.loginPost);

  app.post('/users/logout', controllers.users.logout);

  app.get('/cameras', controllers.camera.getStream);
  app.post('/cameras/add', controllers.camera.addCamera);

  app.get('/faces', controllers.faces.getFacesPage);

  app.get('/alerts', controllers.alerts.getAlertsPage);

  app.post('/faces/add', upload.single('image'), controllers.faces.addFace);

  app.get('/faces/remove/:id', controllers.faces.removeFace);
  app.get('/faces/all', controllers.faces.getAllFaces);

  app.post('/alerts/add',controllers.alerts.addAlert)

  app.all('*', (req, res) => {
    res.status(404);
    res.send('404 Not Found!');
    res.end();
  });
};
