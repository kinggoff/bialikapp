var red = Ti.UI.createView({
	width:50,
	height:50,
	backgroundColor:'red',
	zIndex:5
});

exports.setActive = function(){
	drawer.setDrawerList(red);
	console.log('red activated');
};
