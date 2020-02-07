<template>
	 <div id="bg">
	        <div id="hint"><!-- 提示框 -->
	            <p>登录失败</p>
	        </div>
	        <div id="login_wrap">
	            <div id="login"><!-- 登录注册切换动画 -->
	                <div id="status">
	                    <i style="top: 0">Log</i>
	                    <i style="top: 35px">Sign</i>
	                    <i style="right: 5px">in</i>
	                </div>
	                <span>
	                     <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
								<el-form-item prop="username">
									<el-input v-model="param.username" placeholder="username">
									</el-input>
								</el-form-item>
								<el-form-item prop="password">
									<el-input
										type="password"
										placeholder="password"
										v-model="param.password"
										@keyup.enter.native="submitForm"
									>
									</el-input>
								</el-form-item>
								<div class="login-btn">
									<el-button type="warning" @click="submitForm">登录</el-button>
									<el-button type="warning" @click="signin">注册</el-button>
								</div>
								<p class="login-tips">Tips : 用户名和密码随便填。</p>
						</el-form>
	                    <a href="#">Forget your password?</a>
	                </span>
	            </div>
	
	            <div id="login_img"><!-- 图片绘制框 -->
	                <span class="circle">
	                    <span></span>
	                    <span></span>
	                </span>
	                <span class="star">
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                    <span></span>
	                </span>
	                <span class="fly_star">
	                    <span></span>
	                    <span></span>
	                </span>
	                <p id="title">
						<i>C</i>
						<i>L</i>
						<i>O</i>
						<i>U</i>
						<i>D</i></p>
	            </div>
	        </div>
	    </div>
</template>

<script>
	 export default {
		 data() {
			 return {
				 onoff:true,
				 param: {
					 username: 'admin',
					 password: '123123',
				 },
			    rules: {
					 username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
					 password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
				 },
			 }
		 },
		 methods:{
			 hint() {
			     let hit = document.getElementById("hint")
			     hit.style.display = "block"
			     setTimeout(()=>{hit.style.opacity = 1}, 0)
			     setTimeout(()=>{hit.style.opacity = 0}, 2000)
			     setTimeout(()=>{hit.style.display = "none"}, 3000)
			 },  
			 submitForm() {
			     if (this.onoff) {
					 this.$refs.login.validate(valid => {
						 if (valid) {
							 this.$message.success('登录成功');
							 localStorage.setItem('ms_username', this.param.username);
							 this.$router.push({path:'/home'});
						 } else {
							 let hit = document.getElementById("hint").getElementsByTagName("p")[0]
							 hit.innerHTML = "请输入账号密码"
							 this.hint()
							 console.log('error submit!!');
							 return false;
						 }
					 })
			     } else {
			         let status = document.getElementById("status").getElementsByTagName("i")
			         status[0].style.top = 0
			         status[1].style.top = 35 + "px"
			         this.onoff = !this.onoff
			     }
			 },
			 signin() {
			        let status = document.getElementById("status").getElementsByTagName("i")
			        let hit = document.getElementById("hint").getElementsByTagName("p")[0]
			        if (this.onoff) {
			            status[0].style.top = 35 + "px"
			            status[1].style.top = 0
			            this.onoff = !this.onoff
			        } else {
			           
			        }
			    },
				submit(callback) {
					// this.$axios({
					// 	type:'post',
					// 	url,
					// 	data:{
							
					// 	}
					// }).then(res => {
					// 	console.log(res)
					// }).catch(err=>{
					// 	console.log(err)
					// })
				}
		 }
	 }
</script>

