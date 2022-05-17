<template>
	<svg
		id="a"
		class="qrscan"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 176.42 176.32"
	>
		<path
			class="b"
			d="M.5,138.32v37.5H43.35m132.57-37.5v37.5h-42.85M138.42,.5h37.5V43.35M.5,38V.5H43.35"
		/>
		<path class="b" d="M.5,88.21H175.89M.5,106.86H175.89M.5,69.56H175.89" />
	</svg>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'QRscan ',
	props: {},
})
</script>

<style>
.list-item {
	color: white;
}

.b {
	fill: none;
	stroke: #46c663;
	stroke-miterlimit: 10;
}

.qrscan {
	max-width: 180px;
	height: auto;
}
</style>
