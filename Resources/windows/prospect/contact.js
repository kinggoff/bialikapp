exports.open = function(){
	var contactWindow = Ti.UI.createWindow({
		backgroundImage:'images/page-bg.jpg',
		c_winName:'prospect_contact'
	});
	
	var contactHeaderView = Ti.UI.createView({
		backgroundColor:'blue',
		height:'45dp',
		top:(isIOS) ? 22:0,
		backgroundGradient: {
			type:'linear',
			colors:[{color:'#02a6d2',offset:0.0},{color:'#0000d2',offset:1}],
		}
	});
	
	var contactScrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '67dp':'45dp'
	});
	
	var contactHeaderLabel = Ti.UI.createLabel({
		text:'Contact',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:18
		},
		color:'#fff'
	});
	
	var contactMenuIcon = Ti.UI.createButton({
		left:'15dp',
		backgroundImage:path+'images/icons/menu.png',
		height:'25dp',
		width:'30dp'
	});
	
	contactMenuIcon.addEventListener('click',function(){
		console.log('contactMenuIcon');
		if(menuToggle){
			drawer.showDrawer();
			menuToggle = false;
		}else{
			drawer.hideDrawer();
			menuToggle = true;
		}
	});
	
	
	
	
	contactHeaderView.add(contactMenuIcon);
	contactHeaderView.add(contactHeaderLabel);
	
	contactScrollView.add();
	
	contactWindow.add(contactHeaderView);
	contactWindow.add(contactScrollView);
	
	currentWindow = contactWindow;
	contactWindow.open({animated:false});
};