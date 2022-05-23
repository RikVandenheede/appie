<template>
	<div class="qr-scanner" @click="click">
		<div class="box">
			<div class="line"></div>
			<div class="angle"></div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'Scan',
	props: {},
});
</script>
