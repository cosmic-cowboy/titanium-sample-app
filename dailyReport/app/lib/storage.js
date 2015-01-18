

// ファイル保管場所
var basedir = Ti.Filesystem.applicationDataDirectory.replace(/\/*$/, "/storage/");
// 保存する写真（最初は一枚だけ）
var savePhoto;

function Storage() {
	this.dir = new Date().getTime() + 'image.jpeg';
	console.debug(this.dir);
}

// ----------------------------------------------------------------
// 写真（ファイル）の取得
// ----------------------------------------------------------------
// デバイスのカメラから写真を取得
Storage.prototype.takePhoto = function takePhoto(){
	Ti.Media.showCamera({
		success: function(e) {
			addPhoto(e.media);
		},
		cancel: function() {
		}
	});
};

// デバイスのフォトギャラリーから写真を取得
Storage.prototype.getPhoto = function getPhoto(){
	Ti.Media.openPhotoGallery({
		success: function(e) {
			addPhoto(e.media);
		},
		cancel: function() {
		}
	});
};

// ----------------------------------------------------------------
// 写真（ファイル）の保存
// ----------------------------------------------------------------
Storage.prototype.savePhoto = function savePhoto(){
	if(savePhoto !== null){
		var file = Ti.Filesystem.getFile(basedir, this.dir);
		file.write(savePhoto);
	}
};

// ----------------------------------------------------------------
// プライベートな処理
// ----------------------------------------------------------------
function addPhoto (photo) {
	savePhoto = photo;
	// imageを投稿画面に表示
	
	// ファイルパスを返す
	return this.dir;
}



// ----------------------------------------------------------------
// ストレージオブジェクトの生成
// ----------------------------------------------------------------
exports.create = function create () {
	var storage = new Storage();
	return storage;
};

// ----------------------------------------------------------------
// ファイルの読み込み
// ----------------------------------------------------------------
exports.readPhoto = function readPhoto(path) {
	var file = Ti.Filesystem.getFile(basedir, path);
	if(file.exists()){
		return file.read();
	} else {
		return false;
	}
};