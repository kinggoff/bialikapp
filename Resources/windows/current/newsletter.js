var currentPTAScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var row1 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'20dp',
	layout:'horizontal'
});

var schoolWideContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

schoolWideContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/school-lrg.png',
	top:'05dp',
	height:'55dp'
}));

schoolWideContainer.add(Ti.UI.createLabel({
	text:'School Wide',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row1.add(schoolWideContainer);

var kinderGartenContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

kinderGartenContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/kindergarten-lrg.png',
	top:'05dp',
	height:'55dp'
}));

kinderGartenContainer.add(Ti.UI.createLabel({
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

kinderGartenContainer.addEventListener('click', function(){
	var _view = require('windows/current/newsletter/kindergarten');
	
	if(mainWindowMirror.length > 2){
		mainWindow.remove(mainWindowMirror[mainWindowMirror.length-1]);
		mainWindowMirror.splice(-1);
	}
	
	mainWindow.add(_view.getView());
	mainWindowMirror.push(_view.getView());
	
	bialik_app.addBackButton('windows/current/newsletter', true);
	
	_view = null;
});

row1.add(kinderGartenContainer);

var row2 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'0dp',
	layout:'horizontal'
});

var elemGrades1to5Container = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

elemGrades1to5Container.add(Ti.UI.createImageView({
	image:path+'images/icons/grades-1-5-lrg.png',
	top:'05dp',
	height:'55dp'
}));

elemGrades1to5Container.add(Ti.UI.createLabel({
	text:'Elementary Grades 1-5',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor,
	width:'60%'
}));

elemGrades1to5Container.addEventListener('click', function(){
	var _view = require('windows/current/newsletter/grade1to5');
	
	if(mainWindowMirror.length > 2){
		mainWindow.remove(mainWindowMirror[mainWindowMirror.length-1]);
		mainWindowMirror.splice(-1);
	}
	
	mainWindow.add(_view.getView());
	mainWindowMirror.push(_view.getView());
	
	bialik_app.addBackButton('windows/current/newsletter', true);
	
	_view = null;
});

row2.add(elemGrades1to5Container);

var seniorGrades6to8Container = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

seniorGrades6to8Container.add(Ti.UI.createImageView({
	image:path+'images/icons/grades-6-8-lrg.png',
	top:'05dp',
	height:'55dp'
}));

seniorGrades6to8Container.add(Ti.UI.createLabel({
	text:'Senior Grades 6-8',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor,
	width:'60%'
}));

seniorGrades6to8Container.addEventListener('click', function(){
	var _view = require('windows/current/newsletter/grade6to8');
	
	if(mainWindowMirror.length > 2){
		mainWindow.remove(mainWindowMirror[mainWindowMirror.length-1]);
		mainWindowMirror.splice(-1);
	}
	
	mainWindow.add(_view.getView());
	mainWindowMirror.push(_view.getView());
	
	bialik_app.addBackButton('windows/current/newsletter', true);
	
	_view = null;
});

row2.add(seniorGrades6to8Container);

var row4 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'10dp',
	layout:'horizontal'
});

var athleticsContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

athleticsContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/athletics-lrg.png',
	top:'05dp',
	height:'55dp'
}));

athleticsContainer.add(Ti.UI.createLabel({
	text:'Athletics',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row4.add(athleticsContainer);

var communityContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

communityContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/community-lrg.png',
	top:'05dp',
	height:'55dp'
}));

communityContainer.add(Ti.UI.createLabel({
	text:'Community',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row4.add(communityContainer);

var row5 = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'10dp',
	layout:'horizontal'
});

var bulletinContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

bulletinContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/events-lrg.png',
	top:'05dp',
	height:'55dp'
}));

bulletinContainer.add(Ti.UI.createLabel({
	text:'Bulletin Board',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row5.add(bulletinContainer);

var PTAContainer = Ti.UI.createView({
	width:'50%',
	height:Ti.UI.SIZE,
	layout:'vertical',
	left:0
});

PTAContainer.add(Ti.UI.createImageView({
	image:path+'images/icons/pta-lrg.png',
	top:'05dp',
	height:'55dp'
}));

PTAContainer.add(Ti.UI.createLabel({
	text:'PTA',
	top:'6dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	color:defaultBlueColor
}));

row5.add(PTAContainer);

currentPTAScrollView.add(row1);
currentPTAScrollView.add(row2);
//currentPTAScrollView.add(row3);
currentPTAScrollView.add(row4);
currentPTAScrollView.add(row5);

exports.getView = function(){
	return currentPTAScrollView;
};
	