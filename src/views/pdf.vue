<template>
	<div>
		<div class="tips">使用window.print()实现pdf下载</div>
		<el-button type="primary" @click="printPdf">点击下载pdf</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods:{
			printPdf(){
				window.print()
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
</style>
