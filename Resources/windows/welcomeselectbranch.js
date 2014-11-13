var welcomeAndSelectScrollView = Ti.UI.createScrollView({
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
		fontFamily:'Arial',
		fontSize:12
	},
	top:'15dp',
	width:'80%'
});

var selectLocationContainerView = Ti.UI.createView({
	width:'90%',
	borderColor:'#ccc',
	borderRadius:10,
	backgroundColor:'#fff',
	layout:'vertical',
	height:Ti.UI.SIZE,
	top:'20dp'
});

var selectLocationLabel = Ti.UI.createLabel({
	text:'Select Location',
	font:{
		fontSize:20,
		fontFamily:'Arial',
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	top:'15dp'
});

//viewmount button
var viewmountBranchButtonContainer = Ti.UI.createView({
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

var viewmountBranchButton = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE
});

viewmountBranchButton.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:'Arial',
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'Viewmount Branch',
	left:'5dp'
}));
viewmountBranchButtonContainer.add(viewmountBranchButton);
//Prospective Button end

//Current Button
var benEdithBranchButtonContainer = Ti.UI.createView({
	top:'8dp',
	height:'80dp',
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

var benEdithBranchButton = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE
});

benEdithBranchButton.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:'Arial',
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'The Ben and Edith Educational Centre',
	left:'5dp'
}));
benEdithBranchButtonContainer.add(benEdithBranchButton);
//Current Button end

var footorImageView = Ti.UI.createImageView({
	image:path+'images/logo-footer.png',
	width:'80%',
	top:'40dp'
});

//create event listeners
viewmountBranchButtonContainer.addEventListener('touchstart', function(){
	viewmountBranchButton.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:1.00},
			{color:'#d9f1fc',offset:0.10},
			{color:'#fff',offset:0.00}
		],
	});
});

viewmountBranchButtonContainer.addEventListener('touchend', function(){
	viewmountBranchButton.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	});
});

viewmountBranchButtonContainer.addEventListener('click', function(){
	drawer.updateDrawer(prospectMenuList.getList());
	//Titanium.App.Properties.setString('EnrollmentType','prospective');
	var _view = require('windows/prospect/home');
	bialik_app.updateTitle('Home');
	bialik_app.addDrawerButton();
	mainWindow.add(_view.getView());
});

benEdithBranchButtonContainer.addEventListener('touchstart', function(){
	benEdithBranchButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:1.00},
			{color:'#d9f1fc',offset:0.10},
			{color:'#fff',offset:0.00}
		],
	});
});

benEdithBranchButtonContainer.addEventListener('touchend', function(){
	benEdithBranchButtonContainer.setBackgroundGradient({
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	});
});

benEdithBranchButtonContainer.addEventListener('click', function(){
	drawer.updateDrawer(currentMenuList.getList());
	//Titanium.App.Properties.setString('EnrollmentType','current');
	var _view = require('windows/current/home');
	bialik_app.updateTitle('Home');
	mainWindow.add(_view.getView());
});


//add viewss
selectLocationContainerView.add(selectLocationLabel);
selectLocationContainerView.add(viewmountBranchButtonContainer);
selectLocationContainerView.add(benEdithBranchButtonContainer);

welcomeAndSelectScrollView.add(mainLogoImageView);
welcomeAndSelectScrollView.add(welcomeToBialik);
welcomeAndSelectScrollView.add(selectLocationContainerView);
welcomeAndSelectScrollView.add(footorImageView);

exports.getView = function(){
	return welcomeAndSelectScrollView;
};
