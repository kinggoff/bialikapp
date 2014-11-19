var requestPasswordScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
});

var mainLogoImageView = Ti.UI.createImageView({
	image:path+'images/welcomeScreen/logo.png',
	width:'90%',
	top:'20dp'
});

var welcomeToBialik = Ti.UI.createLabel({
	text:'As a Current Parent you must sign in below. Please enter the e-mail that we have on file for you and we will send a password to that address. Please enter the password on the next screen. If you do not receive a an e-mail in the next few minutes please check your spam folder for correspondence and/or e-mail us at app@bialik.ca.',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:12
	},
	top:'15dp',
	width:'80%'
});

var currentParentSignInContainerView = Ti.UI.createView({
	width:'90%',
	borderColor:'#ccc',
	borderRadius:10,
	backgroundColor:'#fff',
	layout:'vertical',
	height:Ti.UI.SIZE,
	top:'20dp'
});

var currentParentSignInLabel = Ti.UI.createLabel({
	text:'Current Parent Sign In',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	top:'15dp'
});

//email textField
var currentParentEmail = Ti.UI.createTextField({
	hintText:'e-mail',
	top:'13dp',
	height:'40dp',
	width:'90%',
	borderColor:'#ccc',
	borderRadius:10,
	backgroundColor:'#fff',
	color:'#00a4e4',
	paddingLeft:15
});

//Prospective Button end

//request password Button
var requestPasswordButtonContainer = Ti.UI.createView({
	top:'8dp',
	height:'40dp',
	width:'90%',
	borderColor:'#ccc',
	borderRadius:10,
	backgroundGradient: {
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	},
	bottom:'20dp'
});

requestPasswordButtonContainer.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'Request Password'
}));
//Current Button end

//create event listeners
requestPasswordButtonContainer.addEventListener('click', function(){
	var _view = require('windows/current/signin');
	
	bialik_app.updateTitle('Welcome and Setup');
	
	mainWindow.remove(bialik_app.getCurrentView());
	mainWindow.add(_view.getView());
	
	bialik_app.setPreviousView(bialik_app.getCurrentView());
	bialik_app.setCurrentView(_view.getView());
	
	bialik_app.addBackButton(_view.getView()); //param = view to remove
});

var footorImageView = Ti.UI.createImageView({
	image:path+'images/logo-footer.png',
	width:'80%',
	top:'40dp'
});

//add views
currentParentSignInContainerView.add(currentParentSignInLabel);
currentParentSignInContainerView.add(currentParentEmail);
currentParentSignInContainerView.add(requestPasswordButtonContainer);

requestPasswordScrollView.add(mainLogoImageView);
requestPasswordScrollView.add(welcomeToBialik);
requestPasswordScrollView.add(currentParentSignInContainerView);
requestPasswordScrollView.add(footorImageView);

exports.getView = function(){
	return requestPasswordScrollView;
};


//onclick change gradients
requestPasswordButtonContainer.addEventListener('touchstart', function(){
	requestPasswordButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#a2a4a8',offset:1.00},
			{color:'#829ba8',offset:0.10},
			{color:'#a2a4a8',offset:0.00}
		],
	});
	requestPasswordButtonContainer.setBorderColor('#40434a');
	requestPasswordButtonContainer.setBorderWidth(3);
});

requestPasswordButtonContainer.addEventListener('touchend', function(){
	requestPasswordButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	});
	requestPasswordButtonContainer.setBorderColor('#ccc');
	requestPasswordButtonContainer.setBorderWidth(1);
});
//onclick change gradients end
