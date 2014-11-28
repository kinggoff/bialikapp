var feesScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

feesScrollView.add(Ti.UI.createLabel({
	text:'Tuition Information',
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

feesScrollView.add(Ti.UI.createLabel({
	text:'2013/2014 School Fees', 
	top:'15dp',
	font:{
		fontFamily:helveticafont,
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));

feesScrollView.add(Ti.UI.createLabel({
	text:'Fees include all textbooks and in-city field trips', 
	top:'15dp',
	font:{
		fontFamily:helveticafont,
		fontSize:16
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));

feesScrollView.add(Ti.UI.createLabel({
	text:'Kindergarten\t\t\t$14,025.00', 
	top:'15dp',
	font:{
		fontFamily:helveticafont,
		fontSize:16,
		fontWeight:'bold'
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));


feesScrollView.add(Ti.UI.createLabel({
	text:'Grade School (1-8)\t$14,025.00', 
	top:'0dp',
	font:{
		fontFamily:helveticafont,
		fontSize:16,
		fontWeight:'bold'
	},
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	color:defaultBlueColor,
	width:'90%'
}));

feesScrollView.add(Ti.UI.createLabel({
	text:"Bialik strives to make our school accessible to all Jewish children, regardless of the family's financial situation. We offer subsidies to eligible families from JK to grade 8, following the guidelines set by UJA Federation. If you would like further information about our subsidy program, please contact our admissions manager, Danielle Waltman, by visiting the Contact Us section of this application.", 
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
	return feesScrollView;
};
