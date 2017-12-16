const Camera = require('mongoose').model('Camera');

module.exports = {
  getStream: (req, res) => {
    res.render('camera/camera');
  },
  addCamera: (req, res) => {
    const cameraUrl = req.body.address;

    Camera.create({
      url: cameraUrl,
    }).then(() => {
      res.render('camera/camera');
    });
  },
};
