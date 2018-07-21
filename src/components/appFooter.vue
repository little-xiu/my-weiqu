<template>
  <tab-bar class="footer">
    <tab-item id="0" class="foot-item">
        <span class="img1" slot="icon">
        	<img src="../../public/img/xhdpi/安卓 copy 16.png">
        </span>
        首页
    </tab-item>
    <tab-item id="1" class="foot-item">
        <i slot="icon">❤</i>
        关注
    </tab-item>
    <tab-item id="1" class="foot-item">
    	<span class="img-middle">
    		<img src="../../public/img/xhdpi/安卓 copy 31.png">
    	</span>  
    </tab-item>
    <tab-item id="2" class="foot-item">
        <i slot="icon">❤</i>
        消息
    </tab-item>
    <tab-item id="2" class="foot-item">
        <i slot="icon">❤</i>
        我
    </tab-item>
	</tab-bar>
</template>

<style scoped>
	img {
		width: 100%;
	}
	.footer {
		position: absolute;
		width: 100%;
		height: 1.2rem;
		display: flex;
		bottom: 0;
		left: 0;
		background-color: #fff;
	}
	.foot-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.foot-item span {
		display: inline-block;
	}
	.img-middle {
		width: .8rem;
		height: .8rem;
	}
	.img-middle img {
		width: 100%;
	}
	.img1 {
		width: .6rem;
		height: .52rem;
	}
</style>
