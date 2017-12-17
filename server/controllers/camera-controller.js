const Camera = require('mongoose').model('Camera');

module.exports = {
  getCameras: (req, res) => {
  
      Camera.find({}).exec((err, cameras) => {
        res.render('camera/camera', { cameras });
      });
    
  },
  getStream: (req, res) => {

      Camera.findOne({ _id: req.params.id }).exec((err, camera) => {
        //console.log(req.params.id , 'kamera');
        res.render('camera/stream', { camera });
      });
    
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
    console.log('remove cam');
    const cameraId= req.params.id;

    Camera.findOne({ _id: cameraId }).remove((err) => {
      res.redirect('/cameras');
    });
  },
};
