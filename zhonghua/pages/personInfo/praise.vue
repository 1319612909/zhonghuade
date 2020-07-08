<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" v-for="(item,index) in info " :key='index'>
				<view class="cu-avatar  lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
				<view class="content">
					<view class="text-grey">{{item.imgName}}</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.description}}
						</view> </view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{item.date}}</view>
					<view class="cuIcon-likefill  text-red lg"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:[
					{
						img:'',
						imgName:'风信子',
						description:'风信子..',
						date:'2020-07-08'
					},
					{
						img:'',
						imgName:'蝴蝶兰',
						description:'蝴蝶兰..',
						date:'2020-07-08'
					},
					{
						img:'',
						imgName:'薰衣草',
						description:'薰衣草..',
						date:'2020-07-08'
					},
					{
						img:'',
						imgName:'君子兰',
						description:'君子兰..',
						date:'2020-07-08'
					}
				]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.cu-list{
		background: #fff;
		margin-top: 20upx;
		padding: 15upx 0 60upx;
		min-height: 60vh;
	}
	.action{
		width: 160upx!important;
	}
</style>
