<template>
  <div id="app" v-if="isLoad">
	  <container v-if="isShow">
		  <slot>
			  <router-view/>
		  </slot>
	  </container>
	  <router-view v-else/>
  </div>
</template>

<script>
	import container from './components/container.vue'
	export default {
		components:{
			container
		},
		data() {
			return {	
				isShow:true,
				isLoad:false
			}
		},
		mounted() {
			this.isLoad = true
		},
		watch:{
			$route(val){
				if (val.path == '/login') {
					this.isShow = false
				}else {
					this.isShow = true
				}
			}
		}
	}
</script>

<style lang="stylus">
	*
		margin 0
		padding 0
		box-sizing border-box

	html,body
		width 100%
		height 100%
		font-family PingFang SC,Helvetica Neue,Helvetica,microsoft yahei,arial,STHeiTi,sans-serif
		
	.el-table{
		.el-table__fixed-right{
			height 100%!important
		}
	}
	
	#app 
		width 100%
		height 100%
		min-height 100%
</style>
