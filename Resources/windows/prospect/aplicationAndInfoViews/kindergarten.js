var kindergartenScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

kindergartenScrollView.add(Ti.UI.createLabel({
	text:'Bialik Hebrew Day School Kindergarten',
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

kindergartenScrollView.add(Ti.UI.createLabel({
	text:'The Kindergarten at Bialik Hebrew Day School is a very special place.  The Kindergarten program offers children an exciting first formal learning experience.  The early years are an important time for learning and lay the foundation for academic, Jewish and social development.  The Kindergarten program at Bialik recognizes that each child is a unique individual and promotes developmentally appropriate programming and play that is geared to meet the varied needs of all Bialik students.\n\nThe Bialik Kindergarten program follows the curriculum guidelines outlined by the Ministry of Education and Training.  The Kindergarten curriculum integrates learning opportunities from five programmatic areas: Language, Mathematics, Science and Technology, Personal and Social Development and The Arts. \n\nJewish learning is an essential part of the Bialik Kindergarten experience.  Children learn about Jewish celebrations and traditions through songs, stories, poetry and play.  Emerging Hebrew language skills are developed through Chalav U’Dvash. This unique Hebrew immersion program exposes students to basic conversational Hebrew and vocabulary.  Puppets, games and songs engage children in second language instruction. \n\nBialik has made a commitment to equipping all classrooms with technology for 21st century learning.  All Kindergarten classrooms have Smartboards.  This allows the children to use interactive computer technology right from the start of their schooling.  In addition, the Smartboard allows children to learn developmentally appropriate concepts in an innovative way.  Kindergarten students also have access to a shared iPad cart.\n\nBialik Kindergarten children are happily engaged in all aspects of their learning. Bialik students are proud of their learning and demonstrate it daily!',
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
	return kindergartenScrollView;
};
