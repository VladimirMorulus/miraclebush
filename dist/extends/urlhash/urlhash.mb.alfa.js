$bush.url = {
	set : function(url) {
		window.history.pushState(null, null, url);
	},
	popstate : function(callback) { // �������� history back / forth
		var callback = callback;
		$(window).bind("popstate", function(e) {
			console.log(e);
			callback.call(location.pathname);
		});	
	}
};