<template>
  <div class="content" ref="content">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.scroll = new IScroll(this.$refs.content,{
      mouseWheel: true,
      probeType: 3//设置了才会触发scroll事件
    });
    this.scroll.on('beforeScrollStart',()=>{
      this.scroll.refresh();
    });
  }
}
</script>
  .content {
    position: absolute;
    top: 1rem;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: hidden;
    background-color: #ebebeb;
  }

</style>
