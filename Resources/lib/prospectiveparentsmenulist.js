var prospectListContainerView = Ti.UI.createView({
	width:'90%',
	height:Ti.UI.SIZE,
	zIndex:5,
	top:0
});

prospectListContainerView.add(Ti.UI.createLabel({
	text:'Prospective Parents',
	font:{
		fontFamily:helveticafont,
		fontSize:20
	},
	color:'#4779c4',
	left:0,
	top:'30dp'
}));

prospectListContainerView.add(Ti.UI.createImageView({
	image:path+'images/bialik_app_icon.png',
	right:0,
	top:'18dp',
	width:'50dp'
}));

var prospectScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	top:'70dp'
});

var prospectConfig = [
	{
		name:'Home',
		icon:path+'images/icons/home.png',
		win:'home'
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

var tableData = [];

for (var i=0; i<prospectConfig.length; i++){
	var item = prospectConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:'40dp'
	});
	
	var prospectMenuIcon = Ti.UI.createImageView({
		image:item.icon,
		left:0,
		width:'30dp',
		height:'30dp'
	});
	row.add(prospectMenuIcon);
	
	var labelUserName = Ti.UI.createLabel({
		color:'#fff',
		font:{
			fontFamily:helveticafont, 
			fontSize:20
		},
		text:item.name,
		left:40,
	});
	row.add(labelUserName);
	
	tableData.push(row);
}

var tableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:tableData,
	separatorColor:'#4779c4',
	separatorInsets:{
		left:0
	},
	height:(40*(prospectConfig.length+((isIOS) ? 0:1)))+'dp'
});

tableView.addEventListener('click',function(e){
	var index = e.index;
	if(index == 5){
		Titanium.Platform.openURL('http://www.facebook.com/bialik');
	}else{
		var _view = require('windows/prospect/'+prospectConfig[index].win);
		if(mainWindow.children.length > 2){
			mainWindow.remove(mainWindow.children[mainWindow.children.length-1]);
		}
		bialik_app.updateTitle(prospectConfig[index].name);
		mainWindow.add(_view.getView());
		drawer.hideDrawer();
		menuToggle = true;
	}
});

prospectScrollView.add(tableView);
prospectListContainerView.add(prospectScrollView);

exports.getList = function(){
	return prospectListContainerView;
};
