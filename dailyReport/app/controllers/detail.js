var formatDate = require('util/formatDate');
var dialogs = require("alloy/dialogs");

var args = arguments[0] || {};

// 画像の表示
var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'image.jpeg');
var image = file.read();
if (image) $.photo.setImage(image);

// 日記を削除する
function deleteReport () {
	dialogs.confirm({
		title : "削除確認",
		message : "この日記を削除してもよろしいですか？",
		yes : "削除",
		no : "しない",

		callback : function(){

			// 削除する日記の情報を取得
			var modelReport = Alloy.Collections.report.where({
				content_id : args.e_id
			})[0];

			Alloy.Collections.report.remove(modelReport);
			modelReport.destroy();

			$.detailWin.close({
				animated : true
			});
		}
	});
}


// 引数をタイトルに変換
var title = formatDate.format(new Date(Number(args.date)), "YYYY年MM月DD日");
$.detailWin.title = title;
// 引数をページ要素に反映
$.content.text = args.content;

