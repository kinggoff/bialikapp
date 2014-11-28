var newsletterData = Ti.UI.scrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

exports.getView = function(viewToGet){
	var _view = require('windows/current/newsletter/'+viewToGet);
	
	newsletterData.removeAllChildren();
	newsletterData.add(_view.getView());
	
	return newsletterData;
};