// ファイル保管場所
var storageDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'storage');
if (! storageDir.exists()) {
    storageDir.createDirectory();
}

// ----------------------------------------------------------------
// ファイルの読み込み
// ----------------------------------------------------------------
exports.read = function read(path) {

	var file = Ti.Filesystem.getFile(storageDir.resolve(), path);

	if(file.exists()){
		return file.read();
	} else {
		return false;
	}
};

// ----------------------------------------------------------------
// ファイルの保存
// ----------------------------------------------------------------
exports.save = function save(path, data){
	console.log("data:" + data);
	if(data !== null){
		var file = Ti.Filesystem.getFile(storageDir.resolve(), path);
		file.write(data);
	}
};


// ----------------------------------------------------------------
// ファイルの削除
// ----------------------------------------------------------------
exports.remove = function remove(path){

	var file = Ti.Filesystem.getFile(storageDir.resolve(), path);

	if(file.exists()){
		return file.deleteFile();
	} else {
		return false;
	}
};
