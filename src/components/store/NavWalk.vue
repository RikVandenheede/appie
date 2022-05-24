<template>
	<NavWalkMain />
	<NavWalkAside />
</template>

<script>
import { defineComponent } from 'vue';
import NavWalkMain from '@/components/store/partials/NavWalkMain.vue';
import NavWalkAside from '@/components/store/partials/NavWalkAside.vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'NavWalk',
	component: {
		NavWalkMain,
		NavWalkAside,
	},
	props: {},
});
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