<style >
	html,
	body {
		height: 100%;
	}

	@font-face {
		font-family: 'neo';
		src: url("../../public/css/NEOTERICc.ttf");
	}
	#login_wrap{
		width: 980px;
		min-height: 500px;
		border-radius: 10px;
		font-family: "neo";
		overflow: hidden;
		box-shadow: 0px 0px 120px rgba(0, 0, 0, 0.25);
		position: fixed;
		top: 50%;
		right: 50%;
		margin-top: -250px;
		margin-right: -490px;
	}
	#login{
		width: 50%;
		height: 100%;
		min-height: 500px;
		background: linear-gradient(45deg, #8a3e4e, #924454);
		position: relative;
		float: right;
	}
	#login #status{
		width: 90px;
		height: 35px;
		margin: 40px auto;
		color: #fff;
		font-size: 30px;
		font-weight: 600;
		position: relative;
		overflow: hidden;
	}
	#login #status i{
		font-style: normal;
		position: absolute;
		transition: .5s
	}
	#login span{
		text-align: center;
	}
	#login span a{
		text-decoration: none;
		color: #fff;
		display: block;
		font-size: 18px;
	}
	#bg{
		background: linear-gradient(45deg, #211136, #bf5853);
		height: 100%;
	}
	/*绘图*/
	#login_img{
		width: 50%;
		min-height: 500px;
		background: linear-gradient(45deg, #221334, #6c3049);
		float: left;
		position: relative;
	}
	#login_img span{
		position: absolute;
		display: block;
	}
	#login_img .circle{
		width: 200px;
		height: 200px;
		border-radius: 50%;
		background: linear-gradient(45deg, #df5555, #ef907a);
		top: 70px;
		left: 50%;
		margin-left: -100px;
		overflow: hidden;
	}
	#login_img .circle span{
		width: 150px;
		height: 40px;
		border-radius: 50px;
		position: absolute;
	}
	#login_img .circle span:nth-child(1){
		top: 30px;
		left: -38px;
		background: #c55c59;
	}
	#login_img .circle span:nth-child(2){
		bottom: 20px;
		right: -35px;
		background: #934555;
	}
	#login_img .star span{
		background: radial-gradient(#fff 10%,#fff 20%,rgba(72, 34, 64, 0));
		border-radius: 50%;
		box-shadow: 0 0 7px #fff;
	}
	#login_img .star span:nth-child(1){
		width: 15px;
		height: 15px;
		top: 50px;
		left: 30px;
	}
	#login_img .star span:nth-child(2){
		width: 10px;
		height: 10px;
		left: 360px;
		top: 80px;
	}
	#login_img .star span:nth-child(3){
		width: 5px;
		height: 5px;
		top: 400px;
		left: 80px;
	}
	#login_img .star span:nth-child(4){
		width: 8px;
		height: 8px;
		top: 240px;
		left: 60px;
	}
	#login_img .star span:nth-child(5){
		width: 4px;
		height: 4px;
		top: 20px;
		left: 200px;
	}
	#login_img .star span:nth-child(6){
		width: 4px;
		height: 4px;
		top: 460px;
		left: 410px;
	}
	#login_img .star span:nth-child(7){
		width: 6px;
		height: 6px;
		top: 250px;
		left: 350px;
	}
	#login_img .fly_star span{
		width: 90px;
		height: 3px;
		background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0.67), rgba(255,255,255,0));
		background: -o-linear-gradient(left, rgba(255, 255, 255, 0.67), rgba(255,255,255,0));
		background: linear-gradient(to right, rgba(255, 255, 255, 0.67), rgba(255,255,255,0));
		transform: rotate(-45deg);
	}
	#login_img .fly_star span:nth-child(1){
		top:60px;
		left: 80px;
	}
	#login_img .fly_star span:nth-child(2){
		top: 210px;
		left: 332px;
		opacity: 0.6;
	}
	#login_img p{
		text-align: center;
		color: #af4b55;
		font-weight: 600;
		margin-top: 365px;
		font-size: 25px;
	}
	#login_img p i{
		font-style: normal;
		margin-right: 45px;
	}
	#login_img p i:nth-last-child(1){
		margin-right: 0;
	}
	#login_wrap .login-btn {
		width: 50%;
		margin: 0 auto;
		display: flex;
	}
	#login_wrap .login-btn button {
	    width: 50%;
	    height: 36px;
		text-align: center;
	    margin-bottom: 10px;
	}
	#login_wrap .login-tips {
	    font-size: 12px;
	    line-height: 30px;
	    color: #fff;
	}
	/*提示*/
	#hint{
		width: 100%;
		line-height: 70px;
		background: linear-gradient(-90deg, #9b494d, #bf5853);
		text-align: center;
		font-size: 25px;
		color: #fff;
		box-shadow: 0 0 20px #733544;
		display: none;
		opacity: 0;
		transition: .5s;
		position: absolute;
		top: 0;
		z-index: 999;
	}
	#login_wrap .el-input__inner {
		width: 300px;
		height: 30px;
		font-size: 18px;
		background: none;
		border: none;
		border-radius: 0px;
		border-bottom: 1px solid #fff;
		color: #fff;
		margin-bottom: 20px;
	}
	/* 响应式 */
	@media screen and (max-width:1000px ) {
		#login_img{
			display: none;
		}
		#login_wrap{
			width: 490px;
			margin-right: -245px;
		}
		#login{
			width: 100%;
		}
	}
	@media screen and (max-width:560px ) {
		#login_wrap{
			width: 330px;
			margin-right: -165px;
		}
	}
	@media screen and (max-width:345px ) {
		#login_wrap {
			width: 290px;
			margin-right: -145px;
		}
	}
	.ms-content .el-input__inner:focus
	{
		border-color: #fff;
	}
	.ms-content{
		padding: 10px 30px 30px 30px;
		width: 75%;
		margin: 0 auto;
	}
	.ms-content input::placeholder{
		color: rgba(255,255,255,0.8);
		font-size: 18px;
		font-family: "neo";
	}
</style>
