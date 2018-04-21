   function getQuery(){
                var str = (location.search.length > 0 ? location.search.substring(1) : ''),
                args = {},
                items = str.length ? str.split("&") : [],
                item = null,
                name = null,
                value = null;
                for (i=0; i < items.length; i++){
                    item = items[i].split("=");
                    name = decodeURIComponent(item[0]);
                    value = decodeURIComponent(item[1]);
                    if (name.length) {
                        args[name] = value;
                    }
                }
                return args;
            }
var app = new Vue({
	el: "#app",
	data: {
		list: {},
		isShow: false,
		isShowarticel : true,
		contentList: [],
	},
	mounted: function(){
		this.getList();
	},
	methods: {
		getList:function(){
			var that = this;
			var blogId = window.location.search.split("=")[1];//文章id
	    	var userId = window.localStorage.getItem("user_id");//用户id
	    	console.log(userId)
            // var infoID = getQuery().id;
            // console.log(infoID)
			$.ajax({
				'url':'http://blog.com/api/blog/info',
				'type': 'get',
				'dataType': 'json',
				'data': {
                    // id: infoID,
				    id: window.location.search.split("=")[1],
				    // blog_id: blogId,
				    user_id: userId,
				},
				success: function(res){
					that.list = res.data.blog_info;
					that.contentList = res.data.related_blog;
					if(res.data.blog_info.collect_status == 0){
						alert("收藏")
					}else if(res.data.blog_info.collect_status == 1){
						alert("已收藏")	
				}else{
					alert("用户没登录")
					window.location.href = "./login.html"
				}
			},
			error:function(res){

			}

			})
		},
		clickList: function(){
			this.isShow = true;
			this.isShowarticel = false;
		},
	    aList:function(){
	    	var blogId = window.location.search.split("=")[1];//文章id
	    	var userId = window.localStorage.getItem("user_id");//用户id
	    	console.log(userId)
	    	$.ajax({
	    		'url': 'http://blog.com/api/collect/add',
	    		'type': 'post',
	    		'dataType': 'json',
	    		'data': {
	    			user_id: userId,
	    			blog_id: blogId,
	    		},
	    		success:function(res){
	    			if( res.error_code == 0){
	    				alert("收藏成功")
	    				window.location.href = "./shoucang.html"
	    			}
	    			else{

	    			}
	    		},
	    		error:function(res){
	    			alert(res.message)
	    		}

	    	})

	    }	
	}
})