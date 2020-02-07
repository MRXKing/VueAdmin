<template>
	<div class="header">
		<div class="collapse-btn" @click="changeCollapse">
			<i :class="{'el-icon-s-fold':isCollapse,'el-icon-s-unfold':!isCollapse}"></i>
		</div>
		<div class="sysTitle">
			VueAdmin
		</div>
		<div class="header-right">
		            <div class="header-user-con">
		                <!-- 全屏显示 -->
		                <div class="btn-fullscreen" @click="handleFullScreen">
		                    <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
		                        <i class="el-icon-rank"></i>
		                    </el-tooltip>
		                </div>
		                <!-- 消息中心 -->
		                <div class="btn-bell">
		                    <el-tooltip
		                        effect="dark"
		                        :content="message?`有${message}条未读消息`:`消息中心`"
		                        placement="bottom"
		                    >
		                        <router-link to="/tab">
		                            <i class="el-icon-bell"></i>
		                        </router-link>
		                    </el-tooltip>
		                    <span class="btn-bell-badge" v-if="message"></span>
		                </div>
		                <!-- 用户头像 -->
		                <div class="user-avator">
		                    <img src="../assets/logo.jpg" />
		                </div>
		                <!-- 用户名下拉菜单 -->
		                <el-dropdown class="user-name" trigger="click" @command="handleCommand">
		                    <span class="el-dropdown-link">
		                        {{username}}
		                        <i class="el-icon-caret-bottom"></i>
		                    </span>
		                    <el-dropdown-menu slot="dropdown">
		                        <a href="https://github.com/MRXKing/VueAdmin" target="_blank">
		                            <el-dropdown-item>项目仓库</el-dropdown-item>
		                        </a>
		                        <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
		                    </el-dropdown-menu>
		                </el-dropdown>
		            </div>
		</div>
	</div>
</template>

<script>
export default {
	props:['isCollapse'],
	data() {
		return {
			fullscreen:false,
			message: 2,
			name:'Mrxkin'
		}
	},
	methods:{
		changeCollapse(){
			this.$emit('Collapse',!this.isCollapse)
		},
		handleCommand(command) {
			if (command == 'loginout') {
				localStorage.removeItem('ms_username');
				this.$router.push('/login');
			}
		},
		 handleFullScreen() {
			let element = document.documentElement;
			if (this.fullscreen) {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				}
			} else {
				if (element.requestFullscreen) {
					element.requestFullscreen();
				} else if (element.webkitRequestFullScreen) {
					element.webkitRequestFullScreen();
				} else if (element.mozRequestFullScreen) {
					element.mozRequestFullScreen();
				} else if (element.msRequestFullscreen) {
					// IE11
					element.msRequestFullscreen();
				}
			}
			this.fullscreen = !this.fullscreen;
	}
	},
	 computed: {
		username() {
			let username = localStorage.getItem('ms_username');
			return username ? username : this.name;
		}
	}
}
</script>

<style lang="stylus">
	.header
		width 100%
		height 70px
		position fixed
		z-index 999
		background #242f42
	
	a
		text-decoration none
		
	.collapse-btn
		cursor pointer
		font-size 25px
		height 100%
		float left
		padding 0 21px
		line-height 70px
		color #fff
		
	.collapse-btn:hover
		background rgba(255,255,255,.3)
		
	.sysTitle
		color #fff
		line-height 70px
		font-size 22px
		float left
		font-weight bold
	
	.header-right {
	    float: right;
	    padding-right: 50px;
		color #fff
	}
	
	.header-user-con {
	    display: flex;
	    height: 70px;
	    align-items: center;
	}
	
	.btn-fullscreen {
	    transform: rotate(45deg);
	    margin-right: 5px;
	    font-size: 24px;
	}
	
	.btn-bell,.btn-fullscreen {
	    position: relative;
	    width: 30px;
	    height: 30px;
	    text-align: center;
	    border-radius: 15px;
	    cursor: pointer;
	}
	
	.btn-bell-badge {
	    position: absolute;
	    right: 0;
	    top: -2px;
	    width: 8px;
	    height: 8px;
	    border-radius: 4px;
	    background: #f56c6c;
	    color: #fff;
	}
	
	.btn-bell .el-icon-bell {
	    color: #fff;
	}
	.btn-bell {
		font-size 22px
	}
	.user-name {
	    margin-left: 10px;
	}
	.user-avator {
	    margin-left: 20px;
	}
	.user-avator img {
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 50%;
	}
	.el-dropdown-link {
	    color: #fff;
	    cursor: pointer;
	}
	.el-dropdown-menu__item {
	    text-align: center;
	}
</style>
