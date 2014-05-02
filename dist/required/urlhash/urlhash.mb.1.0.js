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
	},
	depatchurl : function(link, prefix, sufix) {
		var link = link;
		var prefix = prefix || '';
		var sufix = sufix || '';
		var pathname = link;
		if (pathname.substring(0, prefix.length)==prefix) pathname = pathname.substring(prefix.length, pathname.length);
		
		if (pathname.substring(pathname.length-sufix.length)==sufix) pathname = pathname.substring(0, pathname.length-sufix.length);
		return pathname;
	}
};