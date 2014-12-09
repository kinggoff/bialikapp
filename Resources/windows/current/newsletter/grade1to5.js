var grades1to5Win = Ti.UI.createView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var grades1to5TableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	separatorColor:'transparent',
	top:'20dp'
});

grades1to5Win.add(Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:18,
		fontWeight:'bold'
	},
	text:'What is New BI@LIK',
	left:'15dp',
	top:'40dp'
}));

grades1to5Win.add(Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:16
	},
	text:'Issue 1, Sep 04, 2014',
	left:'15dp',
	top:'10dp'
}));

grades1to5Win.add(grades1to5TableView);

var grades1to5Config = [
	{
		title:'Sample1',
		content:'Hadouken'
	},
	{
		title:'SampSample1Sample1Samp1le1',
		content:'Hadouken2'
	},
	{
		title:'SampSample1Sample1le1',
		content:'Hadouke3'
	},
	{
		title:'SamSample1Sample1Sample1SaSamSample1Sample1Sample1Sample1ple1mple1ple1',
		content:'Hadouke4'
	},
	{
		title:'SamSample1ple1',
		content:'Hadouken5'
	},
	{
		title:'SSample1ample1',
		content:'Hadouken6'
	},
];

var grades1to5TabelData = [];

for (var i=0; i < grades1to5Config.length; i++) {
	var grades1to5 = grades1to5Config[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		height:Ti.UI.SIZE,
		layout:'vertical',
		selectedBackgroundColor:'transparent',
		bottom:'10dp'
	});
	
	row.arrowAndTitleContainer = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:Ti.UI.SIZE
	});
	
	row.arrowAndTitleContainer.arrowIcon = Ti.UI.createImageView({
		image:path+'images/icons/newsletter-right-arrow.png',
		left:'15dp',
		height:'10dp',
		width:'10dp',
		top:'4dp'
	});
	row.arrowAndTitleContainer.add(row.arrowAndTitleContainer.arrowIcon);
	
	row.arrowAndTitleContainer.newsletterTitle = Ti.UI.createLabel({
		color:defaultBlueColor,
		font:{
			fontFamily:helveticafont,
			fontSize:14,
			fontWeight:'bold'
		},
		text:grades1to5.title,
		left:'35dp',
		width:'70%'
	});
	row.arrowAndTitleContainer.add(row.arrowAndTitleContainer.newsletterTitle);
	
	row.add(row.arrowAndTitleContainer);
	row.toAdd = Ti.UI.createLabel({
		text:grades1to5.content,
		left:'35dp',
		height:Ti.UI.SIZE,
		color:'#000',
		font:{
			fontFamily:helveticafont,
			fontSize:14
		},
	});
	row.toggle = false;
	
	grades1to5TabelData.push(row);
};

grades1to5TableView.setData(grades1to5TabelData);

grades1to5TableView.addEventListener('click', function(e){
	var index = e.index;
	
	if(grades1to5TabelData[index].toggle == false){
		grades1to5TabelData[index].add(grades1to5TabelData[index].toAdd);
		var t1 = Ti.UI.create2DMatrix();
			t1 = t1.rotate(90);
		var a1 = Ti.UI.createAnimation();
			a1.transform = t1;
			a1.duration = 0;
		grades1to5TabelData[index].arrowAndTitleContainer.arrowIcon.animate(a1);
		grades1to5TabelData[index].toggle = true;
	}else{
		grades1to5TabelData[index].remove(grades1to5TabelData[index].toAdd);
		var t2 = Ti.UI.create2DMatrix();
			t2 = t2.rotate(1);
		var a2 = Ti.UI.createAnimation();
			a2.transform = t2;
			a2.duration = 0;
		grades1to5TabelData[index].arrowAndTitleContainer.arrowIcon.animate(a2);
		grades1to5TabelData[index].toggle = false;
	}
});

exports.getView = function(){
	return grades1to5Win;
};
