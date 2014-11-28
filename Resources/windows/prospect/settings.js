var prospectSettingsScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

//configureYourExperienceContainer start
var configureYourExperienceContainer = Ti.UI.createView({
	height:Ti.UI.SIZE,
	layout:'vertical'
});

configureYourExperienceContainer.add(Ti.UI.createLabel({
	color:defaultBlueColor,
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	font:{
		fontSize:15,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	top:'25dp',
	text:'Configure Your Experience',
	left:'30dp'
}));

configureYourExperienceContainer.add(Ti.UI.createLabel({
	color:defaultBlueColor,
	height:Ti.UI.SIZE,
	width:'80%',
	font:{
		fontSize:12,
		fontFamily:helveticafont,
	},
	top:'15dp',
	text:'Please configure your app experience by selecting options from the list of settings below',
	bottom:'15dp',
	left:'30dp'
}));

prospectSettingsScrollView.add(configureYourExperienceContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));
//configureYourExperienceContainer end

//push notification start
var pushNotificationContainer = Ti.UI.createView({
	height:(isBB) ? '55dp':'40dp',
	width:Ti.UI.FILL
});

var pushNotificationLabel = Ti.UI.createLabel({
	text:'Push Notifications',
	left:'20dp',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor
});

// Create pushNotificationSwitch Switch.
var pushNotificationSwitch = Ti.UI.createSwitch({
	value:false,
	right:'20dp',
	tintColor:'#3d72bf',
	onTintColor:defaultBlueColor
});

pushNotificationSwitch.addEventListener('change', function(e) {
	Ti.API.info('Event value: ' + e.value + ', switch value: ' + pushNotificationSwitch.value);
});

pushNotificationContainer.add(pushNotificationLabel);
pushNotificationContainer.add(pushNotificationSwitch);
prospectSettingsScrollView.add(pushNotificationContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));
//push notification end

//viewmountBranch start
var viewmountBranchContainer = Ti.UI.createView({
	height:(isBB) ? '55dp':'40dp',
	width:Ti.UI.FILL
});

var viewmountOpaqueBG = Ti.UI.createView({
	zIndex:1,
	backgroundColor:'#3d72bf',
	opacity:.3,
});

var viewmountBranchLabel = Ti.UI.createLabel({
	text:'Viewmount Branch',
	zIndex:2,
	left:'20dp',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor
});

var viewmountBranchCheckBox = Ti.UI.createImageView({
	image:path+'images/icons/check.png',
	zIndex:2,
	height:'15dp',
	right:'20dp',
});

viewmountBranchContainer.add(viewmountOpaqueBG);
viewmountBranchContainer.add(viewmountBranchLabel);
viewmountBranchContainer.add(viewmountBranchCheckBox);
prospectSettingsScrollView.add(viewmountBranchContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));

//viewmountBranch end

//ben edith start
var benEdithBranchContainer = Ti.UI.createView({
	height:(isBB) ? '120dp':'80dp',
	width:Ti.UI.FILL
});

var benEdithOpaqueBG = Ti.UI.createView({
	zIndex:1,
	backgroundColor:'#3d72bf',
	opacity:.3,
});

var benEdithBranchLabel = Ti.UI.createLabel({
	text:'The Ben and Edith Himel Education Centre',
	zIndex:2,
	left:'20dp',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor,
	width:'250dp'
});

var benEdithBranchCheckBox = Ti.UI.createImageView({
	image:path+'images/icons/check.png',
	zIndex:2,
	height:'15dp',
	right:'20dp',
});

benEdithBranchContainer.add(benEdithOpaqueBG);
benEdithBranchContainer.add(benEdithBranchLabel);
benEdithBranchContainer.add(benEdithBranchCheckBox);
prospectSettingsScrollView.add(benEdithBranchContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));
//ben edith end


//prospect parent start
var prospectParentContainer = Ti.UI.createView({
	height:(isBB) ? '55dp':'40dp',
	width:Ti.UI.FILL
});

var prospectParentLabel = Ti.UI.createLabel({
	text:'I am a Prospective Parent',
	zIndex:2,
	left:'20dp',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor
});

var prospectParentCheckBox = Ti.UI.createImageView({
	image:path+'images/icons/check.png',
	zIndex:2,
	height:'15dp',
	right:'20dp',
});

prospectParentContainer.add(prospectParentLabel);
prospectParentContainer.add(prospectParentCheckBox);
prospectSettingsScrollView.add(prospectParentContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));

//prospect parent end

//current parent start
var currentParentContainer = Ti.UI.createView({
	height:(isBB) ? '55dp':'40dp',
	width:Ti.UI.FILL
});

var currentParentLabel = Ti.UI.createLabel({
	text:'I am a Current Parent',
	zIndex:2,
	left:'20dp',
	font:{
		fontSize:20,
		fontFamily:helveticafont,
	},
	color:defaultBlueColor
});

var currentParentCheckBox = Ti.UI.createImageView({
	image:path+'images/icons/check.png',
	zIndex:2,
	height:'15dp',
	right:'20dp',
});

currentParentContainer.add(currentParentLabel);
currentParentContainer.add(currentParentCheckBox);
prospectSettingsScrollView.add(currentParentContainer);
prospectSettingsScrollView.add(Ti.UI.createView({
	height:'1dp',
	backgroundColor:'#3d72bf',
	width:Ti.UI.FILL
}));

//current parent end

exports.getView = function(){
	return prospectSettingsScrollView;
};