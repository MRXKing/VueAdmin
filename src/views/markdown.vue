<template>
	<div >
		<div class="tips"> mavonEditor：基于Vue的markdown编辑器。访问地址：<a :href="this.$store.state.markdownHref" target="_blank">mavonEditor</a>
		</div>
		<mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
		<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
	 </div>
</template>

<script>
	 import { mavonEditor } from 'mavon-editor'
	    import 'mavon-editor/dist/css/index.css'
	    export default {
	        name: 'markdown',
	        data: function(){
	            return {
	                content:'',
	                html:'',
	                configs: {
	                }
	            }
	        },
	        components: {
	            mavonEditor
	        },
	        methods: {
	            // 将图片上传到服务器，返回地址替换到md中
	            $imgAdd(pos, $file){
	                var formdata = new FormData();
	                formdata.append('file', $file);
	                // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
	                this.$axios({
	                    url: '/common/upload',
	                    method: 'post',
	                    data: formdata,
	                    headers: { 'Content-Type': 'multipart/form-data' },
	                }).then((url) => {
	                    this.$refs.md.$img2Url(pos, url);
	                })
	            },
	            change(value, render){
	                // render 为 markdown 解析后的结果
	                this.html = render;
	            },
	            submit(){
	                console.log(this.content);
	                console.log(this.html);
	                this.$message.success('提交成功！');
	            }
	        }
	    }
</script>

<style lang="stylus">
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
	.link-a
		color #3085DC
		text-decoration none
	
	.editor-btn
		margin-top 20px
</style>
