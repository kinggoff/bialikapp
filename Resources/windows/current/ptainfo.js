var ptaInfoView = Ti.UI.createView({
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

var clickOnPDFLabel = Ti.UI.createLabel({
	text:'Click on a PDF document below to view.',
	top:'20dp',
	font:{
		fontFamily:helveticafont,
		fontSize:12
	},
	color:defaultBlueColor,
	left:'20dp'
});

var view1 = require('windows/current/pta/doclist');
var view2 = require('windows/current/pta/msglist');

var scrollableView = Ti.UI.createScrollableView({
	views:[
		view1.getTable(),
		view2.getTable()
	],
	showPagingControl:false,
	bottom:'45dp',
	height:'80%',
	scrollingEnabled:false
});

var controls = Ti.UI.createView({
	bottom:0,
	height:'45dp',
	layout:'horizontal'
});

controls.PDFList = Ti.UI.createButton({
	title:'Document List',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:20,
		fontWeight:'Bold'
	},
	backgroundColor:'#c2d0e3',
	width:'49%',
	height:'100%'
});

controls.MSGList = Ti.UI.createButton({
	title:'Messages',
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont,
		fontSize:18,
		fontWeight:'Bold'
	},
	backgroundColor:'transparent',
	width:'49%',
	height:'100%'
});

controls.divider = Ti.UI.createView({
	width:'0.2%',
	height:'45dp',
	backgroundColor:defaultBlueColor
});

controls.PDFList.addEventListener('click',function(){
	scrollableView.setCurrentPage(0);
	controls.PDFList.setBackgroundColor('#c2d0e3');
	controls.MSGList.setBackgroundColor('transparent');
});

controls.MSGList.addEventListener('click',function(){
	scrollableView.setCurrentPage(1);
	controls.MSGList.setBackgroundColor('#c2d0e3');
	controls.PDFList.setBackgroundColor('transparent');
});

controls.add(controls.PDFList);
controls.add(controls.divider);
controls.add(controls.MSGList);

ptaInfoView.add(clickOnPDFLabel);
ptaInfoView.add(scrollableView);
ptaInfoView.add(controls);

exports.getView = function(){
	return ptaInfoView;
};
