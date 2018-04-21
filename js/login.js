var user = new Vue({
	el: "#app",
	data:{
       Newpass: "",
       userName: "",  
      
	},
	mounted: function(){
		// this.getList();
	},
	methods: {
		getList:function(){
	        var that = this;
	        var usering = this.Newpass;
	        var username = this.userName;
	         if(this.userName == "" || this.Newpass == ""){
             	alert("输入的东西不能为空");
             	// flag = true;
             	return false;
             };
			$.ajax({ 
				'url': 'http://blog.com/api/user/doLogin',
				'type':'post',
				'dataType': 'json',
				'data':{
				  'format': 'json',
				  'password': usering,
				  'phone': username,
				 },
				success:function(res){
					that.user = res.data.user;
	                if(res.error_code == 0){
						alert("登录成功");
						location.href ='./blog.html';
					  window.localStorage.setItem("user_id",res.data.user.userid);//存入数据
					  window.localStorage.setItem("user_name",res.data.user.username);
					  window.localStorage.setItem("user_img",res.data.user.usering)
					}
					else{
						alert("ggg")
					}
                 },
                 error:function(res){
                    alert(res.message);
                }
			 })

		}
	}
})