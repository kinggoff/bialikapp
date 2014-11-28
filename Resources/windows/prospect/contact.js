var prospectContactScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

//2 containers for each school group
var viewmountContainer = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'20dp'
});

var benEdithContainer = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	top:'15dp'
});

//2 images
var viewmountImage = Ti.UI.createImageView({
	image:path+'images/contact-viewmount.jpg',
	width:'40%',
	height:Ti.UI.SIZE,
	top:'4dp'
});

var benEdithImage = Ti.UI.createImageView({
	image:path+'images/contact-tbehec.jpg',
	width:'40%',
	height:Ti.UI.SIZE,
	top:'4dp'
});

//info container for viewmount branch
var viewmountInfoContainer = Ti.UI.createView({
	layout:'vertical',
	width:'55%',
	height:Ti.UI.SIZE,
	top:0
});

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Bialik Hebrew Day School Viewmount Branch',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'2760 Bathurst St.',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	top:0
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Toronto Ontario',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'M6B 3A1 Canada',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Phone: 416-783-3346',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	top:'12dp'
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Web: www.Bialik.ca',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

if(!isBB){
	viewmountInfoContainer.children[5].add(Ti.UI.createView({
		height:'1dp',
		width:'82dp',
		left:'33dp',
		bottom:0,
		backgroundColor:defaultBlueColor
	}));
}


//info container for ben edith branch
var benEdithInfoContainer = Ti.UI.createView({
	layout:'vertical',
	width:'55%',
	height:Ti.UI.SIZE,
	top:0
});

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Bialik Hebrew Day School The Ben and Edith Education Centre',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'180 Ilan Ramon Boulevard',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Vaughan Ontario',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'L6A 4P6 Canada',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Phone: 416-XXX-XXXX',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	top:'12dp'
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Web: www.Bialik.ca',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));
if(!isBB){
	benEdithInfoContainer.children[5].add(Ti.UI.createView({
		height:'1dp',
		width:'82dp',
		left:'33dp',
		bottom:0,
		backgroundColor:defaultBlueColor
	}));
}


//add them views
viewmountContainer.add(viewmountImage);
viewmountContainer.add(viewmountInfoContainer);
benEdithContainer.add(benEdithImage);
benEdithContainer.add(benEdithInfoContainer);

prospectContactScrollView.add(viewmountContainer);
prospectContactScrollView.add(benEdithContainer);


//add people info
var peopleInfoContainer = Ti.UI.createView({
	height:(isBB) ? '160dp':'140dp',
	width:Ti.UI.FILL,
	top:'15dp'
});

peopleInfoContainer.add(Ti.UI.createView({
	zIndex:1,
	backgroundColor:'#3d72bf',
	opacity:.1,
	height:Ti.UI.FILL,
	width:Ti.UI.FILL,
}));

peopleInfoContainer.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL,
	zIndex:2,
	top:0
}));

peopleInfoContainer.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL,
	zIndex:2,
	top:(isBB) ? 80:70
}));

peopleInfoContainer.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL,
	zIndex:2,
	bottom:0
}));

var waltmanContainer = Ti.UI.createView({
	layout:'vertical',
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	top:(isBB) ? '5dp':'10dp',
	left:'15dp'
});

waltmanContainer.add(Ti.UI.createLabel({
	text:'Danielle Waltman',
	font:{
		fontSize:13,
		fontWeight:'bold',
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

waltmanContainer.add(Ti.UI.createLabel({
	text:'Admissions Manager',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

waltmanContainer.add(Ti.UI.createLabel({
	text:'dwaltman@bialik.ca (416-783-3346 ext. 285)',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

if(!isBB){
	waltmanContainer.children[2].add(Ti.UI.createView({
		height:'1dp',
		width:'117dp',
		bottom:0,
		left:0,
		backgroundColor:defaultBlueColor
	}));
}

var sabrinaContainer = Ti.UI.createView({
	layout:'vertical',
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	top:(isBB) ? '83dp':'78dp',
	left:'15dp'
});

sabrinaContainer.add(Ti.UI.createLabel({
	text:'Sabrina Barczynski',
	font:{
		fontSize:13,
		fontWeight:'bold',
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

sabrinaContainer.add(Ti.UI.createLabel({
	text:'Registrar',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

sabrinaContainer.add(Ti.UI.createLabel({
	text:'sbarczynski@bialik.ca (416-783-3346 ext. 207)',
	font:{
		fontSize:13,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:0,
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

if(!isBB){
	sabrinaContainer.children[2].add(Ti.UI.createView({
		height:'1dp',
		width:'127dp',
		bottom:0,
		left:0,
		backgroundColor:defaultBlueColor
	}));
}

peopleInfoContainer.add(waltmanContainer);
peopleInfoContainer.add(sabrinaContainer);

prospectContactScrollView.add(peopleInfoContainer);

exports.getView = function(){
	return prospectContactScrollView;
};