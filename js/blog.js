var app = new Vue({
	el: "#app",
	data: {
		list: [],
		catedata: [],
	},
	mounted: function(){
		this.getList();
	},
	methods: {
		getList:function(){
				var that = this;
			$.ajax({
				'url':'http://blog.com/api/index/index',
				'type': 'get',
				'dataType': 'json',
				'data': {},
				success: function(res){
					that.list = res.data.blog_lists;
					that.catedata = res.data.classify_lists;
				}

			})
		}
	}
})