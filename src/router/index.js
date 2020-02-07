import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		name: '系统首页',
		component: () => import('@/views/Home.vue'),
		meta:{
			permission:false
		}
	},
	{
		path: '/table',
		name: '基础表格',
		component: () => import('@/views/table.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/tab',
		name:'tab选项卡',
		component: () => import('@/views/tab.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/form',
		name:'基本表单',
		component: () => import('@/views/form.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/upload',
		name:'文件上传',
		component: () => import('@/views/upload.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/echart',
		name:'echart图表',
		component:() => import('@/views/echart.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/draggable',
		name:'拖拽列表',
		component:() => import('@/views/draggable.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/dialogDrag',
		name:'拖拽弹框',
		component:() => import('@/views/dialogDrag.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/editor',
		name:'富文本编辑器',
		component:() => import('@/views/editor.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/markdown',
		name:'markdown编辑器',
		component:() => import('@/views/markdown.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/international',
		name:'国际化功能',
		component:() => import('@/views/international.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/404',
		name:'404',
		component:() => import('@/views/404.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/403',
		name:'权限不足',
		component:() => import('@/views/403.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/login',
		name:'login',
		component:() => import('@/views/login.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/excel',
		name:'excel表',
		component:() => import('@/components/bus.vue'),
		children:[{
			path:'exportExcel',
			name:'导出excel',
			component:() => import('@/views/excel/exportExcel.vue'),
			meta:{
				permission:false
			}
		},{
			path:'selectExcel',
			name:'导出已选择项',
			component:() => import('@/views/excel/selectExcel.vue'),
			meta:{
				permission:false
			}
		},{
			path:'mergerHeader',
			name:'导出多级表头',
			component:() => import('@/views/excel/mergerHeader.vue'),
			meta:{
				permission:false
			}
		},{
			path:'uploadExcel',
			name:'上传excel',
			component:() => import('@/views/excel/uploadExcel.vue'),
			meta:{
				permission:false
			}
		}],
		meta:{
			permission:false
		}
	},
	{
		path:'/permission',
		name:'权限测试',
		component:() => import('@/views/permission.vue'),
		meta:{
			permission:true
		}
	},
	{
		path:'/pdf',
		name:'pdf下载',
		component:() => import('@/views/pdf.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/zip',
		name:'导出zip',
		component:() => import('@/views/exportZip.vue'),
		meta:{
			permission:false
		}
	},
	{
		path:'/donate',
		name:'支持我吧',
		component:() => import('@/views/Donate.vue'),
		meta:{
			permission:false
		}
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if (!role && to.path != '/login') {
        next('/login')
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403')
    } else {
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            })
        } else {
            next();
        }
    }
})

export default router
