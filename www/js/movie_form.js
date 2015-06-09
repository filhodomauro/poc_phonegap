var movie = {
	image : undefined,

	load : function(){

	},
	save : function(){
		var movieTitle = document.getElementById('movie_title');
		//TODO: gravar no banco local
		var movies = JSON.parse(window.localStorage.getItem("movies"));
		console.log(movies);
		if(movies === null || movies === undefined){
			movies = {};
		}

		movies[movieTitle.value] = {
			title : movieTitle.value,
			image : this.image
		}

		console.log(movies);

		window.localStorage.setItem("movies", JSON.stringify(movies));
		
		var message = 'Movie ' + movieTitle.value + ' Added';
		console.log(message);
		
		this.back();
	},
	back : function(){
		console.log('Back do index');
		location.replace('index.html');
	},
	takePicture : function (){
		console.log('Taking a picture...');
		navigator.camera.getPicture(movie._pictureSuccess, movie._pictureFail, 
			{ 
				quality : 50, 
			 	destinationType : Camera.DestinationType.FILE_URI,
			 	sourceType : Camera.PictureSourceType.CAMERA,
			 	correctOrientation : true,
			 	cameraDirection : navigator.camera.Direction.FRONT,
			 	saveToPhotoAlbum : false,
			 	allowEdit : false
			 }
		); 
	},

	_pictureSuccess : function (image){
		var img = document.getElementById('rating_image');
		img.src = image;
		movie.image = image;
		console.log(movie.image);
	},
	_pictureFail : function(message){
		navigator.notification.alert('We have a problem: ' + message, function(){}, 'Ops...', 'Ok');
	},
}
