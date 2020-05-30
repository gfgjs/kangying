<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import url("//at.alicdn.com/t/font_1852111_6fcjd2cr1bm.css");

	/* 每个页面公共css */
	*,
	page,
	view,
	input,
	button {
		box-sizing: border-box;
	}
	
	.price{
		color: #F71A1A;
	}
	.bold{
		font-weight: bold;
	}
	.ellipsis{
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	/* 顶部标题栏占位高度 */
	.nav-place {
		height: var(--status-bar-height);
		padding-top: 44px;
		box-sizing: content-box;
	}

	.common-place {
		height: 10px;
	}

	.foot-place {
		height: 50px;
	}

	.row-title {
		padding: 20px;
		display: flex;
		align-items: center;
		font-size: 16px;
		font-weight: bold;
	}

	.row-title::before {
		content: '';
		width: 4px;
		height: 20px;
		background-color: red;
		position: absolute;
		left: 0;
		background: rgba(29, 127, 253, 1);
		box-shadow: 0px 8px 21px 0px rgba(36, 131, 253, 0.3);
		border-top-right-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	.title {
		font-weight: bold;
		font-size: 16px;
	}

	.little-title {
		font-size: 13px;
		color: #5D5D5D;
	}

	.button {
		background-color: $base-color;
		color: white;
		width: 36vw;
		font-size: 14px;
		height: 36px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4px;
		transition: all .1s linear;
	}
	.button-cancel{
		background:rgba(233,234,235,1);
		color: #7C7C7C;
	}
	.button:active {
		opacity: .8;
		box-shadow: 0 0 2px $base-color;
	}
</style>
