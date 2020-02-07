import Vue from 'vue'
import ECharts from 'vue-echarts' 
import echarts from 'echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'


Vue.component('v-chart', ECharts)
Vue.prototype.$echarts = echarts