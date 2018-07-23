<template>
	<yt-view @click="$emit('click')" class="yt-palette-button" :class="`yt-palette-button__${Theme}`">
		<i class="iconfont icon-add"></i>
	</yt-view>
</template>

<script>
export default {
  name: "PaletteButton"
};
</script>

<style lang="css" type="text/postcss">
	.yt-palette-button {
		position: absolute;
		bottom: 30px;
		left: 50%;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		border-radius: 50%;
		font-size: 20px;
		transform: translateX(-50%);
    overflow: hidden;
	}
</style>
