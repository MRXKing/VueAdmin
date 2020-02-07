import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  echartHref:'https://github.com/apache/incubator-echarts',
	  elementUploadHref:'https://element.eleme.cn/#/zh-CN/component/upload',
	  draggableHref:'https://github.com/SortableJS/Vue.Draggable',
	  editorHref:"https://github.com/surmon-china/vue-quill-editor",
	  markdownHref:"https://github.com/hinesboy/mavonEditor",
	  excel:{
		  exportExcelHref:'https://panjiachen.github.io/vue-element-admin-site/zh/feature/component/excel.html#excel-%E5%AF%BC%E5%87%BA'
	  }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
