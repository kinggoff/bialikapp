var prospect_home = require('windows/prospect/home');
var current_home = require('windows/current/home'); //change this 
var welcomeandsetup = require('windows/welcomesetup');

var mainWindowHeaderView = Ti.UI.createView({
	backgroundColor:'#0079eb',
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
	},
	left:(isBB) ? '70dp':null
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
	var drawerButton = Ti.UI.createView({
		backgroundImage:path+'images/common/menu.png',
		left:'5dp',
		width:'40dp',
		height:'30dp'
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
		Titanium.App.Properties.setString('EnrollmentType','current');
		drawer.updateDrawer(prospectMenuList.getList());
		tempText.setTitle('current');
		tempToggle = true;
	}
});

mainWindowHeaderView.add(tempText); //this will cause issue w/ the back button and will make the header title disapper


mainWindowHeaderView.add(mainWindowHeaderLabel);
mainWindow.add(mainWindowHeaderView);
mainWindow.add(drawer.getDrawer());

mainWindowHeaderViewMirror.push(mainWindowHeaderLabel);
mainWindowMirror.push(mainWindowHeaderView);
mainWindowMirror.push(drawer.getDrawer());

exports.init = function(){
	switch(Titanium.App.Properties.getString('EnrollmentType')){
		case 'prospective': mainWindow.add(prospect_home.getView());
							mainWindowMirror.push(prospect_home.getView());
							drawer.updateDrawer(prospectMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		case 'current': 	mainWindow.add(current_home.getView());
							mainWindowMirror.push(current_home.getView());
							drawer.updateDrawer(currentMenuList.getList());
							mainWindowHeaderView.add(drawerButton);
							bialik_app.updateTitle('Home');
							break;
		default:			mainWindow.add(welcomeandsetup.getView());
							mainWindowMirror.push(welcomeandsetup.getView());
	}
	mainWindow.open();
	setInterval(function(){console.log('mainWindowHeaderView: '+mainWindowHeaderView.zIndex);},2000);
};

exports.updateTitle = function(text){
	mainWindowHeaderLabel.setText(text);
};

exports.addDrawerButton = function(){
	if(mainWindowHeaderViewMirror.length > 1){
		mainWindowHeaderView.remove(mainWindowHeaderViewMirror[mainWindowHeaderViewMirror.length-1]);
		mainWindowHeaderViewMirror.splice(-1);
	}
	mainWindowHeaderView.add(drawerButton);
	mainWindowHeaderViewMirror.push(drawerButton);
};

exports.addBackButton = function(viewToGoBack, addDrawerAfterBackPress){
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
		var _view = require(viewToGoBack);
		
		if(mainWindowMirror.length > 2){
			mainWindow.remove(mainWindowMirror[mainWindowMirror.length-1]);
			mainWindowMirror.splice(-1);
		}
		
		mainWindow.add(_view.getView());
		mainWindowMirror.push(_view.getView());
		
		mainWindowHeaderView.remove(backButton);
		mainWindowHeaderViewMirror.splice(-1);
		
		if(addDrawerAfterBackPress){
			mainWindowHeaderView.add(drawerButton);
			mainWindowHeaderViewMirror.push(drawerButton);
		}
	});
	
	if(mainWindowHeaderViewMirror.length > 1){
		mainWindowHeaderView.remove(mainWindowHeaderViewMirror[mainWindowHeaderViewMirror.length-1]);
		mainWindowHeaderViewMirror.splice(-1);
	}
	
	mainWindowHeaderView.add(backButton);
	mainWindowHeaderViewMirror.push(backButton);
};

