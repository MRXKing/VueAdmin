<template>
	<el-tabs v-model="activeName" @tab-click="handleClick">
		<el-tab-pane :label="unreadCount" name="first">
			<el-table
			    :data="unread"
			    tooltip-effect="dark"
			    style="width: 100%"
				:show-header="false"
				class="tableBorder"
				:row-style="{height:'52px'}"
				:cell-class-name="cellClassName"
			    >
			    <el-table-column
			      prop="msg"
			      show-overflow-tooltip>
			    </el-table-column>
				<el-table-column
				  prop="time"
				  fixed="right"
				  width="200px">
				</el-table-column>
				 <el-table-column
				      fixed="right"
					  width="150px">
				      <template slot-scope="scope">
						<el-button size="mini" @click="readClick(scope.$index,scope.row)">标为已读</el-button>
				      </template>
				   </el-table-column>
			  </el-table>
			  <div class="handle-row">
					  <el-button type="primary" size="small" >全部标为已读</el-button>
			  </div>
		</el-tab-pane>
		<el-tab-pane :label="AlreadyreadCount" name="second">
			<el-table
			    :data="Alreadyread"
			    tooltip-effect="dark"
			    style="width: 100%"
				:show-header="false"
				class="tableBorder"
				:cell-class-name="cellClassName"
			    >
			    <el-table-column
			      prop="msg"
			      show-overflow-tooltip>
			    </el-table-column>
				<el-table-column
				  prop="time"
				  fixed="right"
				  width="200px">
				</el-table-column>
				 <el-table-column
				      fixed="right"
					  width="150px">
				      <template slot-scope="scope">
						<el-button size="mini" type="danger" @click="dropClick(scope.$index,scope.row)">删除</el-button>
				      </template>
				   </el-table-column>
			  </el-table>
			  <div class="handle-row">
			  				  <el-button type="danger" size="small">删除全部</el-button>
			  </div>
		</el-tab-pane>
		<el-tab-pane :label="recycleBinCount" name="third">
			<el-table
			    :data="recycleBin"
			    tooltip-effect="dark"
			    style="width: 100%"
				:show-header="false"
				class="tableBorder"
				:cell-class-name="cellClassName"
			    >
			    <el-table-column
			      prop="msg"
			      show-overflow-tooltip>
			    </el-table-column>
				<el-table-column
				  prop="time"
				  fixed="right"
				  width="200px">
				</el-table-column>
				 <el-table-column
				      fixed="right"
					  width="150px">
				      <template slot-scope="scope">
						<el-button size="mini" @click="returnClick(scope.$index,scope.row)">还原</el-button>
				      </template>
				   </el-table-column>
			  </el-table>
			  <div class="handle-row">
					  <el-button type="danger" size="small">清空回收站</el-button>
			  </div>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {
				activeName:'first',
				unread:[{
					msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
					time:'2018-04-19 20:00:00'
				},{
					msg:'今晚12点整发大红包，先到先得',
					time:'2018-04-19 20:00:00'
				}],
				Alreadyread:[{
					msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
					time:'2018-04-19 20:00:00'
				}],
				recycleBin:[{
					msg:'【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
					time:'2018-04-19 20:00:00'
				}]
			}
		},
		methods:{
			handleClick(tab){
				console.log(tab)
			},
			readClick(index,row){
				this.unread.splice(index,1)
				this.Alreadyread.unshift(row)
			},
			dropClick(index,row){
				this.Alreadyread.splice(index,1)
				this.recycleBin.unshift(row)
			},
			returnClick(index,row){
				this.recycleBin.splice(index,1)
				this.Alreadyread.unshift(row)
			},
			cellClassName({row,rowIndex,columnIndex}){
				if (columnIndex == 0) {
					return 'cell-name'
				}
			}
		},
		computed:{
			unreadCount(){
				return `未读消息(${this.unread.length})`
			},
			AlreadyreadCount(){
				return `已读消息(${this.Alreadyread.length})`
			},
			recycleBinCount(){
				return `回收站(${this.recycleBin.length})`
			}
		}
	}
</script>

<style lang="stylus" >
	.cell-name
		color #3085dc
		font-size 12px
		cursor pointer
	
	.handle-row
		margin-top 30px
	
</style>
