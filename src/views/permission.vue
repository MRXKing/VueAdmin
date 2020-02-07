<template>
	<div>
		<h1>管理员权限页面</h1>
		<p>只有用 admin 账号登录的才拥有管理员权限，才能进到这个页面，其他账号想进来都会跳到403页面，重新用管理员账号登录才有权限。</p>
		<p>想尝试一下，请<router-link to="/login" class="logout" style="color:#409EFF">退出登录</router-link>，随便输入个账号名，再进来试试看。</p>
	</div>
</template>

<script>
</script>

<style lang="stylus" scoped>
	div
		text-align center
		
	h1
		margin 30px 0
		
	p
	    line-height 30px
		margin-bottom 10px
		text-indent 2em
</style>
