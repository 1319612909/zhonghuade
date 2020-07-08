<template>
	<view>
		<view class="cu-list grid margin-top-sm col-3 no-border" >
			<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
				<view class='imgBox' :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
					<img :src="item.img" alt="" class="colImg">
				</view>
				<view>
					<text>{{item.name}}</text>
					<text class="cuIcon-"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				cuIconList: [{
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					color: 'red',
					badge: 120,
					name: '介绍1'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					color: 'orange',
					badge: 1,
					name: '介绍2'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
					color: 'yellow',
					badge: 0,
					name: '介绍3'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					color: 'olive',
					badge: 22,
					name: '介绍4'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
					color: 'cyan',
					badge: 0,
					name: '介绍5'
				}, {
					img: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg',
					color: 'blue',
					badge: 0,
					name: '介绍6'
				}],
				gridCol: 3,
			}
		},
		methods:{
			
		}
		
	}
</script>

<style lang='scss' scoped>
	.imgBox{
		padding: 30upx;
		height: 200upx;
		.colImg{
			max-height: 100%;
		}
	}
</style>
