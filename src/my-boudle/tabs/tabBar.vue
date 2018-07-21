<template>
<nav class="tabs">
    <slot></slot>
</nav>
</template>
<script>
export default {
    name: 'tab-bar',//可设置为组件的名字,好统一使用组件
    mounted(){
        console.log(this);//组件对象
        //过滤出除了空的之外的所有节点对象,即插入的所有TabItem
        // let slots = this.$slots.default.filter(item=>{
        //     return item.tag;
        // })
        // //节点对象的tabitem组件实例
        // let instanceArr = slots.map(slot=>{
        //     return slot.componentInstance;//VueComponent 即tab-item
        // })
        // //初始化时设置第一个为active状态
        // instanceArr[0].isActive = true;
        // //父组件监听事件,接收子组件的传值
        // this.$on('tab-item-select', (id)=>{
        //     console.log('监听到tab-item选中:'+id);
        //     //监听到所有的item中有一个item选中
        //     // 1.取消其他的item的选中状态
        //     instanceArr.map(instance=>{
        //         let instanceID = instance.id;
        //         // 2.选中点击的这个item，其他的取消
        //         if(instanceID == id){
        //             instance.isActive = true;
        //         }else{
        //             instance.isActive = false;
        //         }
        //     })
        // })
    }
}
</script>