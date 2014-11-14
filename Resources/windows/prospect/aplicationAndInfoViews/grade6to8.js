var grade6to8ScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp',
	backgroundImage:path+'images/welcomeScreen/page-bg.jpg'
});

grade6to8ScrollView.add(Ti.UI.createLabel({
	text:'Grades 6-8',
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

grade6to8ScrollView.add(Ti.UI.createLabel({
	text:'The Elementary Division is a dynamic child-centred learning environment with a challenging, enriching program divided into a half-day each of general and Jewish studies.\n\nHebrew and a connection to the State of Israel are the central focuses of the Jewish studies curriculum, which is a full Hebrew-language immersion program.  Students learn oral and written language, literature, Bible, the Jewish holidays, history, geography and traditional practices, as well as Yiddish. The program includes the use of varied strategies that make the learning enjoyable and effective. \n\nThe general studies curriculum follows the guidelines of the Ministry of Education and Training.  Emphasis is on academic excellence in all subject areas: language arts, mathematics, science and digital literacy, social studies, French and physical education. Students acquire the depth of knowledge and skills needed to succeed in the 21st century. Curriculum-related field trips and special outings expose students to drama, music, art and multicultural themes.\n\nTeachers plan lessons and use varied teaching strategies in order to meet the needs of different learners. The program incorporates art, music, varied learning styles, emotional intelligence, and student-centered activities to build concepts. Students focus on developing problem solving, decision-making, critical thinking and communication skills, as well as on expressing their creativity in a variety of ways. Student needs are met through extensive resource and support services along with opportunities for challenge and enrichment. Smartboards are used in every classroom.\n\nBialik offers an extensive and rich extra-curricular program with a variety of activities catering to the many interests of our students. \n\nCharacter education, through the emphasis of specific traits and the development of Mentschlichkeit, is an integral part of both the Jewish and general studies programs, and is embedded in all aspects of school life.\n\nBialik has made a commitment to equipping all classrooms with technology for 21st century learning.  All Kindergarten classrooms have Smartboards.  This allows the children to use interactive computer technology right from the start of their schooling.  In addition, the Smartboard allows children to learn developmentally appropriate concepts in an innovative way.  Kindergarten students also have access to a shared iPad cart.\n\nBialik Kindergarten children are happily engaged in all aspects of their learning. Bialik students are proud of their learning and demonstrate it daily!Bialik’s Senior Division is a special place where academic excellence, respect for the individual, a strong sense of community, active participation and Mentchlikheit are the cornerstones of our culture. Embedded throughout our programming is a living connection to Israel exemplified through varied activities and enhanced by Young Emissaries who provide interactive activities designed to bring the heart and spirit of Israel to our students. \n\nBialik sets high academic standards that prepare students to succeed at TanenbaumCHAT and other high schools. Students study a full general studies and Jewish studies curriculum on a rotary timetable, with specialists in the different subjects areas (science, math, art, Jewish history, Hebrew, etc.). \n\nStudents participate in a rich array of co-curricular programming. All students belong to one of four Houses named after Universities in Israel. Through friendly inter-house competition, students from all three grade levels participate in monthly gatherings and have varied opportunities to become involved and cultivate leadership skills. Our Mechanech program provides students with a teacher advocate and a values-based curriculum covering topics that relate to Jewish ethics and current issues. \n\nAll three grades enjoy out-of-town trips designed to build a cohesive cohort while extending learning beyond the classroom. \n\nOutstanding extra-curricular programs are an important component of Senior Division life. We currently have a full range of extra-curricular sports teams. Dance group and Choir are two other avenues for involvement in school life and both these groups are invited to perform at various community events.\n\nIn Senior Division, the rich and varied curriculum and broad range of opportunities, allows students to form strong friendships and develop learning and leadership skills which provide them with an excellent foundation for life beyond elementary school', 
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
	return grade6to8ScrollView;
};
