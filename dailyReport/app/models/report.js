// 日記モデルの定義
exports.definition = {
	config : {
		columns : {
			"content" : "text",
			"date" : "text",
			"content_id": "INTEGER PRIMARY KEY AUTOINCREMENT"
		},
		adapter : {
			type : "sql",
			collection_name : "report",
			idAttribute: "content_id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// 妥当性検査
			validate : function (attr) {
				if((attr.content).length <= 0){
					return "Error : content is not input.";
				}
			}
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// 並び替え
			comparator : function (post) {
				return post.get('date');
			}
		});

		return Collection;
	}
};