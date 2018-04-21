var zhuce = new Vue({
	el: "#app",
	data:{
        Usernewname: "",
        Usernewphone: "",
        Usernewword: "",

	},
	mounted: function(){
		// this.getList();
	},
	methods: {
		getList:function(){
			var userName = this.Usernewname;
			var nowPh = this.Usernewphone;
			var userPas = this.Usernewword;
			// var flag = false;
             if(this.Usernewname == "" || this.Usernewphone == "" || this.Usernewword == ""){
             	alert("输入的东西不能为空");
             	// flag = true;
             	return false;
             };
             // else{
             	$.ajax({
				'url':'http://blog.com/api/user/doReg',
				'type':'post',
				'dataType': 'json',
				'data':{
                  uname: userName,
                  phone: nowPh,
				  password: userPas, 
				 },
				success:function(res){
					if(res.error_code == 0){
						// alert("注册成功");
						location.href ='./login.html';
					}
					else{
						alert("ggg")
					}
                 },
                 error:function(res){
                    
                }
			 })
             // }
		}
	}
})