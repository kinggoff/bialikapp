exports.open = function(){
	var SchoolLifeWindow = Ti.UI.createWindow({
		backgroundImage:'images/page-bg.jpg',
		c_winName:'prospect_schoollife'
	});
	
	var SchoolLifeHeaderView = Ti.UI.createView({
		backgroundColor:'blue',
		height:'45dp',
		top:(isIOS) ? 22:0,
		backgroundGradient: {
			type:'linear',
			colors:[{color:'#02a6d2',offset:0.0},{color:'#0000d2',offset:1}],
		}
	});
	
	var SchoolLifeScrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '67dp':'45dp'
	});
	
	var SchoolLifeHeaderLabel = Ti.UI.createLabel({
		text:'School Life',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:18
		},
		color:'#fff'
	});
	
	var SchoolLifeMenuIcon = Ti.UI.createImageView({
		image:path+'images/icons/menu.png',
		left:'15'+unit,
		height:'25'+unit,
		//width:'35'+unit
	});
	
	SchoolLifeMenuIcon.addEventListener('click',function(){
		console.log('SchoolLifeMenuIcon');
		if(menuToggle){
			drawer.showDrawer();
			menuToggle = false;
		}else{
			drawer.hideDrawer();
			menuToggle = true;
		}
	});
	
	var SchoolLifeHeadingLabel = Ti.UI.createLabel({
		text:'Videos of Our School',
		color:'#03309b',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:24
		},
		top:'25'+unit,
		width:'90%',
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
	});
	
	
	SchoolLifeHeaderView.add(SchoolLifeMenuIcon);
	SchoolLifeHeaderView.add(SchoolLifeHeaderLabel);
	
	SchoolLifeScrollView.add(SchoolLifeHeadingLabel);
	
	SchoolLifeWindow.add(SchoolLifeHeaderView);
	SchoolLifeWindow.add(SchoolLifeScrollView);
	
	currentWindow = SchoolLifeWindow;
	SchoolLifeWindow.open();
};