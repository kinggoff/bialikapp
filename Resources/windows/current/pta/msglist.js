var msgListConfig = [];
var msgListTableData = [];
for (var i=0; i<10; i++){
	var pdf = msgListConfig[i];
	
	var row = Ti.UI.createTableViewRow({
		className:'forumEvent',
		rowIndex:i,
		height:'45dp'
	});
	
	row.add(Ti.UI.createLabel({
		text:'PTA MSG Doc. ' + (i+1),
		font:{
			fontFamily:helveticafont,
			fontSize:20
		},
		color:defaultBlueColor,
		left:'15dp'
	}));
	
	msgListTableData.push(row);
}

var msgListTableData = Ti.UI.createTableView({
	backgroundColor:'transparent',
	data:msgListTableData,
	separatorColor:'#4779c4',
	separatorInsets:{
		left:0
	}
});

exports.getTable = function(){
	return msgListTableData;
};
