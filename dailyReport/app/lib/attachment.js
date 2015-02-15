
// ----------------------------------------------------------------
//  コンストラクタ
// ----------------------------------------------------------------
var Attachment = function Attachment() {
	// 保存する写真（最初は一枚だけ）
	this.savePhoto;	
}

// ----------------------------------------------------------------
//  写真（ファイル）の取得
// ----------------------------------------------------------------
// デバイスのカメラから写真を取得
Attachment.prototype.takePhoto = function takePhoto(){
	var self = this;
	Ti.Media.showCamera({
		success: function(e) {
			self.savePhoto = e.media;
		},
		cancel: function() {
		}
	});
};

// デバイスのフォトギャラリーから写真を取得
Attachment.prototype.getPhoto = function getPhoto(){
	var self = this;
	Ti.Media.openPhotoGallery({
		success: function(e) {
			self.savePhoto = e.media;
		},
		cancel: function() {
		}
	});
};

//  写真
Attachment.prototype.photo = function photo () {

	return this.savePhoto;
};

// ----------------------------------------------------------------
//  添付オブジェクトの生成
// ----------------------------------------------------------------
exports.create = function create () {
	var attachment = new Attachment();
	return attachment;
};

