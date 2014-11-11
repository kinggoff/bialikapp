exports.open = function(){
	var SchoolLifeWindow = Ti.UI.createWindow({
		backgroundImage:'images/page-bg.jpg',
		c_winName:'prospect_schoollife'
	});
	
	var SchoolLifeHeaderView = Ti.UI.createView({
		backgroundColor:'blue',
		height:'45dp',
		top:(isIOS) ? 22:0,
		backgroundGradient: {
			type:'linear',
			colors:[{color:'#02a6d2',offset:0.0},{color:'#0000d2',offset:1}],
		}
	});
	
	var SchoolLifeScrollView = Ti.UI.createScrollView({
		layout:'vertical',
		zIndex:1,
		top:(isIOS) ? '67dp':'45dp'
	});
	
	var SchoolLifeHeaderLabel = Ti.UI.createLabel({
		text:'School Life',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:18
		},
		color:'#fff'
	});
	
	var SchoolLifeMenuIcon = Ti.UI.createButton({
		left:'15dp',
		backgroundImage:path+'images/icons/menu.png',
		height:'25dp',
		width:'30dp'
	});
	
	SchoolLifeMenuIcon.addEventListener('click',function(){
		console.log('SchoolLifeMenuIcon');
		if(menuToggle){
			drawer.showDrawer();
			menuToggle = false;
		}else{
			drawer.hideDrawer();
			menuToggle = true;
		}
	});
	
	var SchoolLifeHeadingLabel = Ti.UI.createLabel({
		text:'Videos of Our School',
		color:'#03309b',
		font:{
			fontFamily:'Arial',
			fontWeight:'bold',
			fontSize:24
		},
		top:'25'+unit,
		width:'90%',
		textAlign:Ti.UI.TEXT_ALIGNMENT_LEFT
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

	for (var i=0; i<videoListConfig.length; i++){
		var item = videoListConfig[i];
		
		var row = Ti.UI.createTableViewRow({
			className:'forumEvent',
			rowIndex:i,
			///height:'100dp'
		});
		
		var title = Ti.UI.createLabel({
			text:item.title,
			font:{
				fontFamily:'Arial',
				fontSize:20
			},
			width:'55%',
			left:15,
			top:20,
			color:'#03309b',
		});
		row.add(title);
		
		var thumb = Ti.UI.createImageView({
			width:'30%',
			height:80,
			right:15,
			top:20,
			bottom:20,
			backgroundColor:'red'
		});
		row.add(thumb);
		
		SchoolLifeTableData.push(row);
	}
	
	var SchoolLifeTableView = Ti.UI.createTableView({
		top:30,
		backgroundColor:'transparent',
		data:SchoolLifeTableData,
		separatorInsets:{
			left:0
		},
		height:(100*(videoListConfig.length+((isIOS) ? 0:1)))+'dp',
		minRowHeight:'100dp'
	});
	
	SchoolLifeTableView.addEventListener('click',function(e){
		var index = e.index;
		Titanium.Platform.openURL(videoListConfig[index].url);
	});
	
	SchoolLifeHeaderView.add(SchoolLifeMenuIcon);
	SchoolLifeHeaderView.add(SchoolLifeHeaderLabel);
	
	SchoolLifeScrollView.add(SchoolLifeHeadingLabel);
	SchoolLifeScrollView.add(SchoolLifeTableView);
	
	SchoolLifeWindow.add(SchoolLifeHeaderView);
	SchoolLifeWindow.add(SchoolLifeScrollView);
	
	currentWindow = SchoolLifeWindow;
	SchoolLifeWindow.open({animated:false});
};