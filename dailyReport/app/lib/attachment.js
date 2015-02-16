
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
Attachment.prototype.getPhoto = function getPhoto($){
	var self = this;
	Ti.Media.openPhotoGallery({
		success: function(e) {
			// TODO とりあえずサムネイル表示のため
			self.savePhoto = e.media;
			addPhoto($, self.savePhoto);

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


function addPhoto($, photo){

	var image = Ti.UI.createImageView($.createStyle({
		classes: [ 'a-photo' ],
		image: photo
	}));
	var container = Ti.UI.createScrollView($.createStyle({
		classes: [ 'a-photo-container' ],
	}));
	var frame = Ti.UI.createScrollView($.createStyle({
		classes: [ 'a-photo-frame' ],
	}));
	// var close = Ti.UI.createButton($.createStyle({
	// 	classes: [ 'a-photo-close' ],
	// }));
	// close.addEventListener('click', function() {
	// 	removePhoto(photo, frame);
	// });
	container.add(image);
	frame.add(container);
	// frame.add(close);
	console.log(frame);

	$.photoGallery.add(frame);
}
