// Taking Screen Width
var screenWidth = platformWidth;

var needToChangeSize = false;


// Main Window of the Month View.
var win = Ti.UI.createView({
	zIndex:1,
	top:(isIOS) ? '82dp':'60dp'
});

// Button at the buttom side
var backButton = Ti.UI.createButton({
	bottom:'20dp',
	height:'40dp',
	width:'200dp'
});

// Previous Button - Tool Bar
var prevMonth = Ti.UI.createImageView({
	left:'15dp',
	height:'15dp',
	image:path+'images/icons/calendar-back.png'
});

// Next Button - Tool Bar
var nextMonth = Ti.UI.createImageView({
	right:'15dp',
	height:'15dp',
	image:path+'images/icons/calendar-next.png'
});

// Month Title - Tool Bar
var monthTitle = Ti.UI.createLabel({
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE,
	textAlign:'center',
	color:defaultBlueColor,
	font:{
		fontSize:24,
		fontFamily:helveticafont
	}
});

// Tool Bar
var toolBar = Ti.UI.createView({
	top:'0dp',
	//width:'322dp',
	width:String(platformWidth+unit),
	height:'60dp', //50dp tana ni ha
	backgroundColor:'transparent',
	layout:'vertical',
	
});

// Tool Bar - View which contain Title Prev. & Next Button
var toolBarTitle = Ti.UI.createView({
	top:'3dp',
	//width:'322dp',
	width:String(platformWidth+unit),
	height:'34dp'
});

toolBarTitle.add(prevMonth);
toolBarTitle.add(monthTitle);
toolBarTitle.add(nextMonth);

// Tool Bar - Day's
var toolBarDays = Ti.UI.createView({
	top:'2dp',
	//width:'322dp',
	width:String((platformWidth+5)+unit),
	height:'33dp',
	layout:'horizontal',
	left:'-1dp'
});

var eachDayWidth = platformWidth/7;

toolBarDays.sunday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Sun',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.monday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Mon',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.tuesday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Tue',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.wednesday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Wed',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.thursday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Thu',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.friday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Fri',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.saturday = Ti.UI.createLabel({
	left:'0dp',
	height:'30dp',
	text:'Sat',
	//width:'46dp',
	width:String(eachDayWidth+unit),
	textAlign:'center',
	font:{
		fontSize:12,
		fontFamily:helveticafont
	},
	color:defaultBlueColor
});

toolBarDays.add(toolBarDays.sunday);
toolBarDays.add(toolBarDays.monday);
toolBarDays.add(toolBarDays.tuesday);
toolBarDays.add(toolBarDays.wednesday);
toolBarDays.add(toolBarDays.thursday);
toolBarDays.add(toolBarDays.friday);
toolBarDays.add(toolBarDays.saturday);

// Adding Tool Bar Title View & Tool Bar Days View
toolBar.add(toolBarTitle);
toolBar.add(toolBarDays);

// Function which create day view template
dayView = function(e) {
	var label = Ti.UI.createLabel({
		current:e.current,
		//width:'46dp',
		//height:'44dp',
		width:String(eachDayWidth+unit),
		height:String(eachDayWidth+unit),
		//backgroundColor:'#FFDCDCDF',
		borderColor:'#b7cae5',
		borderWidth:0.3,
		text:e.day,
		textAlign:'center',
		color:e.color,
		font:{
			fontSize:20,
			fontFamily:helveticafont
		}
	});
	return label;
};

monthName = function(e) {
	switch(e) {
		case 0:
		e = 'January';
		break;
		case 1:
		e = 'February';
		break;
		case 2:
		e = 'March';
		break;
		case 3:
		e = 'April';
		break;
		case 4:
		e = 'May';
		break;
		case 5:
		e = 'June';
		break;
		case 6:
		e = 'July';
		break;
		case 7:
		e = 'August';
		break;
		case 8:
		e = 'September';
		break;
		case 9:
		e = 'October';
		break;
		case 10:
		e = 'November';
		break;
		case 11:
		e = 'December';
		break;
	};
	return e;
};

