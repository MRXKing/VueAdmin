<template>
	<el-tabs v-model="editableTabsValue" type="border-card" closable @tab-remove="removeTab" @tab-click="tabClick">
		<el-tab-pane v-for="(item, index) in editableTabs"  :key="index+1+''" :label="item.title" :name="index+''" @click="$router.push({path:item.link})">
			<slot></slot>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	export default {
		data() {
			return {
				editableTabsValue: "0",
				editableTabs:[],
			}
		},
		methods: {
			 arrSelect(arr,val){
			       for (var i = 0; i < arr.length; i++) {
			         if (arr[i].path == val || arr[i].title == val) return i;
			       }
			       return -1;
			},
			tabClick(tabs){
				if(this.$route.path != this.editableTabs[this.arrSelect(this.editableTabs,tabs.label)].path) 
				{
					this.$router.push({path:this.editableTabs[this.arrSelect(this.editableTabs,tabs.label)].path})
				}
			},
			removeTab(targetName) {
				let tabs = this.editableTabs
				let activeName = this.editableTabsValue
				if(activeName === targetName){
					tabs.forEach((tab, index) => {
						if (index == targetName) {
						  let nextTab = tabs[index + 1] || tabs[index - 1];
						  if (nextTab) {
							activeName = this.arrSelect(this.editableTabs,nextTab.path)+'';
						  }
						}
					});
				}
				if(this.$route.path != this.editableTabs[activeName].path) this.$router.push({path:this.editableTabs[activeName].path})
				if(activeName !== targetName && targetName < activeName) activeName = this.arrSelect(this.editableTabs,this.$route.path)-1+'';
				this.editableTabsValue = activeName;
				this.editableTabs = tabs.filter((tab,index) => {
					return index != targetName
				});
			},
			checkTabs(val = this.$route){
				let title = val.name
				let path =  val.path
				if(localStorage.editableTabs == "[]" || !localStorage.editableTabs){
					let defaultTabs =[
						{
							title,
							path
						}
					]
					this.editableTabs = defaultTabs
					localStorage.setItem('editableTabs',JSON.stringify(defaultTabs))
					this.editableTabsValue = "0"
				}else{
					this.editableTabs = JSON.parse(localStorage.editableTabs)
					if (this.arrSelect(this.editableTabs,path) == -1 && path != '/login' && path != '/' && path != '/excel') {
						this.editableTabs.push({
							title,
							path
						})
					}
					this.editableTabsValue = (this.arrSelect(this.editableTabs,path)).toString()
				}
			}
		},
		mounted() {
			this.checkTabs()
		},
		watch:{
			editableTabs(newValue,oldValue){
				localStorage.editableTabs = JSON.stringify(newValue)
			},
			$route(val){
				this.checkTabs(val)
			}
		}
	}
</script>

<style lang="stylus">
	.el-tabs
		background #fff
		overflow hidden
</style>
