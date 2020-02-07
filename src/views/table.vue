<template>
  <div class="about">
    <el-table
        ref="filterTable"
        :data="tableData"
		:header-cell-style="{color:'#606266',background:'#f5f7fa'}"
        style="width: 100%"
		stripe
		border>
		<el-table-column
		  type="selection"
		  width="55">
		</el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column>
		<el-table-column
			label="头像"
			>
		  <template slot-scope="scope">
		    <el-image :src="scope.row.imgUrl"  :preview-src-list="[scope.row.imgUrl]" class="img"></el-image>
		  </template>
		</el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
		<el-table-column label="操作">
		      <template slot-scope="scope">
		        <el-button
		          size="mini"
				   @click="handleEdit(scope.$index, scope.row)"
		          >编辑</el-button>
		        <el-button
		          size="mini"
		          type="danger"
				   @click="handleDelete(scope.$index, scope.row)"
		          >删除</el-button>
		      </template>
		    </el-table-column>
      </el-table>
	  <div class="pagination">
		  <el-pagination
		  			  background
		  			  layout="total, prev, pager, next"
		  			  :current-page="currentPage"
		  			  :page-size="pgSize"
		  			  :total="tableData.length"
		  			  @current-change="handlePageChange"
		  ></el-pagination>
	  </div>
	   <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
	              <el-form ref="form" :model="form" label-width="70px">
	                  <el-form-item label="用户名">
	                      <el-input v-model="form.name"></el-input>
	                  </el-form-item>
	                  <el-form-item label="地址">
	                      <el-input v-model="form.address"></el-input>
	                  </el-form-item>
	              </el-form>
	              <span slot="footer" class="dialog-footer">
	                  <el-button @click="editVisible = false">取 消</el-button>
	                  <el-button type="primary" @click="saveEdit">确 定</el-button>
	              </span>
	  </el-dialog>
  </div>
</template>


<script>
  export default {
    data() {
      return {
		currentPage:1,
		pgSize:4,
		idx:-1,
		editVisible:false,
		form:{
			
		},
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
		  imgUrl:require('@/assets/logo.png'),
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
		  imgUrl:require('@/assets/logo.png'),
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
		  imgUrl:require('@/assets/logo.png'),
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
		  imgUrl:require('@/assets/logo.png'),
          tag: '公司'
        }]
      }
    },
    methods: {
	 handleEdit(index, row) {
	             this.idx = index;
	             this.form = row;
	             this.editVisible = true;
	 },
	 saveEdit() {
			 this.editVisible = false;
			 this.$message.success(`修改第 ${this.idx + 1} 行成功`);
			 this.$set(this.tableData, this.idx, this.form);
	 },
	  handleDelete(index, row) {
	             // 二次确认删除
	             this.$confirm('确定要删除吗？', '提示', {
	                 type: 'warning'
	             })
	                 .then(() => {
	                     this.$message.success('删除成功');
	                     this.tableData.splice(index, 1);
	                 })
	                 .catch(() => {});
	 },
	 handlePageChange(){
		 this.$set(this.currentPage, val);
	 },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }
    }
  }
</script>

<style lang="stylus">
	.img
		width 40px
		height 40px
	
	.pagination
		margin 20px 0
		text-align right
</style>