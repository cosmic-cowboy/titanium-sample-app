var formatDate = require('util/formatDate');
var storage    = require('storage');


// 日記を新規作成する
function addReport (argument) {
	var win = Alloy.createController('add').getView();
	win.open();
}

// 日記の詳細ページへ
function detailReport (element) {
	
	// タップされた日記の情報を取得
	var modelReport = Alloy.Collections.report.where({
		content_id : element.itemId
	})[0];

	// 取得した情報を詳細ページに渡すための引数を生成
	var arg = {
		e_id : element.itemId,
		content : modelReport.get('content'),
		date : modelReport.get('date'),
		filePath : modelReport.get('filePath')
	};
	// 詳細ページの作成
	var detailWin = Alloy.createController("detail", arg).getView();
	$.index.openWindow(detailWin);

}

// レポートの表示項目を編集する
function transData(model) {
	transform = model.toJSON();
	transform.formatDate = formatDate.format(new Date(Number(transform.date)), "YYYY年MM月DD日");
	if("transform.filePath:" + transform.filePath){
		transform.photo = storage.read(transform.filePath);
	}
	return transform;
}

Alloy.Collections.report.fetch();

$.index.open();
