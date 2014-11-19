var prospect_home = require('windows/prospect/home');
var current_home = require('windows/current/home'); //change this 
var welcomeandsetup = require('windows/welcomesetup');
var previousView;
var currentView;

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
if(isIOS || isAndroid){
	var drawerButton = Ti.UI.createView({
		backgroundGradient:{
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
}else if(isBB){
	var drawerButton = Ti.UI.createButton({
		title:'Menu',
		left:'5dp',
		width:'80dp'
	});
}
drawerButton.addEventListener('click',function(){
	if(menuToggle){
		drawer.showDrawer();
		menuToggle = false;
	}else{
		drawer.hideDrawer();
		menuToggle = true;
	}
});

var tempToggle = true;
var tempText = Ti.UI.createButton({
	title:'sac',
	right:'10dp',
	color:'#fff',
	width:'100dp'
});
tempText.addEventListener('click',function(){
	if(tempToggle){
		Titanium.App.Properties.setString('EnrollmentType',null);
		tempText.setTitle('null');
		tempToggle = false;
	}else{
		Titanium.App.Properties.setString('EnrollmentType','prospective');
		drawer.updateDrawer(prospectMenuList.getList());
		tempText.setTitle('prospect');
		tempToggle = true;
	}
});

mainWindowHeaderView.add(tempText); //this will cause issue w/ the back button and will make the header title disapper


mainWindowHeaderView.add(mainWindowHeaderLabel);
mainWindow.add(mainWindowHeaderView);
mainWindow.add(drawer.getDrawer());

exports.init = function(){
	switch(Titanium.App.Properties.getString('EnrollmentType')){
		case 'prospective': mainWindow.add(prospect_home.getView());
							previousView = prospect_home.getView();
							drawer.updateDrawer(prospectMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		case 'current': 	mainWindow.add(current_home.getView());
							previousView = current_home.getView();
							drawer.updateDrawer(currentMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		default:			mainWindow.add(welcomeandsetup.getView());
							previousView = welcomeandsetup.getView();
	}
	mainWindow.open();
};

exports.updateTitle = function(text){
	mainWindowHeaderLabel.setText(text);
};

exports.addBackButton = function(viewToRemove, addDrawerAfterBackPress){
	var backButton = Ti.UI.createButton({
		title:'  Back',
		backgroundImage:path+'images/back-btn-bg.png',
		height:'30dp',
		width:'50dp',
		left:'5dp',
		font:{
			fontSize:12,
			fontFamily:helveticafont,
			fontWeight:'Bold'
		},
	});
	
	backButton.addEventListener('click', function(){
		mainWindow.remove(viewToRemove);
		mainWindow.add(previousView);
		
		mainWindowHeaderView.remove(backButton);
		if(addDrawerAfterBackPress){
			mainWindowHeaderView.add(drawerButton);
		}else{
			mainWindowHeaderView.remove(drawerButton);
		}
	});
	
	mainWindowHeaderView.add(backButton);
};

exports.addDrawerButton = function(){
	
	var backButton = Ti.UI.createButton({
		title:'  Back',
		backgroundImage:path+'images/back-btn-bg.png',
		height:'30dp',
		width:'50dp',
		left:'5dp',
		font:{
			fontSize:12,
			fontFamily:helveticafont,
			fontWeight:'Bold'
		},
	});
	
	backButton.addEventListener('click', function(){
		mainWindow.remove(viewToRemove);
		mainWindow.add(previousView);
		
		mainWindowHeaderView.remove(backButton);
		if(addDrawerAfterBackPress){
			mainWindowHeaderView.add(drawerButton);
		}
	});
	
	
	mainWindowHeaderView.remove(backButton);
	mainWindowHeaderView.add(drawerButton);
};

exports.setPreviousView = function(view){
	previousView = null;
	previousView = view;
};

exports.setCurrentView = function(view){
	currentView = null;
	currentView = view;
};

exports.getCurrentView = function(){
	return currentView;
};