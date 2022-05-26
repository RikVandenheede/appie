<template>
	<div class="store-container">
		<div class="store-checkout" v-show="checkout">
			<h1 class="store-leading">
				Scan de QR code aan de kassa
				<br />
				om af te rekenen
			</h1>
			<QrCheckout @click="endingOn()" />
		</div>
		<div class="store-ending" v-show="ending">
			<img
				src="images/images/ending.png"
				alt="ending scene bloody knife"
			/>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import QrCheckout from '@/components/store/QrCheckout.vue';
// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'QrView',
	components: { QrCheckout },
	data() {
		return {
			checkout: true,
			ending: false,
		};
	},
	methods: {
		endingOn() {
			this.checkout = false;
			this.ending = true;
		},
	},
});
</script>
