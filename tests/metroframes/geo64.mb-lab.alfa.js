$bush.ui('geo64')
.widget('metro', function(el) {
	
	var plugin = $bush(el)
	.plugin('metro', {
		'backgroundWrapper': '.geo64-bg'
	})
	.addSnippet('map', function(tree, by) {
		var map = [];
		
		var build = function(childs, build) {
			var build = build;
			var map = [];
			var plugin = this;
			$.each(childs, function() {
				
				map.push('<li>');
				if (this.link) {
					var cell = this;
					map.push('<a href="'+this.link+'" data-metro-load="'+this.id+'">'+this.titleText+'</a>');
				} else {
					map.push('<strong>'+this.titleText+'</strong>');
				};
				if (this.analysis.childsCount>0) {
				map.push('<ul>'+build(this.childs, build)+'</ul>');
				};
				map.push('</li>');
			});
			
			return map.join("\n");
		};
		
	
		var html = '<ul>'+build(this.tree.childs, build)+'</ul>';
		
		this.createInfoPage(tree, by, {
			'method': 'html',
			'html': html
		});
	});
});