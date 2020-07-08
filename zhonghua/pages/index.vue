<template>
	<view class="container">
		<view class="mainBox">
			<Home v-if="active == 'home'"></Home>
			<Like v-if="active == 'like'"></Like>
			<add v-if="active == 'add'"></add>
			<Information v-if="active == 'information'"></Information>
			<PersonInfo v-if="active == 'personInfo'"></PersonInfo>
		</view>
		<view class="navBar">
			<navBar></navBar>
		</view>
	</view>
</template>

<script>
	import navBar from '../components/navBar.vue'
	import Home from './home/home.vue'
	import Like from './like/like.vue'
	import Add from './add/add.vue'
	import Information from './information/information.vue'
	import PersonInfo from './personInfo/personInfo.vue'
	import {mapGetters  } from 'vuex'
	export default {
		data() {
			return {
				
			}
		},
		methods: {

		},
		components:{navBar,Home,Like,Add,Information,PersonInfo},
		computed:{
			...mapGetters(['active'])
		}
	}
</script>

<style>
	.intro {
		font-size: 14px;
		line-height: 24px;
	}
	.container{
		min-height: 100vh;
	}
	.mainBox{
		padding-bottom: 100upx;
		min-height:calc(100vh - 100upx) ;
		background-color: #f5f5f5;
	}
	.navBar{
		height: 100upx;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
