<template>
	<el-menu :default-active="$route.path" class="el-menu-vertical-demo" background-color="#324157" text-color="#bfcbd9"
	 active-text-color="#25a0e4" :collapse="isCollapse" :router="routerOpen"  ref="elMenu">
		<el-menu-item index="/home">
			<i class="el-icon-home"></i>
			<span slot="title">系统简介</span>
		</el-menu-item>
		<el-menu-item index="/table">
			<i class="el-icon-cascades"></i>
			<span slot="title">基础表格</span>
		</el-menu-item>
		<el-menu-item index="/tab">
			<i class="el-icon-document-copy"></i>
			<span slot="title">tab选项卡</span>
		</el-menu-item>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-date"></i>
				<span>表单相关</span>
			</template>
			<el-menu-item index="/form">基本表单</el-menu-item>
			<el-submenu index="4-2">
				<template slot="title">三级菜单</template>
				<el-menu-item index="/editor">富文本编辑器</el-menu-item>
				<el-menu-item index="/markdown">markdown编辑器</el-menu-item>
			</el-submenu>
			<el-menu-item index="/upload">文件上传</el-menu-item>
		</el-submenu>
		<el-menu-item index="/echart">
			<i class="el-icon-pie-chart"></i>
			<span slot="title">echart图表</span>
		</el-menu-item>
		<el-submenu index="2">
			<template slot="title">
				<i class="el-icon-rank"></i>
				<span>拖拽组件</span>
			</template>
			<el-menu-item index="/draggable">拖拽列表</el-menu-item>
			<el-menu-item index="/dialogDrag">拖拽弹框</el-menu-item>
		</el-submenu>
		<el-menu-item index="/international">
			<i class="el-icon-global"></i>
			<span slot="title">国际化功能</span>
		</el-menu-item>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-fake"></i>
				<span>错误处理</span>
			</template>
			<el-menu-item index="/permission">权限测试</el-menu-item>
			<el-menu-item index="/404">404</el-menu-item>
		</el-submenu>
		<el-submenu index="4">
			<template slot="title">
				<i class="el-icon-excel1"></i>
				<span>Excel</span>
			</template>
			<el-menu-item index="/excel/exportExcel">导出Excel</el-menu-item>
			<el-menu-item index="/excel/selectExcel">导出已选择项</el-menu-item>
			<el-menu-item index="/excel/mergerHeader">导出多级表头</el-menu-item>
			<el-menu-item index="/excel/uploadExcel">上传Excel</el-menu-item>
		</el-submenu>
		<el-menu-item index="/pdf">
			<i class="el-icon-pdf1"></i>
			<span slot="title">pdf下载</span>
		</el-menu-item>
		<el-menu-item index="/zip">
			<i class="el-icon-zip"></i>
			<span slot="title">导出zip</span>
		</el-menu-item>
		<el-menu-item index="/donate">
			<i class="el-icon-redbag"></i>
			<span slot="title">支持我吧</span>
		</el-menu-item>
	</el-menu>
</template>

<script>
	export default {
		props: ['isCollapse'],
		data() {
			return {
				routerOpen:true
			}
		}
	}
</script>

<style lang="stylus">
	.el-menu-vertical-demo:not(.el-menu--collapse) 
		width 250px
	
	.el-menu
		border-right none!important
</style>
