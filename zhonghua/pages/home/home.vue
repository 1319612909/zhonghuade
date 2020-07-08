<template>
	<view>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="item.type == TabCur ? 'cur text-blue ' : ''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-type="item.type">
					{{item.label}}
				</view>
			</view>
		</scroll-view>
		<Tab1 v-if="TabCur=='Tab1' "  ref="Tab1"></Tab1>
		<Tab2 v-if="TabCur=='Tab2' "  ref='Tab2'></Tab2>
	</view>
</template>

<script>
	import Tab1 from '../../components/home/tab1.vue'
	import Tab2 from '../../components/home/tab2.vue'
	export default{
		data(){
			return{
				TabCur:'Tab1',
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, 
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}
				
				],
				tabList:[
					{label:'自己',type:'Tab1'},
					{label:'内容',type:'Tab2'},
				]
			}
		},
		components:{Tab1,Tab2},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.type;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
			}
		}
	}
</script>

<style>
</style>
