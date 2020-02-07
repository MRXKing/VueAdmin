<template>
	<el-container >
			<headline :isCollapse='isCollapse' @Collapse="checkCollapse"></headline>
			<el-aside style="width: auto;" >
				<aside-menu :isCollapse='isCollapse'></aside-menu>
			</el-aside>
			<el-main :class="{'collapse-left':isCollapse}">
				<tabs ref="tabs">
					<slot></slot>
				</tabs>
			</el-main>
		</div>
	</el-container>
</template>

<script>
	import header from './header.vue'
	import tabs from './tabs.vue'
	import menu from './menu.vue'
	export default {
		data() {
			return {
				isCollapse:false
			}
		},
		components:{
			tabs,
			'aside-menu':menu,
			'headline':header
		},
		methods:{
			checkCollapse(boolean){
				if (boolean) {
					this.collapseLeft = true
				}else{
					this.collapseLeft = false
				}
				this.isCollapse = boolean
			}
		},
		mounted(){
			if (document.body.clientWidth < 1500) {
				 this.isCollapse =true
			}
		}
	}
</script>

<style lang="stylus">
	.el-aside
		background #324157
		position fixed
		top 70px
		bottom 0
		left 0
		
	.el-main
		background #f0f0f0
		position absolute
		min-height 100%
		top 70px
		left 250px
		right 0
	
	.collapse-left
		transition .3s left 
		left 64px!important
</style>
