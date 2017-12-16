const Camera = require('mongoose').model('Camera');

module.exports = {
  getStream: (req, res) => {
    if (req.query.id) {
      Camera.findOne({ _id: req.query.id }).exec((err, camera) => {
        res.render('camera/stream', { camera });
      });
    } else {
      Camera.find({}).exec((err, cameras) => {
        res.render('camera/camera', { cameras });
      });
    }
  },
  addCamera: (req, res) => {
    const cameraUrl = req.body.address;
    const cameraName = req.body.name;

    Camera.create({
      url: cameraUrl,
      name: cameraName,
    }).then(() => {
      res.redirect('/cameras');
    });
  },
  removeCamera: (req, res) => {
    const cameraName = req.body.name;

    Camera.findOne({ name: cameraName }).remove((err) => {
      res.redirect('/cameras');
    });
  },
};
