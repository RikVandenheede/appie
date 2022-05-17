<template>
	<main>
		<h1 class="leading">Scan de QR code aan de kassa om af te rekenen.</h1>
		<Qr />
	</main>
</template>

<script>
import { defineComponent } from 'vue'
import Qr from '@/components/store/Qr.vue'

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'QrView',
	components: { Qr },
})
</script>
