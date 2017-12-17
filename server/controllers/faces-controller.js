const Face = require('mongoose').model('Face');
const Camera = require('mongoose').model('Camera');

const axios = require('axios');

module.exports = {
  getFacesPage: (req, res) => {
    Face.find((error, faces) => {
      res.render('faces/faces', { faces });
    });
  },

  getAllFaces: (req, res) => {
    Face.find((error, faces) => {
      res.json(faces);
    });
  },

  removeFace: (req, res) => {
    const id = req.params.id;
    Face.find({ _id: id })
      .remove()
      .then((err) => {
        res.redirect('/faces');
      });
  },

  addFace: (req, res) => {
    // console.log(req.file, 'file -----');
    const name = req.body.name;

    const base64Image = new Buffer(req.file.buffer).toString('base64');

    axios
      .post('http://localhost:5000/encode', {
        image: base64Image,
      })
      .then((response) => {
        Face.create({
          name,
          encoding: response.data.encoding,
          image: base64Image,
        });
        res.redirect('/faces');
      })
      .catch((error) => {
        res.redirect('/faces');
      });
  },
};
