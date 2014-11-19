var currentHomeScrollView = Ti.UI.createScrollView({
	id:'currentHomeScrollView',
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
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
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:15
	},
	top:'15dp',
	width:'273dp'
});

var welcomeToOurSchoolLabel2 = Ti.UI.createLabel({
	top:'10dp',
	font:{
		fontFamily:helveticafont,
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

currentHomeScrollView.add(mainLogoImageView);
currentHomeScrollView.add(welcomeToOurSchoolLabel);
currentHomeScrollView.add(welcomeToOurSchoolLabel2);
currentHomeScrollView.add(schoolImageView1);
currentHomeScrollView.add(recipientOfSupportLabel);

exports.getView = function(){
	return currentHomeScrollView;
};
