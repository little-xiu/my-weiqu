<template>
	<header class="header">
		<div class="left-item">
			<slot name="head-left"></slot>
		</div>
		<div class="right-item">
			<slot name="head-right"></slot>
		</div>
	</header>
</template>
<script type="text/javascript">
	export default {

	}
</script>
<style scoped>
	.header {
		display: flex;
		position: absolute;
		height: .96rem;
		line-height: .96rem;
		width: 100%;
	}
	.left-item, .right-item {
		flex: 1;
		font-size: .36rem;
	}
</style>