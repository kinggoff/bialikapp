var grade1to5ScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
});

grade1to5ScrollView.add(Ti.UI.createLabel({
	text:'Grades 1-5',
	top:'15dp',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));

grade1to5ScrollView.add(Ti.UI.createLabel({
	text:'The Elementary Division is a dynamic child-centred learning environment with a challenging, enriching program divided into a half-day each of general and Jewish studies.\n\nHebrew and a connection to the State of Israel are the central focuses of the Jewish studies curriculum, which is a full Hebrew-language immersion program.  Students learn oral and written language, literature, Bible, the Jewish holidays, history, geography and traditional practices, as well as Yiddish. The program includes the use of varied strategies that make the learning enjoyable and effective. \n\nThe general studies curriculum follows the guidelines of the Ministry of Education and Training.  Emphasis is on academic excellence in all subject areas: language arts, mathematics, science and digital literacy, social studies, French and physical education. Students acquire the depth of knowledge and skills needed to succeed in the 21st century. Curriculum-related field trips and special outings expose students to drama, music, art and multicultural themes.\n\nTeachers plan lessons and use varied teaching strategies in order to meet the needs of different learners. The program incorporates art, music, varied learning styles, emotional intelligence, and student-centered activities to build concepts. Students focus on developing problem solving, decision-making, critical thinking and communication skills, as well as on expressing their creativity in a variety of ways. Student needs are met through extensive resource and support services along with opportunities for challenge and enrichment. Smartboards are used in every classroom.\n\nBialik offers an extensive and rich extra-curricular program with a variety of activities catering to the many interests of our students. \n\nCharacter education, through the emphasis of specific traits and the development of Mentschlichkeit, is an integral part of both the Jewish and general studies programs, and is embedded in all aspects of school life.\n\nBialik has made a commitment to equipping all classrooms with technology for 21st century learning.  All Kindergarten classrooms have Smartboards.  This allows the children to use interactive computer technology right from the start of their schooling.  In addition, the Smartboard allows children to learn developmentally appropriate concepts in an innovative way.  Kindergarten students also have access to a shared iPad cart.\n\nBialik Kindergarten children are happily engaged in all aspects of their learning. Bialik students are proud of their learning and demonstrate it daily!',
	top:'15dp',
	font:{
		fontFamily:helveticafont,
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));

exports.getView = function(){
	return grade1to5ScrollView;
};
