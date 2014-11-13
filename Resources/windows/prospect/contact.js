var prospectContactScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
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
	top:0
});

var benEdithImage = Ti.UI.createImageView({
	image:path+'images/contact-tbehec.jpg',
	width:'40%',
	height:Ti.UI.SIZE,
	top:0
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
		fontSize:12,
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
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Toronto Ontario',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'M6B 3A1 Canada',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Phone: 416-783-3346',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	top:'20dp'
}));

viewmountInfoContainer.add(Ti.UI.createLabel({
	text:'Web: www.bialik.ca',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

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
		fontSize:12,
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
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Vaughan Ontario',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'L6A 4P6 Canada',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Phone: 416-XXX-XXXX',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	top:'20dp'
}));

benEdithInfoContainer.add(Ti.UI.createLabel({
	text:'Web: www.bialik.ca',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	left:'10dp',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
}));

//add them views
viewmountContainer.add(viewmountImage);
viewmountContainer.add(viewmountInfoContainer);
benEdithContainer.add(benEdithImage);
benEdithContainer.add(benEdithInfoContainer);

prospectContactScrollView.add(viewmountContainer);
prospectContactScrollView.add(benEdithContainer);

exports.getView = function(){
	return prospectContactScrollView;
};