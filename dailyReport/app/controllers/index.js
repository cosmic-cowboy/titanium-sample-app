var formatDate = require('util/formatDate');

// 日記を新規作成する
function addReport (argument) {
	var win = Alloy.createController('add').getView();
	win.open();
}

// レポートの表示項目を編集する
function transData(model) {
	transform = model.toJSON();
	transform.formatDate = formatDate.format(new Date(Number(transform.date)), "YYYY年MM月DD日");
	return transform;
}

Alloy.Collections.report.fetch();

$.index.open();
