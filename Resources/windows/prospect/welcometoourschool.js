var prospectWelcomeToOurSchoolScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var mainLogoImageView = Ti.UI.createImageView({
	image:path+'images/welcomeScreen/logo.png',
	width:'90%',
	top:'20'+unit
});

var headingLabel = Ti.UI.createLabel({
	text:'Prospective Parents:\nViewmount Branch',
	color:'#03309b',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:24
	},
	top:'25'+unit,
	width:'90%',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
});

var welcomeToOurSchoolContent = "Welcome to Bialik Hebrew Day School from our Admissions Manager\n\n"+
								"Dear Parents:\n\n"+
								"For over fifty two years, Bialik Hebrew Day School has stood at the forefront of Jewish and general education in Toronto, providing students from JK to grade 8 with a dynamic and meaning fil school experience.\n\n"+
								"Our adherance to rich traditions and heritage, combined with our integration of cutting edge technologoy and our excellent facilities continue to produce exceptional graduates.\n\n"+
								"In addition to preparing our students academically and instilling life long learning skills, our commitment to the development of the whole child is paramount. We take greate pride in watching our students thrive socially and emotionally, engaging them in our nurturing and vibrant culture.\n\n"+
								"Your child will develop and positive Jewish and Canadian identity and understand the obligations of citzenry and commitment to community. Bialik uniquely fosters a deep connection to the State of Israel and an understanding of the values of the Labour Zionist Movement.\n\n"+
								"Whether you are new to the school or are an alumnus(a) considering Bialik for your child, we urge you to learn more about the \"Bialik Family\" firsthand by contacting me to arrange a tour of either of our spirited branches.\n\n"+
								"I am here to address any questions you may have and assist in navigating you through the entire admissions process. I look forward to discussing your child's future soon.\n\n"+
								"Sincerely,\n"+
								"Danielle Waltman\n"+
								"Admissions Manager\n"+
								"416-783-3346 ext. 285 or\n"+
								"dwaltman@bialik.ca\n\n"+
								"**If you are interested in attending an information session to learn more about Bialik, the dates are as follows:\n\n"+
								"October 21, 2013 - Bialik Himel Information Session, 7pm\n\n"+
								"October 23, 2013 - Bialik Viewmount Information Session, 9:15am\n\n"+
								"October 28, 2013 - Bialik Viewmount Information Session, 7pm\n\n"+
								"October 29, 2013 - Bialik Himel Information Session, 9:15am\n\n"+
								"March 18, 2013 - Bialik Viewmount Information Session, 7pm\n\n"+
								"March 24, 2013 - Bialik Himel Information Session, 7pm";

var welcomeToOurSchoolLabel = Ti.UI.createLabel({
	top:'20'+unit,
	font:{
		fontFamily:helveticafont,
		fontSize:14
	},
	color:'#204eab',
	width:'90%',
	text:welcomeToOurSchoolContent
});

prospectWelcomeToOurSchoolScrollView.add(mainLogoImageView);
prospectWelcomeToOurSchoolScrollView.add(headingLabel);
prospectWelcomeToOurSchoolScrollView.add(welcomeToOurSchoolLabel);

exports.getView = function(){
	return prospectWelcomeToOurSchoolScrollView;
};