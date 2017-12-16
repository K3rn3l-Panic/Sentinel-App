const Image = require('mongoose').model('Face');

module.exports = {
  getFacesPage: (req, res) => {
    res.render('faces/faces');
  },
  addFace: (req, res) => {
    console.log(req.file, 'file -----');
    //console.log(req.body, 'file -----');

    /*Image.create({
      name: req.body.name,
      image: req.file
    });*/
  },
};
