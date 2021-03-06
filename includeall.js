/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
(function(e,t){typeof module!="undefined"&&module.exports?module.exports=t():typeof define=="function"&&define.amd?define(t):this[e]=t()})("$script",function(){function h(e,t){for(var n=0,i=e.length;n<i;++n)if(!t(e[n]))return r;return 1}function p(e,t){h(e,function(e){return!t(e)})}function d(e,t,n){function g(e){return e.call?e():u[e]}function y(){if(!--m){u[o]=1,s&&s();for(var e in f)h(e.split("|"),g)&&!p(f[e],g)&&(f[e]=[])}}e=e[i]?e:[e];var r=t&&t.call,s=r?t:n,o=r?e.join(""):t,m=e.length;return setTimeout(function(){p(e,function t(e,n){if(e===null)return y();e=!n&&!/^https?:\/\//.test(e)&&c?c+e+".js":e;if(l[e]){o&&(a[o]=1),l[e]==2?y():setTimeout(t.bind(null,e,!0),0);return}l[e]=1,o&&(a[o]=1),v(e,y)})},0),d}function v(n,r){var i=e.createElement("script"),u;i.onload=i.onerror=i[o]=function(){if(i[s]&&!/^c|loade/.test(i[s])||u)return;i.onload=i[o]=null,u=1,l[n]=2,r()},i.async=1,i.src=n,t.insertBefore(i,t.lastChild)}var e=document,t=e.getElementsByTagName("head")[0],n="string",r=!1,i="push",s="readyState",o="onreadystatechange",u={},a={},f={},l={},c;return d.get=v,d.order=function(e,t,n){(function r(i){i=e.shift(),e.length?d(i,r):d(i,t,n)})()},d.path=function(e){c=e},d.ready=function(e,t,n){e=e[i]?e:[e];var r=[];return!p(e,function(e){u[e]||r[i](e)})&&h(e,function(e){return u[e]})?t():!function(e){f[e]=f[e]||[],f[e][i](t),n&&n(r)}(e.join("|")),d},d.done=function(e){d([null],e)},d})

$script.ready(['jquery', 'jquerybridge', 'sizzle', 'core', 'trigonometria', 'overlay'], function() {
	ready();
});

$script('http://code.jquery.com/jquery-1.11.0.min.js', 'jquery', function() {
	$script('../../dist/core/miracle.core.1.2.js', 'core', function() {
		$script('../../dist/extends/jquerybridge/jquerybridge.mb.1.1.js', 'jquerybridge');
		$script('../../dist/plugins/overlay/overlay.mb.alfa.js', 'overlay');
		$script('../../dist/extends/trigonometria/trigonometria.miracle.1.1.js', 'trigonometria');
		$script('../../dist/required/sizzle/sizzle.mb.1.10.20.js', 'sizzle');
	});
});
