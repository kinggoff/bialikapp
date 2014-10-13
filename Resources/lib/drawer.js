var menuContainer = Ti.UI.createView({
	width:'100%',
	left:'-100%',
	height:Ti.UI.FILL,
	zIndex:2,
	top:(isIOS) ? '67'+unit:'45'+unit
});

var background = Ti.UI.createView({
	touchEnabled:false,
	width:'100%',
	opacity:.7,
	zIndex:3
});

var listContainer = Ti.UI.createView({
	backgroundColor:'#01268f',
	width:'90%',
	left:0,
	zIndex:4
});

menuContainer.add(background);
menuContainer.add(listContainer);

var slideIn = Ti.UI.createAnimation({
	left:0,
	duration:300
});

var slideOut = Ti.UI.createAnimation({
	left:'-100%',
	duration:300
});

slideOut.addEventListener('complete', function(e){
	currentWindow.remove(menuContainer);
});

exports.showDrawer = function(){
	currentWindow.add(menuContainer);
	menuContainer.animate(slideIn);
};

exports.hideDrawer = function(){
	menuContainer.animate(slideOut);
};

exports.setDrawerList = function(){
	listContainer.removeAllChildren();
};