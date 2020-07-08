<template>
	<view>
		<view class="cu-list menu">
			<view class=" cu-item grid col-1 text-center">
				<view class="action">
					<image :src="userinfo.headImg" mode="" class="userImg"></image>
				</view>
				<view>
					<text @tap="upload">修改头像</text>
				</view>
			</view>
			<view class="cu-item menuArrow ">
				<view class="content"><text class="text-grey">昵称</text></view>
				<view class="action text-right padding-right-sm">
					{{userinfo.wxName}}
					<!-- <input type="text" style="color: #222;" :v-model="obj.wxName" :value="obj.wxName" :disabled="disabledFlage" :focus="focusFlage" @blur="changeNickname"> -->
				</view>
			</view>
			<view class="cu-item menuArrow">
				<view class="content"><text class="text-grey">性别</text></view>
				<view class="action"><text>{{obj.sex}}</text></view>
			</view>
			<view class="cu-item arrow" @tap="tophoneNumber">
				<view class="content"><text class="text-grey">手机号码</text></view>
				<view class="action"><text>{{obj.mobilePhone}}</text></view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				userinfo:{},
				obj:{
					sex:'女',
					mobilePhone:'15010564490'
				},
				wxImg:''
			}
		},
		created(){
			console.log('123')
			this.userinfo = uni.getStorageSync('userInfo')
			console.log(this.userinfo)
		},
		methods:{
			upload(){
				const that =this
				uni.chooseImage({
				    count: 6, //默认9
				    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				    sourceType: ['album'], //从相册选择
				    success: function (res) {
				        console.log(JSON.stringify(res.tempFilePaths));
						that.userinfo.headImg = res.tempFilePaths
						uni.setStorageSync('userInfo',that.userinfo)
				    }
				});
			},
			tophoneNumber(){
			
			}
			
			
		}
	}
</script>

<style lang='scss' scoped>
	.grid{
		padding: 30upx!important;
		.action{
			height: 200upx;
			padding-top: 30upx;
			.userImg{
				max-width: 160upx;
				max-height: 160upx;
			}
		}
	}
	
</style>
