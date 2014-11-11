var currentListContainerView = Ti.UI.createView({
	width:'90%',
	height:Ti.UI.SIZE,
	zIndex:5,
	top:0
});

currentListContainerView.add(Ti.UI.createLabel({
	text:'Current Parents',
	font:{
		fontFamily:'Arial',
		fontSize:20
	},
	color:'#4779c4',
	left:0,
	top:'30dp'
}));

currentListContainerView.add(Ti.UI.createImageView({
	image:path+'images/bialik_app_icon.png',
	right:0,
	top:'18dp',
	width:'50dp'
}));

var currentScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	top:'70dp'
});

var currentConfig = [
	{
		name:'Home',
		icon:path+'images/icons/home.png',
		win:''
	},
	{
		name:'Welcome to Our School',
		icon:path+'images/icons/welcome.png',
		win:'welcometoourschool'
	},
	{
		name:'School Life',
		icon:path+'images/icons/school-life.png',
		win:'schoollife'
	},
	{
		name:'Application & Info',
		icon:path+'images/icons/application-info.png',
		win:'appandinfo'
	},
	{
		name:'Book Recommendations',
		icon:path+'images/icons/book-recommendations.png',
		win:'bookrecommendations'
	},
	{
		name:'Facebook',
		icon:path+'images/icons/facebook.png',
		win:''
	},
	{
		name:'Contact',
		icon:path+'images/icons/contact-current.png',
		win:'contact'
	},
	{
		name:'Settings',
		icon:path+'images/icons/settings.png',
		win:'settings'
	},
];

var currentTableData = [];

for (var i=0; i<currentConfig.length; i++){
	var item = currentConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:'40dp'
	});
	
	var currentMenuIcon = Ti.UI.createImageView({
		image:item.icon,
		left:0,
		width:'30dp',
		height:'30dp'
	});
	row.add(currentMenuIcon);
	
	var labelUserName = Ti.UI.createLabel({
		color:'#fff',
		font:{fontFamily:'Arial', fontSize:20},
		text:item.name,
		left:40,
	});
	row.add(labelUserName);
	
	currentTableData.push(row);
}

var currentTableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:currentTableData,
	separatorColor:'#4779c4',
	separatorInsets:{
		left:0
	},
	height:(40*(currentConfig.length+((isIOS) ? 0:1)))+'dp'
});

currentTableView.addEventListener('click',function(e){
	var index = e.index;
	if(index == 5){
		Titanium.Platform.openURL('http://www.facebook.com/bialik');
	}else{
		var winToOpen = require('windows/prospect/'+prospectConfig[index].win);
	}
});

currentScrollView.add(currentTableView);
currentListContainerView.add(currentScrollView);

exports.getList = function(){
	return currentListContainerView;
};
