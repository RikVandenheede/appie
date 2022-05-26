<template>
	<div class="store-container">
		<div class="store-qr-scan" v-show="qrScan">
			<h1 class="store-leading">Plaats de QR code binnen het frame</h1>
			<QrScan @click="loadingOn()" />
		</div>
		<div class="store-loading" v-show="loading">
			<h1 class="store-leading">Uw boodschappenlijst wordt ingeladen</h1>
			<Loading />
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import QrScan from '@/components/store/QrScan.vue';
import Loading from '@/components/store/partials/Loading.vue';

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'ScanView',
	components: {
		QrScan,
		Loading,
	},
	data() {
		return {
			qrScan: true,
			loading: false,
		};
	},
	methods: {
		loadingOn() {
			this.qrScan = false;
			this.loading = true;
			setTimeout(function () {
				window.location = 'http://127.0.0.1:8080/navwalk';
			}, 2000);
		},
	},
});
</script>
