/* !attention: HTML5 only */
$bush.url = {
	set : function(url, title, args) {
		
		window.history.pushState((args || null), 'Testing', (url || null));
	},
	edit : function(url, title, args) {
		
		window.history.replace((args || null), 'Testing', (url || null));
	},
	title : function() {
		
	},
	popstate : function(callback) { // Перехват history back / forth
		var callback = callback;
		$(window).bind("popstate", function(e) {
			
			callback(location.pathname, location);
		});	
	}
};