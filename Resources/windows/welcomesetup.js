var welcomeAndSetupScrollView = Ti.UI.createScrollView({
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
	text:'Welcome to the Bialik Hebrew Day School App. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec massa odio. Etiam adipiscing erat libero, nec eleifend nisl laoreet vitae. Quisque iaculis pellentesque pretium.',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:12
	},
	top:'15dp',
	width:'80%'
});

var selectEnrollmentTypeContainerView = Ti.UI.createView({
	width:'90%',
	borderColor:'#ccc',
	borderRadius:10,
	backgroundColor:'#fff',
	layout:'vertical',
	height:Ti.UI.SIZE,
	top:'20dp'
});

var selectEnrollmentTypeLabel = Ti.UI.createLabel({
	text:'Select Enrollment Type',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	top:'15dp'
});

//Prospective Button
var selectProspectParentButtonContainer = Ti.UI.createView({
	top:'13dp',
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
});

var selectProspectParent = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE
});

selectProspectParent.add(Ti.UI.createImageView({
	image:path+'images/icons/prospective.png',
	width:'27dp'
}));

selectProspectParent.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'Prospective Parent',
	left:'5dp'
}));
selectProspectParentButtonContainer.add(selectProspectParent);
//Prospective Button end

//Current Button
var selectCurrentParentButtonContainer = Ti.UI.createView({
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

var selectCurrentParent = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE
});

selectCurrentParent.add(Ti.UI.createImageView({
	image:path+'images/icons/current.png',
	width:'27dp'
}));

selectCurrentParent.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'Current Parent',
	left:'5dp'
}));
selectCurrentParentButtonContainer.add(selectCurrentParent);
//Current Button end

//create event listeners
selectProspectParentButtonContainer.addEventListener('click', function(){
	var _view = require('windows/welcomeselectbranch');
	bialik_app.updateTitle('Welcome and Setup');
	mainWindow.add(_view.getView());
	bialik_app.addBackButton('windows/welcomesetup');
});

selectCurrentParentButtonContainer.addEventListener('click', function(){
	var _view = require('windows/current/home');
	bialik_app.updateTitle('Home');
	mainWindow.add(_view.getView());
});

var footorImageView = Ti.UI.createImageView({
	image:path+'images/logo-footer.png',
	width:'80%',
	top:'40dp'
});

//add viewss
selectEnrollmentTypeContainerView.add(selectEnrollmentTypeLabel);
selectEnrollmentTypeContainerView.add(selectProspectParentButtonContainer);
selectEnrollmentTypeContainerView.add(selectCurrentParentButtonContainer);

welcomeAndSetupScrollView.add(mainLogoImageView);
welcomeAndSetupScrollView.add(welcomeToBialik);
welcomeAndSetupScrollView.add(selectEnrollmentTypeContainerView);
welcomeAndSetupScrollView.add(footorImageView);

exports.getView = function(){
	return welcomeAndSetupScrollView;
};


//onclick change gradients
selectProspectParentButtonContainer.addEventListener('touchstart', function(){
	selectProspectParentButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#a2a4a8',offset:1.00},
			{color:'#829ba8',offset:0.10},
			{color:'#a2a4a8',offset:0.00}
		],
	});
	selectProspectParentButtonContainer.setBorderColor('#40434a');
	selectProspectParentButtonContainer.setBorderWidth(3);
});

selectProspectParentButtonContainer.addEventListener('touchend', function(){
	selectProspectParentButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	});
	selectProspectParentButtonContainer.setBorderColor('#ccc');
	selectProspectParentButtonContainer.setBorderWidth(1);
});

//

selectCurrentParentButtonContainer.addEventListener('touchstart', function(){
	selectCurrentParentButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#a2a4a8',offset:1.00},
			{color:'#829ba8',offset:0.10},
			{color:'#a2a4a8',offset:0.00}
		],
	});
	selectCurrentParentButtonContainer.setBorderColor('#40434a');
	selectCurrentParentButtonContainer.setBorderWidth(3);
});

selectCurrentParentButtonContainer.addEventListener('touchend', function(){
	selectCurrentParentButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	});
	selectCurrentParentButtonContainer.setBorderColor('#ccc');
	selectCurrentParentButtonContainer.setBorderWidth(1);
});

//onclick change gradients end
