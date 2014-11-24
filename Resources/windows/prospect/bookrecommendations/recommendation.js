var recommendationScrollView = Ti.UI.createScrollView({
	layout:'vertical',
	zIndex:1,
	top:(isIOS) ? '62dp':'40dp'
});

// heading Label
var headingContainerView = Ti.UI.createView({
	layout:'horizontal',
	left:0,
	height:Ti.UI.SIZE
});

var month = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:20,
		fontWeight:'bold'
	},
	text:'Month',
	left:'20dp',
	top:'20dp'
});
headingContainerView.add(month);

var colon = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:20,
		fontWeight:'bold'
	},
	text:':',
	left:'0dp',
	top:'20dp'
});
headingContainerView.add(colon);

var bookTitle = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:20
	},
	text:'Some Title',
	left:'5dp',
	top:'20dp'
});
headingContainerView.add(bookTitle);
// heading label end

// init containers and add sub containers
var imageAndInfoContainer = Ti.UI.createView({
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	layout:'horizontal',
	top:'20dp'
});

var imageContainer = Ti.UI.createImageView({
	height:'120dp',
	width:'120dp',
	borderColor:defaultBlueColor,
	borderWidth:.5,
	left:'25dp'
});

var infoContainer = Ti.UI.createView({
	layout:'vertical',
	height:Ti.UI.SIZE,
	left:'20dp'
});

imageAndInfoContainer.add(imageContainer);
imageAndInfoContainer.add(infoContainer);
// init containers and add sub containers end

// init resource sub containers
var resourceContainer = Ti.UI.createView({
	layout:'horizontal',
	left:0,
	height:Ti.UI.SIZE
});

var Resource = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:12,
		fontWeight:'bold'
	},
	text:'Resource:',
});

var resourceTitle = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:12
	},
	text:'iBooks',
	left:'5dp'
});

resourceContainer.add(Resource);
resourceContainer.add(resourceTitle);

infoContainer.add(resourceContainer);
// init resource sub containers end

// init published date sub containers
var publishedDateContainer = Ti.UI.createView({
	layout:'horizontal',
	left:0,
	height:Ti.UI.SIZE
});

var Published = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:12,
		fontWeight:'bold'
	},
	text:'Published:',
});

var publishedDate = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:12
	},
	text:'1999',
	left:'5dp',
});

publishedDateContainer.add(Published);
publishedDateContainer.add(publishedDate);

infoContainer.add(publishedDateContainer);
// init published date sub containers end

// init price sub container
var priceContainer = Ti.UI.createView({
	layout:'horizontal',
	left:0,
	height:Ti.UI.SIZE,
});

var price = Ti.UI.createLabel({
	color:defaultBlueColor,
	font:{
		fontFamily:helveticafont, 
		fontSize:12,
		fontWeight:'bold'
	},
	text:'$19.99 CDN',
	top:'15dp'
});

priceContainer.add(price);

infoContainer.add(priceContainer);
// init price sub container end

//init purchase button
var purchaseBookContainer = Ti.UI.createView({
	top:'20dp',
	height:'40dp',
	width:'85%',
	borderColor:defaultBlueColor,
	borderWidth:.5,
	borderRadius:10,
	backgroundGradient: {
		type:'linear',
		colors:[
			{color:'#fff',offset:0.00},
			{color:'#d9f1fc',offset:0.90},
			{color:'#fff',offset:1.00}
		],
	},
});

var purchaseBook = Ti.UI.createView({
	layout:'horizontal',
	width:Ti.UI.SIZE,
	height:Ti.UI.SIZE
});

purchaseBook.add(Ti.UI.createLabel({
	font:{
		fontSize:20,
		fontFamily:helveticafont,
		fontWeight:'bold'
	},
	color:defaultBlueColor,
	text:'Purchase',
	left:'5dp'
}));
purchaseBookContainer.add(purchaseBook);
//viewmount Button end

//additional info container
var addtionalInfo = Ti.UI.createLabel({
	width:'85%',
	height:Ti.UI.SIZE,
	font:{
		fontSize:14,
		fontFamily:helveticafont,
	},
	top:'30dp',
	color:defaultBlueColor,
	text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae felis gravida, aliquam est sed, convallis leo. Nunc eu mauris laoreet orci sollicitudin rutrum. Donec malesuada dictum congue.',
});
//additional info container end

// add them views
recommendationScrollView.add(headingContainerView);
recommendationScrollView.add(imageAndInfoContainer);
recommendationScrollView.add(purchaseBookContainer);
recommendationScrollView.add(addtionalInfo);

exports.getView = function(){
	return recommendationScrollView;
};