<template>
	<main>
		<h1 class="leading">Plaats de QR code binnen het frame.</h1>
		<Scan />
	</main>
</template>

<script>
import { defineComponent } from 'vue'
import Scan from '@/components/store/Scan.vue'

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'ScanView',
	components: {
		Scan,
	},
})
</script>

<style></style>
