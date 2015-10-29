var multer = require('multer');
var path = require('path');

module.exports = function (app) {	
	
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, './public/uploads/')
		},
		filename: function (req, file, cb) {			
			cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		}
	})
	
	var upload = multer({
		storage : storage,
		limits: {fileSize: 1000000, files:1},
	});
	
	app.post('/upload', upload.single('image'), function(req, res) {
				
		res.render('index', {title : "Homepage", tagline: "File uploaded successfully!"});
		
	});
	
}