<template>
	<div>
		<div class="tips">Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。 访问地址：<a class="link-a" :href="$store.state.editorHref" target="_blank">Vue-Quill-Editor</a></div>
		<quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
		<el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
	</div>
</template>

<script>
	import 'quill/dist/quill.core.css';
	    import 'quill/dist/quill.snow.css';
	    import 'quill/dist/quill.bubble.css';
	    import { quillEditor } from 'vue-quill-editor';
	    export default {
	        name: 'editor',
	        data: function(){
	            return {
	                content: '',
	                editorOption: {
	                    placeholder: 'Hello World'
	                }
	            }
	        },
	        components: {
	            quillEditor
	        },
	        methods: {
	            onEditorChange({ editor, html, text }) {
	                this.content = html;
	            },
	            submit(){
	                console.log(this.content);
	                this.$message.success('提交成功！');
	            }
	        },
			mounted(){
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
	
	.ql-editor
		min-height 360px
</style>
