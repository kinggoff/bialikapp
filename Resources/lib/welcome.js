exports.init = function(){
	var welcomeWindow = Ti.UI.createWindow({
		backgroundColor:'#000',
		c_winName:'prospect_home'
	});
	
	var welcomeHeaderView = Ti.UI.createView({
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
	
	var scrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '62dp':'40dp',
		backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
	});
	
	var welcomeHeaderLabel = Ti.UI.createLabel({
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
	
	var menuIcon = Ti.UI.createView({
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
	
	menuIcon.add(Ti.UI.createButton({
			backgroundImage:path+'images/common/menu.png',
			height:'20dp',
			width:'25dp',
		})
	);
	/////////
	/*
	var tempToggle = true;
	var tempText = Ti.UI.createButton({
		title:'sac',
		right:10
	});
	tempText.addEventListener('click',function(){
		if(tempToggle){
			currentMenuList.setActive();
			tempToggle = false;
		}else{
			prospectMenuList.setActive();
			tempToggle = true;
		}
	});
	
	welcomeHeaderView.add(tempText);
	*/
	/////////
	
	menuIcon.addEventListener('click',function(){
		if(menuToggle){
			drawer.showDrawer();
			menuToggle = false;
		}else{
			drawer.hideDrawer();
			menuToggle = true;
		}
	});
	
	var mainLogoImageView = Ti.UI.createImageView({
		image:path+'images/welcomeScreen/logo.png',
		width:'90%',
		top:'20dp'
	});
	
	var welcomeToOurSchoolLabel = Ti.UI.createLabel({
		text:'Welcome to Bialik Hebrew Day School',
		color:defaultBlueColor,
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:15
		},
		top:'15dp',
		width:'273dp'
	});
	
	var welcomeToOurSchoolLabel2 = Ti.UI.createLabel({
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontSize:13
		},
		color:defaultBlueColor,
		width:'273dp',
		text:'For over fifty years, Bialik Hebrew Day Schools has stood at the forefront of Jewish and general education in Toronto, providing students from JK to grade 8 with a dynamic and meaningful school experience.'
	});
	
	var schoolImageView1 = Ti.UI.createImageView({
		top:'25dp',
		image:path+'images/welcomeScreen/welcome-school-1.jpg',
		width:'100%'
	});
	
	var recipientOfSupportLabel = Ti.UI.createImageView({
		top:'25dp',
		image:path+'images/welcomeScreen/logo-uja.png',
		width:'150dp'
	});
	
	welcomeHeaderView.add(menuIcon);
	welcomeHeaderView.add(welcomeHeaderLabel);
	
	scrollView.add(mainLogoImageView);
	scrollView.add(welcomeToOurSchoolLabel);
	scrollView.add(welcomeToOurSchoolLabel2);
	scrollView.add(schoolImageView1);
	scrollView.add(recipientOfSupportLabel);
	
	welcomeWindow.add(welcomeHeaderView);
	welcomeWindow.add(scrollView);
	
	currentWindow = welcomeWindow;
	welcomeWindow.open();
};
