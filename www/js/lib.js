var lib = {
	_parameters : {},
	_loadParameter : function(){
		var query = location.search.length > 1 ? location.search.substr(1) : '';
		console.log(query);
		var params = query.split('&');
		if(params.length > 0){
			for(var i = 0; i < params.length; i++){
				var param = params[i];
				var keyValue = param.split('=');
				if(keyValue.length > 1){
					this._parameters[keyValue[0]] = keyValue[1];
				}
			}
		}
	},
	getParameter : function(key){
		return this._parameters[key];
	}
};

lib._loadParameter();
