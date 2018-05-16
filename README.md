# csdn
## 移动端CSDN及PC端 ##

 项目整体使用的渲染技术是vue。简单的实现了查看文章详情；收藏文章（取消收藏文章）；发布文章；编辑修改发布的文章；删除发布的文章等功能。 ->1查看文章详情：需要从首页传一个文章的id号，然后根据文章id号取到文章内容。 文章的id号用是地址栏传参的方式从首页传过来的，在详情页对地址栏进行解析得到id号（解析方式是用split进行解析，window.location.search.split("=")[1]，用split将地址栏参数用“=”号分隔开，然后取数组里的第一位[数组默认从第0位开始]，即为所要的id号）。然后用ajax的方法取到数据。
 
 注册登录：注册完数据存到本地浏览器数据然后再取出来。
 success:function(res){
					that.user = res.data.user;
	                if(res.error_code == 0){
						alert("登录成功");
						location.href ='./blog.html';
					  window.localStorage.setItem("user_id",res.data.user.userid);//存入数据
					  window.localStorage.setItem("user_name",res.data.user.username);
					  window.localStorage.setItem("user_img",res.data.user.usering)
					}

收藏列表用到数据取出来
var blogId = window.location.search.split("=")[1];//文章id
	    	var userId = window.localStorage.getItem("user_id");//用户id