const Face = require('mongoose').model('Face');
const Camera = require('mongoose').model('Camera');


var axios = require('axios');

module.exports = {
  getFacesPage: (req, res) => {
  	Face.find((error, faces)=>{
  		console.log(faces);
  		   res.render('faces/faces', {faces: faces});
  	});
  },

  getAllFaces: (req, res) => {
  	Face.find((error, faces)=>{
  		
  		   res.json(faces);
  	});
  },

  removeFace: (req, res) => {
  	var id = req.params.id;
  	Face.find({ _id: id }).remove().then(function(err) {
  		res.redirect('/faces');
  	})
  },

  addFace: (req, res) => {
    //console.log(req.file, 'file -----');
    var name = req.body.name;

    var base64Image = new Buffer(req.file.buffer).toString('base64')
    

	axios.post('http://localhost:5000/encode', {
	
			image: base64Image
	})
	  .then(function (response) {
	  	Face.create({
	      name: name,
	      encoding: response.data.encoding,
	      image: base64Image
	    });
	  }).catch(function(error) { 
        console.log(error);
    });

    
  },
};
