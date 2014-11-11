var prospect_home = require('windows/prospect/home');

var mainWindowHeaderView = Ti.UI.createView({
	backgroundColor:'blue',
	height:'40dp',
	width:Ti.UI.FILL,
	top:(isIOS) ? 22:0,
	backgroundGradient: {
		type:'linear',
		colors:[
			{color:'#00b8e9',offset:0.00},
			{color:'#0079eb',offset:0.50},
			{color:'#0066e8',offset:0.51},
			{color:'#0030a0',offset:1.00}
		],
	},
	viewShadowColor:'#2e2e2e',
	viewShadowOffset:{
		x:0.0,
		y:0.0
	},
	zIndex:99
});

var mainWindowHeaderLabel = Ti.UI.createLabel({
	text:'Home',
	font:{
		fontFamily:'Arial',
		fontWeight:'bold',
		fontSize:16
	},
	color:'#fff',
	shadowColor:'#000',
	shadowOffset:{
		x:1.0,
		y:0.5
	}
});

var drawerButton = Ti.UI.createView({
	backgroundGradient: {
		type:'linear',
		colors:[
			{color:'#0cd7fd',offset:0.00},
			{color:'#00aff8',offset:0.50},
			{color:'#0095f4',offset:0.51},
			{color:'#007fd1',offset:1.00}
		],
	},
	height:'30dp',
	width:'50dp',
	left:'5dp',
	borderColor:'#002162',
	borderRadius:5,
	borderWidth:.5
});

drawerButton.add(Ti.UI.createButton({
		backgroundImage:path+'images/common/menu.png',
		height:'20dp',
		width:'25dp',
	})
);

drawerButton.addEventListener('click',function(){
	if(menuToggle){
		drawer.showDrawer();
		menuToggle = false;
	}else{
		drawer.hideDrawer();
		menuToggle = true;
	}
});
/*
var tempToggle = true;
var tempText = Ti.UI.createButton({
	title:'sac',
	right:10
});
tempText.addEventListener('click',function(){
	if(tempToggle){
		drawer.updateDrawer(prospectMenuList.getList());
		tempToggle = false;
	}else{
		drawer.updateDrawer(currentMenuList.getList());
		tempToggle = true;
	}
});

mainWindowHeaderView.add(tempText);
*/
mainWindowHeaderView.add(drawerButton);
mainWindowHeaderView.add(mainWindowHeaderLabel);
mainWindow.add(mainWindowHeaderView);
mainWindow.add(drawer.getDrawer());

exports.init = function(){
	if(true){
		mainWindow.add(prospect_home.getView());
	}else{
		console.log(false);
	}
	mainWindow.open();
};


exports.updateTitle = function(title){
	mainWindowHeaderLabel.setText(title);
};