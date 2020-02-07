<template>
	<div class="dialogBox">
		<p>通过指令 v-dialogDrag 使 Dialog 对话框具有可拖拽的功能。</p>
		<el-button type="primary" @click="visible = true;">点我弹框</el-button>
		<el-dialog v-dialogDrag title="拖拽弹框" center :visible.sync="visible" width="30%">
			我是一个可以拖拽的对话框！
			<span slot="footer" class="dialog-footer">
				<el-button @click="visible = false">取 消</el-button>
				<el-button type="primary" @click="visible = false">确 定</el-button>
			</span>
		</el-dialog>
	</div>
</template>

<script>
	import '../plugins/vDialogDrag'
	export default {
		data() {
			return {
				visible: false
			}
		}
	}
</script>

<style lang="stylus">
</style>
