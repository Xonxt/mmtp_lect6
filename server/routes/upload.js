var multer = require('multer');
var path = require('path');

module.exports = function (app) {	
	
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
			cb(null, './public/uploads/');
		},
		filename: function (req, file, cb) {			
			cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		}
	})
	
	var upload = multer({
		storage : storage,
		limits: {fileSize: 500000000, files:1},
	});
	
	var mware = upload.single('file');
	
	app.post('/upload', function(req, res) {
		
		mware(req, res, function(err) {
			
			if(err) {				
				console.log(err) 
				console.log(err.stack)				
			}						
		});
		
	});
	
}