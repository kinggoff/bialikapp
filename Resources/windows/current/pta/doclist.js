var pdfListConfig = [];
var pdfListTableData = [];
for (var i=0; i<10; i++){
	var pdf = pdfListConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:'45dp'
	});
	
	row.add(Ti.UI.createLabel({
		text:'PTA PDF Doc. ' + (i+1),
		font:{
			fontFamily:helveticafont,
			fontSize:20
		},
		color:defaultBlueColor,
		left:'15dp'
	}));
	
	row.add(Ti.UI.createImageView({
		image:path+'images/icons/download.png',
		right:'15dp',
		width:'30dp',
	}));
	
	pdfListTableData.push(row);
}

var pdfListTableView = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:pdfListTableData,
	separatorColor:'#4779c4',
	separatorInsets:{
		left:0
	}
});

exports.getTable = function(){
	return pdfListTableView;
};
