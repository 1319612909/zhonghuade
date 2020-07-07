<template>
	<view class="">
		<view class="cu-bar tabbar bg-white">
			<view class="action " :class="active=='home'? 'text-blue' : 'text-black'" @click="setActive('home')">
				<view class="cuIcon-homefill"></view> 首页
			</view>
			<view class="action" :class="active=='information'? 'text-blue' : 'text-black'" @click="setActive('information')">
				<view class="cuIcon-similar"></view> 分类
			</view>
			<view class="action text-black add-action" @click="setActive('add')">
				<button class="cu-btn cuIcon-add bg-blue shadow"></button>
			</view>
			<view class="action" :class="active=='like'? 'text-blue' : 'text-black'" @click="setActive('like')">
				<view class="cuIcon-like"></view>
				待定
			</view>
			<view class="action" :class="active=='personInfo'? 'text-blue' : 'text-black'" @click="setActive('personInfo')">
				<view class="cuIcon-my"></view>
				我的
			</view>
		</view>
	</view>

</template>

<script>
	import {mapGetters  } from 'vuex'
	export default{
		data(){
			return{
				
			}
		},
		computed:{
			  ...mapGetters(['active'])
		},
		created(){
		},
		methods:{
			setActive(val){
				this.$store.commit('setActive',val)
			}
		}
	}
	
	
</script>

<style lang="scss" scoped>
		.cu-bar.tabbar{
			padding-bottom: 0;
		}
		.text-blue{
			color: #34b9c0;
		}
		.bg-blue{
			background-color: #34b9c0;
		}
		
</style>
