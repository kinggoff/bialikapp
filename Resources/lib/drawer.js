var menuContainer = Ti.UI.createView({
	width:'100%',
	left:'-100%',
	height:Ti.UI.FILL,
	zIndex:2,
	top:(isIOS) ? '62dp':'40dp'
});

var background = Ti.UI.createView({
	touchEnabled:false,
	width:'100%',
	opacity:.7,
	zIndex:3
});

var listContainer = Ti.UI.createView({
	backgroundImage:path+'images/common/drawer-bg.jpg',
	width:'90%',
	left:0,
	zIndex:4
});

menuContainer.add(background);
menuContainer.add(listContainer);
menuContainer.add(Ti.UI.createImageView({
	image:path+'images/logo-footer.png',
	bottom:'15dp',
	width:'230dp'
}));

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

exports.setDrawerList = function(view){
	if(listContainer.getChildren().length > 1){
		listContainer.removeAllChildren();
	}
	listContainer.add(view);
};

exports.hideDrawerThenOpenNewWindow = function(winToOpen){
	menuContainer.setLeft('-100%');
	winToOpen.open();
	menuToggle = true;
};
