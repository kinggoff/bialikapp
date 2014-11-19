var prospectHomeScrollView = Ti.UI.createScrollView({
	id:'prospectHomeScrollView',
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
	text:'Welcome To Our School',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	top:'25dp'
});

var schoolImageView1 = Ti.UI.createImageView({
	top:'15dp',
	image:path+'images/welcomeScreen/welcome-school-1.jpg',
	width:'100%'
});

var dearParentsLabel = Ti.UI.createLabel({
	top:'20dp',
	font:{
		fontFamily:helveticafont,
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

prospectHomeScrollView.add(mainLogoImageView);
prospectHomeScrollView.add(welcomeToOurSchoolLabel);
prospectHomeScrollView.add(schoolImageView1);
prospectHomeScrollView.add(dearParentsLabel);
prospectHomeScrollView.add(footorImageView);

exports.getView = function(){
	return prospectHomeScrollView;
};
