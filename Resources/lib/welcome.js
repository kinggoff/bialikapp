exports.init = function(){
	var welcomeWindow = Ti.UI.createWindow({
		backgroundImage:'images/page-bg.jpg',
		c_winName:'prospect_home'
	});
	
	var welcomeHeaderView = Ti.UI.createView({
		backgroundColor:'blue',
		height:'45dp',
		top:(isIOS) ? 22:0,
		backgroundGradient: {
			type:'linear',
			colors:[{color:'#02a6d2',offset:0.0},{color:'#0000d2',offset:1}],
		},
	});
	
	var scrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '67dp':'45dp'
	});
	
	var welcomeHeaderLabel = Ti.UI.createLabel({
		text:'Home',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:18
		},
		color:'#fff'
	});
	
	var menuIcon = Ti.UI.createImageView({
		image:path+'images/icons/menu.png',
		left:'15dp',
		height:'25dp',
		//width:'35'+unit
	});
	
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
		image:path+'images/logo.png',
		width:'90%',
		top:'20dp'
	});
	
	var welcomeToOurSchoolLabel = Ti.UI.createLabel({
		text:'Welcome To Our School',
		color:'#0000d2',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		top:'25dp'
	});
	
	var schoolImageView1 = Ti.UI.createImageView({
		top:'15dp',
		image:path+'images/welcome-school-1.jpg',
		width:'100%'
	});
	
	var dearParentsLabel = Ti.UI.createLabel({
		top:'20dp',
		font:{
			fontFamily:'Arial',
			fontSize:14
		},
		color:'#204eab',
		width:'90%',
		text:'Dear Parents,\n\nFor over fifty two years, Bialik Hebrew Day Schools has stood at the forefront of Jewish and general education in Toronto, providing students from JK to grade 8 with a dynamic and meaningful school experience.',
	});
	
	var footorImageView = Ti.UI.createImageView({
		image:path+'images/logo-footer.png',
		width:'80%',
		top:'25dp'
	});
	
	welcomeHeaderView.add(menuIcon);
	welcomeHeaderView.add(welcomeHeaderLabel);
	
	scrollView.add(mainLogoImageView);
	scrollView.add(welcomeToOurSchoolLabel);
	scrollView.add(schoolImageView1);
	scrollView.add(dearParentsLabel);
	scrollView.add(footorImageView);
	
	welcomeWindow.add(welcomeHeaderView);
	welcomeWindow.add(scrollView);
	
	currentWindow = welcomeWindow;
	welcomeWindow.open();
};
