<template>
	<div class="store-container">
		<h1 class="store-leading">Plaats de QR code binnen het frame.</h1>
		<QrScan />
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import QrScan from '@/components/store/QrScan.vue';

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'ScanView',
	components: {
		QrScan,
	},
});
</script>
