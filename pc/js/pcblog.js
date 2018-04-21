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
var editor = new Vue({
    		el: "#app",
    		data: {
    			title: "",
    			class_id: "",
                classlist: [],
                blist: {}
    		},
    		mounted: function(){
    			var ue = UE.getEditor('container');
                this.getData();
                this.getaList();
                this.edit();
    		},
    		methods: {
    			getUeditorContent: function(){
    				return UE.getEditor('container').getContent()
    			},
                getData: function(){
                    var that = this;
                    var userId = window.localStorage.getItem("user_id");
                    $.ajax({
                        "url": "http://blog.com/api/blog/myBlog",
                        "type": "post",
                        "dataType": "json",
                        "data":{
                            user_id: userId,
                        },
                        success:function(res){
                             that.classlist = res.data.my_blog_lists;
                             console.log(that.classlist)
                        }
                    })
                },
    			issue: function(){
                    var that = this;
                    var userId = window.localStorage.getItem("user_id");
                    console.log(userId)
    				$.ajax({
    					"url": "http://blog.com/api/blog/doAdd",
    					"type": "post",
    					"dataType": "json",
    					"data": {
    						user_id: userId,
    						"title": that.title,
    						"content": that.getUeditorContent(),
    						"classify_id": that.class_id,
    					},
    					success: function(res){
                            console.log(that.classlist)
    						if(res.error_code == 0){
    							alert("发布成功即将跳转。。。。。。");
    							window.location.href="./pcbianji.html"
    						}else {
    							alert(res.message);
    						}
    					}
    				})
    			},
                 getaList: function(){
                    var userId = localStorage.getItem("user_id");
                    var that = this;
                    $.ajax({
                        url: " http://blog.com/api/blog/add",
                        data: {
                            blog_id: getQuery().id,
                            user_id: userId
                        },
                        type:"get",
                        dataType: "json",
                        success: function(res){
                            if(res.error_code == 0){
                                that.blist = res.data.my_blog_info;
                                that.title = res.data.my_blog_info.title;
                            }else {
                                alert(res.message);
                            }
                        }
                    })
                },
                edit:function(){
                    var that = this;
                    $.ajax({
                        "url": "http://blog.com/api/blog/doEdit",
                        "type": "post",
                        "dataType": "json",
                        "data": {
                            user_id: window.localStorage.user_id,
                            "title": that.title,
                            "content": that.getUeditorContent(),
                            "classify_id": that.class_id,
                            "blog_id": getQuery().id
                        },
                        success: function(res){
                            if(res.error_code == 0){
                                alert("修改发布成功");
                            }else {
                                alert(res.message);
                            }
                        }
                    })
                }
    		}
    	})