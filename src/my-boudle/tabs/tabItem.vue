<template>
<li class="tab-item" :class="{active: isActive}" @click="tabAction()">
    <span class="icon">
        <slot name="icon"></slot>
    </span>
    <span class="title">
        <slot></slot>
    </span>
</li>
</template>

<script>
export default {
    name: 'tab-item',
    props: {
        id: String//父组件引用这个组件时在标签上绑定了属性id,组件内部接收
    },
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        tabAction(){
            console.log('tabitem点击了');
            console.log(this);
            this.isActive = true;
            // 告诉父标签/父节点，也就是tabbar，当前的tabitem选中了      
            //获得父节点：this.$parent
            this.$parent.$emit('tab-item-select', this.id);
        }
    }
}
</script>
<style scoped>
	.title {
		margin-top: .1rem;
		font-size: .2rem;
		height: .28rem;
		line-height: .28rem;
	}
	.icon {
		margin-top: .18rem;
	}
</style>
