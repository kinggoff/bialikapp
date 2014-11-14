var prospectAppAndInfoScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
});

var row1 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:'100dp',
	top:'20dp',
	layout:'horizontal'
});

var applicationFormContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

applicationFormContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/application-forms-lrg.png',
	top:'05dp',
	height:'55dp'
}));

applicationFormContainer.add(Ti.UI.createLabel({
	text:'Application Form',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row1.add(applicationFormContainer);

var brochureContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

brochureContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/brochure-lrg.png',
	top:'05dp',
	height:'55dp'
}));

brochureContainer.add(Ti.UI.createLabel({
	text:'School Brochure',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row1.add(brochureContainer);

var row2 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:'100dp',
	top:'0dp',
	layout:'horizontal'
});

var IsraelBrochureContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

IsraelBrochureContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/interactive-centre-lrg.png',
	top:'05dp',
	height:'55dp'
}));

IsraelBrochureContainer.add(Ti.UI.createLabel({
	text:'Israel Interactive Centre Brochure',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row2.add(IsraelBrochureContainer);

var kindergartenContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

kindergartenContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/kindergarten-lrg-application.png',
	top:'05dp',
	height:'55dp'
}));

kindergartenContainer.add(Ti.UI.createLabel({
	text:'Kindergarten',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

kindergartenContainer.addEventListener('click', function(){
	var _view = require('windows/prospect/aplicationAndInfoViews/kindergarten');
	if(mainWindow.children.length > 2){
		mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
	}
	bialik_app.addBackButton('windows/prospect/appandinfo', true);
	mainWindow.add(_view.getView());
});

row2.add(kindergartenContainer);

var row3 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:'100dp',
	top:'10dp',
	layout:'horizontal'
});

var grade1to5Container = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

grade1to5Container.add(Ti.UI.createImageView({
	image:path+'images/icons/grades-1-5-lrg-application.png',
	top:'05dp',
	height:'55dp'
}));

grade1to5Container.add(Ti.UI.createLabel({
	text:'Grades 1 - 5',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

grade1to5Container.addEventListener('click', function(){
	var _view = require('windows/prospect/aplicationAndInfoViews/grade1to5');
	if(mainWindow.children.length > 2){
		mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
	}
	bialik_app.addBackButton('windows/prospect/appandinfo', true);
	mainWindow.add(_view.getView());
});

row3.add(grade1to5Container);

var grade6to8Container = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

grade6to8Container.add(Ti.UI.createImageView({
	image:path+'images/icons/grades-6-8-lrg-application.png',
	top:'05dp',
	height:'55dp'
}));

grade6to8Container.add(Ti.UI.createLabel({
	text:'Grades 6 - 8',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

grade6to8Container.addEventListener('click', function(){
	var _view = require('windows/prospect/aplicationAndInfoViews/grade6to8');
	if(mainWindow.children.length > 2){
		mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
	}
	bialik_app.addBackButton('windows/prospect/appandinfo', true);
	mainWindow.add(_view.getView());
});

row3.add(grade6to8Container);

var row4 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:'100dp',
	top:'10dp'
});

var feesContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical'
});

feesContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/fees-lrg.png',
	top:'05dp',
	height:'55dp'
}));

feesContainer.add(Ti.UI.createLabel({
	text:'Fees',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

feesContainer.addEventListener('click', function(){
	var _view = require('windows/prospect/aplicationAndInfoViews/fees');
	if(mainWindow.children.length > 2){
		mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
	}
	bialik_app.addBackButton('windows/prospect/appandinfo', true);
	mainWindow.add(_view.getView());
});

row4.add(feesContainer);

prospectAppAndInfoScrollView.add(row1);
prospectAppAndInfoScrollView.add(row2);
prospectAppAndInfoScrollView.add(row3);
prospectAppAndInfoScrollView.add(row4);

exports.getView = function(){
	return prospectAppAndInfoScrollView;
};
	