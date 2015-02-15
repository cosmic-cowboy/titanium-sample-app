var formatDate = require('util/formatDate');
var storage    = require('storage');
var Attachment = require('attachment');

// タイトルの設定
var title = formatDate.format(new Date(), "YYYY年MM月DD日");
$.add.title = title;
$.addWin.title = title;

// ファイルパス
var filePath = "";

var attach = Attachment.create();

$.add.addEventListener('open', function() {
	// テキストエリアにフォーカス
	$.inputContent.focus();
});

// 日記を投稿する
function saveReport () {

	var now = new Date().getTime();
	var filePath = "";

	var photo = attach.photo();
	if(photo){
		filePath = now + photo.mimeType.replace(/\//,'.');
		storage.save(filePath, photo);
	}

	var mReport = Alloy.createModel("report", {
		content  : $.inputContent.value,
		date     : now,
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
	attach.takePhoto();
}

function addPhotoPicker() {
	attach.getPhoto();
}
