var formatDate = require('util/formatDate');

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
	Ti.Media.showCamera({
		success: function(e) {

		}
	});
}

function addPhotoPicker() {
	Ti.Media.openPhotoGallery({
		success: function(e) {
			var blobMedia = e.media;
			checkBlobProperty(blobMedia);

			// ファイルの書き込み
			var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'image.jpeg');
			file.write(blobMedia);
		},
		cancel: function() {
		}
	});
}

// bolbについて調査
function checkBlobProperty(blobMedia){
	// The name of the API
	console.log("apiName: " + blobMedia.apiName);
	console.log("mimeType: " + blobMedia.mimeType);
	console.log("nativePath: " + blobMedia.nativePath);
	console.log("file: " + blobMedia.file);
	console.log("bubbleParent: " + blobMedia.bubbleParent);
	console.log("height: " + blobMedia.height);
	console.log("width: " + blobMedia.width);
	console.log("length: " + blobMedia.length);
	console.log("text: " + blobMedia.text);
}