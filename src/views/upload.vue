<template>
	<div>
		<div class="content-title">支持拖拽</div>
		<div class="tips">Element UI自带上传组件。 访问地址：<a class="link-a" :href="$store.state.elementUploadHref" target="_blank">Element UI Upload</a></div>
		<el-upload
		  class="upload-demo"
		  drag
		  action="https://jsonplaceholder.typicode.com/posts/"
		  :file-list="fileList"
		  multiple>
		  <i class="el-icon-upload"></i>
		  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
		  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
		</el-upload>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				fileList: [{name: 'food.jpeg', 
				url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, 
				{name: 'food2.jpeg', url: 
				'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
			}
		}
	}
</script>

<style lang="stylus">
	.content-title
		font-weight 400
		line-height 50px
		margin 10px 0
		font-size 22px
		color #1f2f3d
	
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
	.link-a
		color #3085DC
		text-decoration none
</style>
