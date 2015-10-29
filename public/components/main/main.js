'use strict';

var mainModule = angular.module('app.main', ['angularFileUpload']);

mainModule.controller('MainController', ['$upload', MainController]);

function MainController($upload) {	
	
	alert('achtung!!');
	
	var main = this;
	
	main.myVar = "adasd";
	
	main.uploadFile = function() {

		
		this.fileSelected = function(files) {
			if (files && files.length) {
				main.file = files[0];
			} 
			
			$upload.upload({
				url: '/upload', 
				file: main.file
			})
			.success(function(data) {
				console.log(data, 'uploaded');
			});
 
		}
		
	}
	
}
