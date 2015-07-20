var Resizer = (function () {
	var 
		markup = '<iframe id="frame0" name="frame0" width=100% height=100% style="position:absolute;z-index:-1;top:0;left:0;"></iframe>',
		left = $('.workspace'),
		right = $('.controllers');

	function _listenerCb () {
			frame0.onresize = function(event) {
				right.css('height', left.css('height'));
			};
		}	

	return {
		init: function () {

		left.css('position', 'relative');
			left.append(markup);
			_listenerCb();			
		}
	}
})();

$(document).ready(function() {
	Resizer.init();
});