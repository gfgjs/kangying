<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">

/* 每个页面公共css */
	*,
	page,
	view,
	input,
	button {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	// 富文本中的图片最大宽度，防止超出屏幕，需使用document加载此类名
	.rich-text-img-width {
		max-width: 100%;
	}

	.linear-background {
		// background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
		background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
	}

	.box-shadow {
		box-shadow: 0px 0px 19px 2px rgba(11, 126, 255, 0.1)
	}

	.price {
		color: #F71A1A;
	}

	.bold {
		font-weight: bold;
	}

	.ellipsis {
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
		background-color: $base-background-color;
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
		background-color: $base-color;
		position: absolute;
		left: 0;
		background: $base-color;
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
		// box-shadow: 0 0 12px rgba(25, 133, 253, .2);
		box-shadow: 0px 0px 19px 1px rgba(112, 216, 201, 0.1);
		// background-image: linear-gradient(114deg, rgba(112, 155, 255, 1.0) 0%, $base-color 74%);
		background-image: linear-gradient(114deg, #70d8c9 0%, $base-color 74%);
	}

	.button-cancel {
		background: rgba(233, 234, 235, 1);
		color: #7C7C7C;
		box-shadow: 0px 0px 19px 1px rgba(233, 234, 235, .4);
	}

	.button:active {
		opacity: .8;
		// box-shadow: 0 0 2px $base-color;
	}
</style>
