import Vue from 'vue'
import { 
	Icon,
	Table,
	Tabs,
	Dropdown,
    DropdownMenu,
    DropdownItem,
	Tag,
	TableColumn,
	Input,
	Radio,
	RadioGroup,
	RadioButton,
	Checkbox,
	Button,
	TabPane,
	Form,
	Aside,
	FormItem,
	Main,
	Container,
	Menu,
	Submenu,
	MenuItem,
	Divider,
	Card,
	CheckboxGroup,
	Switch,
	Col,
	TimePicker,
	DatePicker,
	Upload,
	Option,
	Select,
	Message,
	Dialog,
	Image,
	Pagination,
	MessageBox,
	Tooltip,
	Loading
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(Loading.directive)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Image)
Vue.use(CheckboxGroup)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(Tag)
Vue.use(Option)
Vue.use(Select)
Vue.use(Tabs)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Switch)
Vue.use(TabPane)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Aside)
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Divider)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Input)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Form)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.Alert
Vue.prototype.$loading = Loading.service
Vue.prototype.$confirm = MessageBox.confirm