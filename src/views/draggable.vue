<template>
	<div>
		<div class="tips">Vue-draggable 拖拽组件 访问地址：<a class="link-a" :href="$store.state.draggableHref" target="_blank">Vue.Draggable</a></div>
		<div class="draggableBox">
			<div class="draggable-box-left">
				<div class="item-title">todo</div>
				<draggable v-model="leftTask"  :options="option" @remove="removeHandle">
					<transition-group tag="div" id="todo" key="todo">
					<div v-for="(item,key) in leftTask" :key="item.value" class="draggableBox-item">
						{{item.value}}
					</div>
					</transition-group>
				</draggable>
			</div>
			<div class="draggable-box-main">
				<div class="item-title">doing</div>
				<draggable v-model="mainTask" :options="option"  @remove="removeHandle">
					<transition-group tag="div" id="doing" key="doing">
					<div v-for="(item,key) in mainTask" :key="item.value"  class="draggableBox-item"> 
						{{item.value}}
					</div>
					</transition-group>
				</draggable>
			</div>
			<div class="draggable-box-right">
				<div class="item-title">done</div>
				<draggable v-model="rightTask" :options="option"  @remove="removeHandle">
					<transition-group tag="div" id="done" key="done" >
					<div v-for="(item,key) in rightTask" :key="item.value" class="draggableBox-item"> 
						{{item.value}}
					</div>
					</transition-group>
				</draggable>
			</div>
		</div>
	</div>
</template>

<script>
	import draggable from 'vuedraggable'
	export default {
		data() {
			return {
				option:{
					animation: 120,
					scroll: true,
					group: 'sortlist',
					ghostClass: 'ghost-style'
				},
				leftTask: [{
					value:"1"
				},{
					value:"2"
				},{
					value:"3"
				}],
				mainTask:[{
					value:"4"
				},{
					value:"5"
				},{
					value:"6"
				}],
				rightTask: [{
					value:"7"
				},{
					value:"8"
				},{
					value:"9"
				}]
			}
		},
		methods:{
			removeHandle(el){
				this.$message({
					  message: `从${el.from.id}到${el.to.id}`,
					  type: 'success'
				});
			}
		},
		mounted(){
		},
		components: {
			draggable,
		}
	}
</script>

<style lang="stylus">
	.draggableBox 
		width 100% 
		display flex
	
	.draggable-box-left,.draggable-box-main,.draggable-box-right
		flex 1
		background-color #eff1f5
		margin-right 16px
		border-radius 6px
		border 1px solid #e1e4e8
		max-width: 330px
		min-width: 300px
		height 500px
		display flex
		flex-direction column
		overflow hidden
	
	.draggable-box-left,.draggable-box-main,.draggable-box-right{
		div{
			flex 1
		}
		#doing,#todo,#done{
			height 100%
		}
	}
	
	.draggableBox-item {
		border 1px solid #e1e4e8
		padding 10px
		margin 5px 10px 10px
		list-style none
		background-color #fff
		border-radius 6px
		cursor pointer
		transition border .3s ease-in
		&:hover{
			border 1px solid  #20a0ff
		}
	}
	
	.item-title
		padding: 8px 8px 8px 12px;
		font-size: 14px;
		line-height: 1.5;
		color: #24292e;
		font-weight: 600;
		max-height 37px
	
	.tips
		padding 20px 10px
		margin-bottom 20px
		background #eef1f6
	
	.link-a
		color #3085DC
		text-decoration none
		
	.ghost-style
		display: block;
		color: transparent;
		border-style: dashed
</style>
