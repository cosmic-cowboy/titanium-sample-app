// 日記を新規作成する
function addReport (argument) {
	var win = Alloy.createController('add').getView();
	win.open();
}

Alloy.Collections.report.fetch();

$.index.open();
