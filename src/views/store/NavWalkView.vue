<template>
	<div class="store-container">
		<NavWalk />

		<div class="toggler-shoppinglist" @click="toggleList()">
			<div class="toggler-content">
				<h4 class="toggler-headline">
					Tik hier om boodschappenlijst te {{ this.message }}
				</h4>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';

import NavWalk from '@/components/store/NavWalk.vue';

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'NavWalkView',
	components: {
		NavWalk,
	},
	props: {},
	data() {
		return {
			navigation: true,
			shoppinglist: false,
			message: 'openen',
		};
	},
	methods: {
		toggleList() {
			this.navigation = !this.navigation;
			this.shoppinglist = !this.shoppinglist;

			if (this.navigation === true) return (this.message = 'openen');
			return (this.message = 'sluiten');
		},
	},
});
</script>

<style></style>
