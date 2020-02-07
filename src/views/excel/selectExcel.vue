<template>
  <div class="app-container">
	<div class="tips">excel表 访问地址：<a class="link-a" :href="$store.state.excel.exportExcelHref" target="_blank">vue-element-admin/Excel</a></div>
    <div>
      <FilenameOption v-model="filename" />
      <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="el-icon-document" @click="handleDownload">
        导出已选择项
      </el-button>
    </div>

    <el-table v-loading="listLoading" :data="list" element-loading-text="Loading..." border fit highlight-current-row @selection-change="handleSelectionChange">
		<el-table-column type="selection" align="center"></el-table-column>
      <el-table-column align="center" label="Id" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <el-tag>{{ scope.row.author }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Readings" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.pageviews }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="Date" width="220">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script> 
import {parseTime} from '@/views/excel/utils'
// options components
import FilenameOption from './components/FilenameOption'
export default {
  name: 'ExportExcel',
  components: { FilenameOption},
  data() {
    return {
      list: [{
		  id:0,
		  title:'Evjgxek Gjjn Xbfphs Fchvbqtxrg Smsnrcc Sbvmjxvty Vtxujsr',
		  author:'丹尼尔',
		  pageviews:4692,
		  timestamp:'1991-08-15 14:05'
	  },{
		  id:1,
		  title:'Evjgxek Gjjn Xbfphs Fchvbqtxrg Smsnrcc Sbvmjxvty Vtxujsr',
		  author:'丹尼尔',
		  pageviews:4692,
		  timestamp:'1991-08-15 14:05'
	  },{
		  id:2,
		  title:'Evjgxek Gjjn Xbfphs Fchvbqtxrg Smsnrcc Sbvmjxvty Vtxujsr',
		  author:'丹尼尔',
		  pageviews:4692,
		  timestamp:'1991-08-15 14:05'
	  }],
	  multipleSelection:[],
      listLoading: false,
      downloadLoading: false,
      filename: ''
    }
  },
  methods: {
	 handleSelectionChange(val) {
		this.multipleSelection = val
	 },
    handleDownload() {
      if (this.multipleSelection.length) {
      	this.downloadLoading = true
      	import('@/vendor/Export2Excel').then(excel => {
      	  const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
      	  const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
      	  const list = this.multipleSelection
      	  const data = this.formatJson(filterVal, list)
      	  excel.export_json_to_excel({
      	    header: tHeader,
      	    data,
      	    filename: this.filename,
      	    autoWidth:true,
      	    bookType: 'xlsx'
      	  })
      	  this.downloadLoading = false
      	})
      }else{
		   this.$message({
			message: '请至少选择一项',
			type: 'warning'
		  })
	  }
    },
    formatJson(filterVal, jsonData) {
        return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style lang="stylus">
	.radio-label 
	  font-size 14px
	  color #606266
	  line-height 40px
	  padding 0 12px 0 30px
	
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
	.link-a
		color #3085DC
		text-decoration none
</style>