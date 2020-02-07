<template>
  <div class="home">
	   <div class="contain">
		   <div class="sys">
		   		   <img src="../assets/logo.jpg" />
		   		   <div class="manager">
		   			   Mrxkin 
		   			   <span>超级管理员</span> 
		   			   <el-divider></el-divider>
		   			   <div class="loginDeatils">
		   				   <div>
		   					   <span class="mr-100">上次登陆时间:</span>
		   					   <span >2020-1-1</span>
		   					</div>
		   				   <div>
		   					   <span class="mr-100">上次登录地点:</span>
		   					   <span>深圳</span>
		   					</div>
		   			   </div>
		   		   </div>
		   		   
		   </div>
		   <div class="information">
			   <el-card class="box-card">
			     <div slot="header" class="clearfix">
			       <span>待办事项</span>
			       <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
			     </div>
			    <el-table
			        ref="multipleTable"
			        :data="tableData"
			        tooltip-effect="dark"
			        style="width: 100%"
					:show-header="false"
					height="150px"
					@select="selectionChange"
			        >
			        <el-table-column
			          type="selection"
			          width="55">
			        </el-table-column>
			        <el-table-column
			          prop="youNeedDo"
			          show-overflow-tooltip>
					   <template slot-scope="scope"> <span :class="{'todo-item':true,'todo-item-del':scope.row.selected}">{{scope.row.youNeedDo}}</span></template>
			        </el-table-column>
					 <el-table-column
					      fixed="right"
					      width="50">
					      <template slot-scope="scope">
							<i  class="el-icon-edit"></i>
					        <i class="el-icon-delete"></i>
					      </template>
					    </el-table-column>
			      </el-table>
			   </el-card>
		   </div>
	   </div>
	   <el-divider content-position="center">VueAdmin power by Mrxkin</el-divider>
	   <div class="contain2">
		   <v-chart class="echart" :options="options"/>
	   </div>
	   <div class="contain2">
	   		 <v-chart class="echart" :options="options2" id="echart"/>
	   </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data() {
	 return {
		 tableData: [{
			 id:'1',
			 selected:true,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'2',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'3',
			 selected:true,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'4',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'5',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'6',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'7',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 },{
			 id:'8',
			 selected:false,
			 youNeedDo:'今天要修复100个bug'
		 }],
		 options:{
			 title: {
				 text: 'basic line chart'
			 },
			 tooltip: {
				 trigger: 'none',
				 axisPointer: {
					 type: 'cross'
				 }
		    },
		     xAxis: {
		         type: 'category',
		         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
		     },
		     yAxis: {
		         type: 'value'
		     },
		     series: [{
		         data: [820, 932, 901, 934, 1290, 1330, 1320],
		         type: 'line'
		     }]
		 },
		 options2:{
		     title: {
		         text: '特性示例：渐变色 阴影 点击缩放',
		         subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
		     },
			 tooltip: {
			 	 trigger: 'none',
			 	 axisPointer: {
			 		 type: 'cross'
			 	 }
			 },
		     xAxis: {
		         data:  ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'],
		         axisLabel: {
		             inside: true,
		             textStyle: {
		                 color: '#fff'
		             }
		         },
		         axisTick: {
		             show: false
		         },
		         axisLine: {
		             show: false
		         },
		         z: 10
		     },
		     yAxis: {
		         axisLine: {
		             show: false
		         },
		         axisTick: {
		             show: false
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#999'
		             }
		         }
		     },
		     dataZoom: [
		         {
		             type: 'inside'
		         }
		     ],
		     series: [
		         { // For shadow
		             type: 'bar',
		             itemStyle: {
		                 color: 'rgba(0,0,0,0.05)'
		             },
		             barGap: '-100%',
		             barCategoryGap: '40%',
		             data: [500, 500, 500, 500, 500, 500, 500, 500, 500, 500,500, 500, 500, 500, 500, 500, 500, 500, 500, 500],
		             animation: false
		         },
		         {
		             type: 'bar',
		             data: [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
		         }
		     ]
		 }
	 }
  },
  methods:{
	  isExist(row,val){
		  for (var i = 0; i < row.length; i++) {
		    if (row[i].id == val.id) return true
		  }
		  return false
	  },
	  selectionChange(row){
		  this.tableData.forEach((val,index)=>{
			  if (this.isExist(row,val)) {
				this.tableData[index].selected =true
			  }else {			 
				this.tableData[index].selected =false
			  }
		  })
	  },
	  charTwoClick(){
		  let myChart = this.$echarts.init(document.getElementById('echart'))
		  var zoomSize = 6;
		  myChart.on('click',  (params) => {
		      myChart.dispatchAction({
		          type: 'dataZoom',
		          startValue: this.options2.xAxis.data[Math.max(params.dataIndex - zoomSize / 2, 0)],
		          endValue: this.options2.xAxis.data[Math.min(params.dataIndex + zoomSize / 2, this.options2.series[1].data.length - 1)]
		      });
		  });
	  }
  },
  mounted(){
	  this.tableData.forEach((val,index)=>{
		  if (val.selected) {
		  	this.$refs.multipleTable.toggleRowSelection(this.tableData[index],true)
		  }
	  })
	  this.charTwoClick()
  }
}
</script>


<style lang="stylus">
	.home 
		width 100%
		height auto
	
	.contain
		width 100%
		display flex
	
	.sys
		flex 1
		height 250px
		display flex
		min-width 600px
		
	.sys img 
		width 250px
		height 250px
		border-radius 50%
		
	.sys .manager
		width 60%
		padding-left 45px
		padding-top 25px
		font-size 30px
	
	.sys .manager > span
		display block
		font-size 14px
		color #999
	
	.sys .manager .loginDeatils
		width 100%
		font-size 15px
		color #999
	
	.information
		flex 1
	
	.mr-100
		margin-right 100px
		
	.todo-item
		font-size 14px
	
	.todo-item-del
		text-decoration line-through
		color #999
	
	.contain2
		width 100%
		display flex
		
	.echart 
		flex 1
</style>
