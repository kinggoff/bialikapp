var prospect_home = require('windows/prospect/home');
var current_home = require('windows/current/home'); //change this 
var welcomeandsetup = require('windows/welcomesetup');

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
	text:'Welcome and Setup',
	font:{
		fontFamily:helveticafont,
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

var backButton = Ti.UI.createView({
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

backButton.add(Ti.UI.createButton({
		height:'20dp',
		width:'25dp',
		title:'Back',
		color:'#fff',
		font:{
			fontSize:10,
			fontFamily:helveticafont
		}
	})
);

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
//mainWindowHeaderView.add(drawerButton);
mainWindowHeaderView.add(mainWindowHeaderLabel);
mainWindow.add(mainWindowHeaderView);
mainWindow.add(drawer.getDrawer());

exports.init = function(){
	switch(Titanium.App.Properties.getString('EnrollmentType')){
		case 'prospective': mainWindow.add(prospect_home.getView());
							drawer.updateDrawer(prospectMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		case 'current': 	mainWindow.add(current_home.getView());
							drawer.updateDrawer(currentMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		default:			mainWindow.add(welcomeandsetup.getView());
	}
	mainWindow.open();
};


exports.updateTitle = function(title){
	mainWindowHeaderLabel.setText(title);
};

exports.addDrawerButton = function(){
	if(mainWindowHeaderView.children[1]){
		mainWindowHeaderView.remove(mainWindowHeaderView.children[1]);
	}
	mainWindowHeaderView.add(drawerButton);
};

exports.addBackButton = function(viewToGoBack, addDrawerAfterBackPress){
	if(mainWindowHeaderView.children[1]){
		mainWindowHeaderView.remove(mainWindowHeaderView.children[1]);
	}
	mainWindowHeaderView.add(backButton);
	backButton.addEventListener('click', function(){
		var _view = require(viewToGoBack);
		if(mainWindow.children.length > 2){
			mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
		}
		mainWindow.add(_view.getView());
		mainWindowHeaderView.remove(backButton);
		if(addDrawerAfterBackPress){
			mainWindowHeaderView.add(drawerButton);
		}
	});
};