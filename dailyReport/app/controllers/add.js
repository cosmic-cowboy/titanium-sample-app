var formatDate = require('util/formatDate');
var storage = require('storage');

// タイトルの設定
var title = formatDate.format(new Date(), "YYYY年MM月DD日");
$.add.title = title;
$.addWin.title = title;

// ファイルパス
var filePath = "";

$.add.addEventListener('open', function() {
	// テキストエリアにフォーカス
	$.inputContent.focus();
});

// 日記を投稿する
function saveReport () {

	var mReport = Alloy.createModel("report", {
		content  : $.inputContent.value,
		date     : new Date().getTime(),
		filePath : filePath
	});

	if(mReport.isValid()){

		mReport.save();
		$.add.close({
			animated : true
		});
		Alloy.Collections.report.fetch();

	} else {
		mReport.destroy();
		alert("保存できません");
	}
}

// 投稿をキャンセル
function close () {
	$.add.close();
}

// ----------------------------------------------------------------
// 画像添付
// ----------------------------------------------------------------
function showCamera() {
	var str = storage.create();
	filePath = str.takePhoto();
}

function addPhotoPicker() {
	var str = storage.create();
	filePath = str.getPhoto();
}
