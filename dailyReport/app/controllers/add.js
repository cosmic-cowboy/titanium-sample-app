var formatDate = require('util/formatDate');

function saveReport () {

	var mReport = Alloy.createModel("report", {
		content  : $.inputContent.value,
		date     : formatDate.format(new Date())
	});

	if(mReport.isValid()){

		mReport.save();
		$.addWin.close({
			animated : true
		});
		Alloy.Collections.report.fetch();

	} else {
		mReport.destroy();
		alert("保存できません");
	}



}