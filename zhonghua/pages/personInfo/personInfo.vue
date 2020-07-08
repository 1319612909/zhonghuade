<template>
	<view class="person">
		<view class="cu-list menu-avatar">
			<view class="cu-item">
				<view class="cu-avatar round lg" :style="{backgroundImage: 'url(' + user.headImg + ')'}"></view>
				<view class="content flex-sub">
					<view class="text-grey">{{user.wxName}}</view>
				</view>
			</view>
		</view>
		<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
			<view class="cu-item" :class="menuArrow?'arrow':''" @tap='goDatails'>
				<view class="content">
					<text class="cuIcon-friendfamous text-grey"></text>
					<text class="text-grey">个人信息</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''"  @tap='goCollect'>
				<view class="content">
					<text class="cuIcon-friendfavor text-grey"></text>
					<text class="text-grey">我的收藏</text>
				</view>
			</view>
			<view class="cu-item" :class="menuArrow?'arrow':''" @tap="goPraise">
				<view class="content">
					<text class="cuIcon-like text-grey"></text>
					<text class="text-grey">我已点赞</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				user:null,
				menuArrow:true
			}
		},
		created(){
			// uni.login({
			//   provider: 'weixin',
			//   success: function (loginRes) {
			//     console.log(loginRes);
			//   }
			// });
			
			this.getuserinfo()
			this.user = uni.getStorageSync('userInfo')
			
			
		},
		methods:{
			getuserinfo(msg){
				const that = this
					const userInfo = {}
					uni.getUserInfo({
					  provider: 'weixin',
					  success(infoRes) {
						  userInfo.headImg = infoRes.userInfo.avatarUrl
						  userInfo.wxName = infoRes.userInfo.nickName
						  uni.setStorageSync("userInfo",userInfo)
					  },
					  fail(err) {
						console.log(err)
					  }
					});
			},
			goDatails(){
				uni.navigateTo({
					url: '/pages/personInfo/datails'
				})
			},
			goCollect(){
				uni.navigateTo({
					url: '/pages/personInfo/collect'
				})
			},
			goPraise(){
				uni.navigateTo({
					url: '/pages/personInfo/praise'
				})
			}
		}
	}
</script>

<style lang='scss'>
	.person{
	}
</style>
