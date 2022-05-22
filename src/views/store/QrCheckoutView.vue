<template>
	<div class="store-container">
		<h1 class="store-leading">
			Scan de QR code aan de kassa om af te rekenen.
		</h1>
		<QrCheckout />
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import QrCheckout from '@/components/store/QrCheckout.vue'
// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'QrView',
	components: { QrCheckout },
});
</script>