// Calendar Main Function
var calView = function(a, b, c) {
	var nameOfMonth = monthName(b);

	//create main calendar view
	var mainView = Ti.UI.createView({
		layout:'horizontal',
		//width:'322dp',
		width:String((platformWidth+5)+unit),
		height:Ti.UI.SIZE,
		top:'70dp'
	});

	//set the time
	var daysInMonth = 32 - new Date(a, b, 32).getDate();
	var dayOfMonth = new Date(a, b, c).getDate();
	var dayOfWeek = new Date(a, b, 1).getDay();
	var daysInLastMonth = 32 - new Date(a, b - 1, 32).getDate();
	var daysInNextMonth = (new Date(a, b, daysInMonth).getDay()) - 6;
	
	//set initial day number
	var dayNumber = daysInLastMonth - dayOfWeek + 1;

	//get last month's days
	for ( i = 0; i < dayOfWeek; i++) {
		mainView.add(new dayView({
			day:dayNumber,
			color:'transparent', ///THESE ARE THE OLD DAYS HUEHUE
			current:'no',
			dayOfMonth:''
		}));
		dayNumber++;
	};

	// reset day number for current month
	dayNumber = 1;

	//get this month's days
	for ( i = 0; i < daysInMonth; i++) {
		var newDay = new dayView({
			day:dayNumber,
			color:defaultBlueColor, ///THESE ARE THE PRESENT DAYS DUHR
			current:'yes',
			dayOfMonth:dayOfMonth
		});
		mainView.add(newDay);
		if (newDay.text == dayOfMonth) {
			newDay.color = defaultBlueColor;
			// newDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
			newDay.backgroundColor = '#b7cae5';
			var oldDay = newDay;
		}
		dayNumber++;
	};
	dayNumber = 1;

//get remaining month's days
	for ( i = 0; i > daysInNextMonth; i--) {
		mainView.add(new dayView({
			day:dayNumber,
			color:'transparent', ///THESE ARE THE NEXT MONTH  DAYS HUEHUE
			current:'no',
			dayOfMonth:''
		}));
		dayNumber++;
	};
	
	// this is the new "clicker" function, although it doesn't have a name anymore, it just is.
	mainView.addEventListener('click', function(e) {
		if (e.source.current == 'yes') {
			
			// reset last day selected
			if (oldDay.text == dayOfMonth) {
				oldDay.color = defaultBlueColor;
				// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday.png';
				oldDay.backgroundColor = '#b7cae5';
			}else{
				oldDay.color = defaultBlueColor;
				// oldDay.backgroundImage='../libraries/calendar/pngs/monthdaytile-Decoded.png';
				oldDay.backgroundColor = 'transparent';
			}
			oldDay.backgroundPaddingLeft = '0dp';
			oldDay.backgroundPaddingBottom = '0dp';
			
			// set window title with day selected, for testing purposes only
			backButton.title = nameOfMonth + ' ' + e.source.text + ', ' + a;
			
			// set characteristic of the day selected
			if (e.source.text == dayOfMonth) {
				// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytiletoday_selected.png';
				e.source.backgroundColor = defaultBlueColor;
			}else{
				// e.source.backgroundImage='../libraries/calendar/pngs/monthdaytile_selected.png';
				e.source.backgroundColor = 'black';
			}
			e.source.backgroundPaddingLeft = '1dp';
			e.source.backgroundPaddingBottom = '1dp';
			e.source.color = 'white';
			//this day becomes old :(
			oldDay = e.source;
		}
	});
	
	return mainView;
};

// what's today's date?
var setDate = new Date();
a = setDate.getFullYear();
b = setDate.getMonth();
c = setDate.getDate();

// add the three calendar views to the window for changing calendars with animation later

var prevCalendarView = null;
if (b == 0) {
	prevCalendarView = calView(a - 1, 11, c);
}else{
	prevCalendarView = calView(a, b - 1, c);
}
prevCalendarView.left = (screenWidth * -1) + 'dp';

var nextCalendarView = null;
if (b == 0) {
	nextCalendarView = calView(a + 1, 0, c);
}else{
	nextCalendarView = calView(a, b + 1, c);
}
nextCalendarView.left = screenWidth + 'dp';

var thisCalendarView = calView(a, b, c);
if (needToChangeSize == false) {
	thisCalendarView.left = '-1dp';
}

monthTitle.text = monthName(b) + ' ' + a;

backButton.title = monthName(b) + ' ' + c + ', ' + a;

// add everything to the window
win.add(toolBar);
win.add(thisCalendarView);
win.add(nextCalendarView);
win.add(prevCalendarView);
win.add(backButton);

/*// yeah, open the window, why not?
win.open({
	modal:true
});*/

var slideNext = Titanium.UI.createAnimation({
	// left:'-322',
	duration:500
});

slideNext.left = (screenWidth * -1);

var slideReset = Titanium.UI.createAnimation({
	// left:'-1',
	duration:500
});

if (needToChangeSize == false) {
	slideReset.left = '-1';
}else{
	slideReset.left = ((screenWidth - 644) / 2);
}

var slidePrev = Titanium.UI.createAnimation({
	// left:'322',
	duration:500
});

slidePrev.left = screenWidth;

// Next Month Click Event
nextMonth.addEventListener('click', function() {
	if (b == 11) {
		b = 0;
		a++;
	}else{
		b++;
	}

	thisCalendarView.animate(slideNext);
	nextCalendarView.animate(slideReset);
	
	setTimeout(function() {
		thisCalendarView.left = (screenWidth * -1) + 'dp';
		if (needToChangeSize == false) {
			nextCalendarView.left = '-1dp';
		}else{
			nextCalendarView.left = ((screenWidth - 644) / 2);
		}
		prevCalendarView = thisCalendarView;
		thisCalendarView = nextCalendarView;
		if (b == 11) {
			nextCalendarView = calView(a + 1, 0, c);
		}else{
			nextCalendarView = calView(a, b + 1, c);
		}
		monthTitle.text = monthName(b) + ' ' + a;
		nextCalendarView.left = screenWidth + 'dp';
		win.add(nextCalendarView);
	}, 500);
});

// Previous Month Click Event
prevMonth.addEventListener('click', function() {
	if (b == 0) {
		b = 11;
		a--;
		}else{
		b--;
	}
	thisCalendarView.animate(slidePrev);
	prevCalendarView.animate(slideReset);
	setTimeout(function() {
	thisCalendarView.left = screenWidth + 'dp';
	if (needToChangeSize == false) {
		prevCalendarView.left = '-1dp';
	}else{
		prevCalendarView.left = ((screenWidth - 644) / 2);
	}
	nextCalendarView = thisCalendarView;
	thisCalendarView = prevCalendarView;
	if (b == 0) {
		prevCalendarView = calView(a - 1, 11, c);
	}else{
		prevCalendarView = calView(a, b - 1, c);
	}
	monthTitle.text = monthName(b) + ' ' + a;
	prevCalendarView.left = (screenWidth * -1) + 'dp';
	win.add(prevCalendarView);
	}, 500);
});

exports.getCalendar = function(){
	return win;
};
