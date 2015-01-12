var formatDate = require('util/formatDate');

// タイトルの設定
var title = formatDate.format(new Date(), "YYYY年MM月DD日");
$.add.title = title;
$.addWin.title = title;



// 日記を投稿する
function saveReport () {

	var mReport = Alloy.createModel("report", {
		content  : $.inputContent.value,
		date     : new Date().getTime()
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