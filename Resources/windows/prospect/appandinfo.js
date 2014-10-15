exports.open = function(){
	var appAndInfoWindow = Ti.UI.createWindow({
		backgroundImage:'images/page-bg.jpg',
		c_winName:'prospect_appandinfo'
	});
	
	var appAndInfoHeaderView = Ti.UI.createView({
		backgroundColor:'blue',
		height:'45dp',
		top:(isIOS) ? 22:0,
		backgroundGradient: {
			type:'linear',
			colors:[{color:'#02a6d2',offset:0.0},{color:'#0000d2',offset:1}],
		}
	});
	
	var appAndInfoScrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '67dp':'45dp',
	});
	
	var appAndInfoHeaderLabel = Ti.UI.createLabel({
		text:'Application & Info',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:18
		},
		color:'#fff'
	});
	
	var appAndInfoMenuIcon = Ti.UI.createButton({
		left:'15dp',
		backgroundImage:path+'images/icons/menu.png',
		height:'25dp',
		width:'30dp'
	});
	
	appAndInfoMenuIcon.addEventListener('click',function(){
		console.log('appAndInfoMenuIcon');
		if(menuToggle){
			drawer.showDrawer();
			menuToggle = false;
		}else{
			drawer.hideDrawer();
			menuToggle = true;
		}
	});
	
	var iconContainer = Ti.UI.createView({
		width:'90%',
		height:Ti.UI.SIZE,
		layout:'horizontal'
	});
	
	var applicationFormContainer = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	applicationFormContainer.add(Ti.UI.createImageView({
		image:path+'images/icons/application-forms-lrg.png',
		top:'15dp',
		width:'50%'
	}));
	
	applicationFormContainer.add(Ti.UI.createLabel({
		text:'Application Form',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(applicationFormContainer);
	
	var brochureContainer = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	brochureContainer.add(Ti.UI.createImageView({
		image:path+'images/icons/brochure-lrg.png',
		top:'15dp',
		width:'50%'
	}));
	
	brochureContainer.add(Ti.UI.createLabel({
		text:'Brochure',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(brochureContainer);
	
	var IsraelBrochureContainer = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	IsraelBrochureContainer.add(Ti.UI.createImageView({
		image:path+'images/icons/interactive-centre-lrg.png',
		top:'15dp',
		width:'50%'
	}));
	
	IsraelBrochureContainer.add(Ti.UI.createLabel({
		text:'Israel Interactive Centre Brochure',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(IsraelBrochureContainer);
	
	var kindergartenContainer = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	kindergartenContainer.add(Ti.UI.createImageView({
		image:path+'images/icons/kindergarten-lrg-application.png',
		top:'15dp',
		width:'50%'
	}));
	
	kindergartenContainer.add(Ti.UI.createLabel({
		text:'Kindergarten',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(kindergartenContainer);
	
	var grade1to5Container = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	grade1to5Container.add(Ti.UI.createImageView({
		image:path+'images/icons/grades-1-5-lrg-application.png',
		top:'15dp',
		width:'50%'
	}));
	
	grade1to5Container.add(Ti.UI.createLabel({
		text:'Grades 1 - 5',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(grade1to5Container);
	
	var grade6to8Container = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	grade6to8Container.add(Ti.UI.createImageView({
		image:path+'images/icons/grades-6-8-lrg-application.png',
		top:'15dp',
		width:'50%'
	}));
	
	grade6to8Container.add(Ti.UI.createLabel({
		text:'Grades 6 - 8',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(grade6to8Container);
	
	var feesContainer = Ti.UI.createView({
		width:'50%',
		height:Ti.UI.SIZE,
		layout:'vertical',
	});
	
	feesContainer.add(Ti.UI.createImageView({
		image:path+'images/icons/fees-lrg.png',
		top:'15dp',
		width:'50%'
	}));
	
	feesContainer.add(Ti.UI.createLabel({
		text:'Fees',
		top:'10dp',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:16
		},
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'blue'
	}));
	
	iconContainer.add(feesContainer);
	
	appAndInfoHeaderView.add(appAndInfoMenuIcon);
	appAndInfoHeaderView.add(appAndInfoHeaderLabel);
	
	appAndInfoScrollView.add(iconContainer);
	console.log(JSON.stringify(appAndInfoScrollView));
	
	appAndInfoWindow.add(appAndInfoHeaderView);
	appAndInfoWindow.add(appAndInfoScrollView);
	
	currentWindow = appAndInfoWindow;
	appAndInfoWindow.open({animated:false});
};