var prospectListContainerView = Ti.UI.createView({
	width:'90%',
	height:Ti.UI.SIZE,
	zIndex:5,
	top:0
});

prospectListContainerView.add(Ti.UI.createLabel({
	text:'Prospective Parents',
	font:{
		fontFamily:'Arial',
		fontSize:22
	},
	color:'#3862b7',
	left:0,
	top:'20'+unit
}));

prospectListContainerView.add(Ti.UI.createImageView({
	image:path+'images/menu-logo.png',
	right:0,
	top:'15'+unit,
	width:'60'+unit
}));

var prospectScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	top:'70'+unit,
	//backgroundColor:'green'
});

var prospectConfig = [
	{
		name:'Home',
		icon:path+'images/icons/home.png',
		win:''
	},
	{
		name:'Welcome to Our School',
		icon:path+'images/icons/welcome.png',
		win:''
	},
	{
		name:'School Life',
		icon:path+'images/icons/school-life.png',
		win:''
	},
	{
		name:'Application & Info',
		icon:path+'images/icons/application-info.png',
		win:''
	},
	{
		name:'Book Recommendations',
		icon:path+'images/icons/book-recommendations.png',
		win:''
	},
	{
		name:'Facebook',
		icon:path+'images/icons/facebook.png',
		win:''
	},
	{
		name:'Contact',
		icon:path+'images/icons/contact-current.png',
		win:''
	},
	{
		name:'Settings',
		icon:path+'images/icons/settings.png',
		win:''
	},
];

var tableData = [];

for (var i=0; i<prospectConfig.length; i++){
	var item = prospectConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:50
	});
	
	var prospectMenuIcon = Ti.UI.createImageView({
		image:item.icon,
		left:0,
		width:30,
		height:30
	});
	row.add(prospectMenuIcon);
	
	var labelUserName = Ti.UI.createLabel({
		color:'#fff',
		font:{fontFamily:'Arial', fontSize:20},
		text:item.name,
		left:40,
	});
	row.add(labelUserName);
	
	tableData.push(row);
}

var tableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:tableData,
	separatorInsets:{
		left:0
	}
});

prospectScrollView.add(tableView);

prospectListContainerView.add(prospectScrollView);

exports.setActive = function(){
	drawer.setDrawerList(prospectListContainerView);
	console.log('prospectListContainerView activated');
};

tableView.addEventListener('click',function(e){
	
});
