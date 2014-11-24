var prospectRecommendationsScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var infoLabel = Ti.UI.createLabel({
	text:'In quis nunc id purus eleifend rutrum. Nulla facilisi. Vestibulum pellentesqueaccumsan.',
	width:'90%',
	top:'25dp',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:12
	}
});

var bookListConfig = [
	{
		month:'May',
		title:'Spring Has Sprung'
	},
	{
		month:'April',
		title:'Dancing with Butterflies'
	},
	{
		month:'March',
		title:'Hot Dog Janga'
	},
	{
		month:'Feb',
		title:'Blow Torch Sculptures'
	},
	{
		month:'Jan',
		title:'I want to be a Pirate'
	},
	{
		month:'Dec',
		title:'Rotten Teeth'
	},
	{
		month:'Nov',
		title:'My left foot'
	},
	{
		month:'Oct',
		title:'Halloween Pranks'
	},
	{
		month:'Sept',
		title:'Chocolate Shoe Gew'
	},
];

var bookListTableData = [];

for (var i=0; i<bookListConfig.length; i++){
	var item = bookListConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:'40dp',
		layout:'horizontal'
	});
	
	var month = Ti.UI.createLabel({
		color:defaultBlueColor,
		font:{
			fontFamily:helveticafont, 
			fontSize:20,
			fontWeight:'bold'
		},
		text:item.month,
		left:'20dp',
		top:'8dp'
	});
	row.add(month);
	
	var colon = Ti.UI.createLabel({
		color:defaultBlueColor,
		font:{
			fontFamily:helveticafont, 
			fontSize:20,
			fontWeight:'bold'
		},
		text:':',
		left:'0dp',
		top:'8dp'
	});
	row.add(colon);
	
	var bookTitle = Ti.UI.createLabel({
		color:defaultBlueColor,
		font:{
			fontFamily:helveticafont, 
			fontSize:20
		},
		text:item.title,
		left:'5dp',
		top:'8dp'
	});
	row.add(bookTitle);
	
	bookListTableData.push(row);
}

var bookRecommendationTableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:bookListTableData,
	separatorColor:'#4779c4',
	separatorInsets:{
		left:0
	},
	top:'25dp'
});

bookRecommendationTableView.addEventListener('click',function(e){
	var index = e.index;
	var _view = require('windows/prospect/bookrecommendations/recommendation');
	
	if(mainWindowMirror.length > 2){
		mainWindow.remove(mainWindowMirror[mainWindowMirror.length-1]);
		mainWindowMirror.splice(-1);
	}
	
	mainWindow.add(_view.getView());
	mainWindowMirror.push(_view.getView());
	
	bialik_app.addBackButton('windows/prospect/bookrecommendations', true);
	
	_view = null;
});

prospectRecommendationsScrollView.add(infoLabel);
prospectRecommendationsScrollView.add(bookRecommendationTableView);

exports.getView = function(){
	return prospectRecommendationsScrollView;
};