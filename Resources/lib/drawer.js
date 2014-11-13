var drawerContainer = Ti.UI.createView({
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

drawerContainer.add(background);
drawerContainer.add(listContainer);
drawerContainer.add(Ti.UI.createImageView({
	image:path+'images/logo-footer.png',
	bottom:'15dp',
	width:'230dp'
}));

var slideIn = Ti.UI.createAnimation({
	left:0,
	duration:(isIOS) ? 300:150
});

var slideOut = Ti.UI.createAnimation({
	left:'-100%',
	duration:(isIOS) ? 300:150
});

exports.getDrawer = function(){
	return drawerContainer;
};

exports.showDrawer = function(){
	drawerContainer.animate(slideIn);
};

exports.hideDrawer = function(){
	drawerContainer.animate(slideOut);
};

exports.updateDrawer = function(list){
	listContainer.removeAllChildren();
	listContainer.add(list);
};

