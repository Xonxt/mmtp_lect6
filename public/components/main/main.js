'use strict';

var mainModule = angular.module('app.main', ['ngFileUpload']);

mainModule.controller('MainController', ['Upload', '$timeout', MainController]);

function MainController(Upload, $timeout) {	
	
	var main = this;
	
	main.fileSelected = function(files) {
		if (files && files.length) {
			main.file = files[0];
		} 
	}
	
	main.uploadFiles = function(file) {
		
		main.f = file;
		//main.errFile = errFiles && errFiles[0];
		
		if (file) {
			file.upload = Upload.upload({
					url: '/upload',
					data: {file: file}
			});
			
			file.upload.then(function (response) {
				$timeout(function () {
						file.result = response.data;
				});
			}, function (response) {
				if (response.status > 0)
						main.errorMsg = response.status + ': ' + response.data;
			}, function (evt) {
				file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
			});
		}
		
	}
	
}
