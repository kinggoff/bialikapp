var proespectSchoolLifeScrollView = Ti.UI.createView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var SchoolLifeHeaderView = Ti.UI.createView({
	top:(isIOS) ? '72dp':'50dp',
	height:'100dp'
});

var SchoolLifeHeadingLabel = Ti.UI.createLabel({
	text:'Videos of Our School',
	color:'#03309b',
	font:{
		fontFamily:helveticafont,
		fontWeight:'bold',
		fontSize:24
	},
	width:'90%',
	textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT,
	zIndex:-1,
});

var videoListConfig = [
	{
		title:'Happy Chanukah from the Bialik Family 2013',
		url:'http://www.youtube.com',
	},
	{
		title:'Student Reflections',
		url:'http://www.facebook.com',
	},
	{
		title:'Bialik@50',
		url:'http://www.yahoo.com',
	},
	{
		title:'Bialik Hebrew Day School',
		url:'http://www.9gag.com',
	},
	{
		title:'At Bialik, the Soul of People is Forged Through Jewish Learning',
		url:'http://www.youtube.com',
	},
	{
		title:"At Bialik, you Don't have to Related to Feel Like Family",
		url:'http://www.youtube.com',
	},
	{
		title:"At Bialik, We're Proud of Our Students Who Make the World a Better Place",
		url:'http://www.youtube.com',
	},
	{
		title:'In Senior Division a Bialike "House" Becomes a Home',
		url:'http://www.youtube.com',
	},
	{
		title:'At Bialik, Each Day Packs a Punch',
		url:'http://www.youtube.com',
	},
	{
		title:'At Bialik, Learning is Outside the Box',
		url:'http://www.youtube.com',
	},
	{
		title:'Welcome, Bruchim Habaim, Bienvenue, Baruch Habaah',
		url:'http://www.youtube.com',
	},
	{
		title:'At Bialik, Students Hold the 21st Century in the Palms of Their Hands',
		url:'http://www.youtube.com',
	},
	{
		title:'At Bialik, Israel is Close Enough to Touch and Feel',
		url:'http://www.youtube.com',
	},
	{
		title:'At Bialik, Classrooms Are More Than Just Desks & Chairs',
		url:'http://www.youtube.com',
	},
];

var SchoolLifeTableData = [];
//SchoolLifeTableData.push(SchoolLifeHeaderView);

for (var i=0; i<videoListConfig.length; i++){
	var item = videoListConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:(isBB) ? Ti.UI.SIZE:null,
		zIndex:-1,
	});
	
	var title = Ti.UI.createLabel({
		text:item.title,
		font:{
			fontFamily:helveticafont,
			fontSize:20
		},
		width:'55%',
		left:'15dp',
		top:'20dp',
		color:'#03309b',
	});
	row.add(title);
	
	var thumb = Ti.UI.createImageView({
		width:'30%',
		height:'80dp',
		right:'15dp',
		top:'25dp',
		bottom:'20dp',
		backgroundColor:'red'
	});
	row.add(thumb);
	
	SchoolLifeTableData.push(row);
}

var SchoolLifeTableView = Ti.UI.createTableView({
	/*
	top:(isIOS) ? '62dp':'40dp',
	//top:'100dp',
	zIndex:-1,
	backgroundColor:'transparent',
	data:SchoolLifeTableData,
	separatorInsets:{
		left:0
	},
	//height:'100dp',
	minRowHeight:'100dp'
	*/
	top:(isIOS) ? '62dp':'40dp',
	left: 0,
	zIndex:0,
	width: String(platformWidth+unit),
	height: String(platformHeight+unit),
	data:SchoolLifeTableData,
});

SchoolLifeTableView.addEventListener('click',function(e){
	var index = e.index;
	Titanium.Platform.openURL(videoListConfig[index].url);
});


proespectSchoolLifeScrollView.add(SchoolLifeHeadingLabel);
proespectSchoolLifeScrollView.add(SchoolLifeTableView);

exports.getView = function(){
	return SchoolLifeTableView;
};