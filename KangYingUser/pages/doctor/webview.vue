<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="https://kefu.loopyun.com"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style lang="less">

</style>
