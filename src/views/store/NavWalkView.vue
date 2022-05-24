<template>
	<div class="store-container">
		<div v-show="!success">
			<NavWalkMain
				:navigation="this.navigation"
				:list="this.list"
				@click="successOn()"
			/>
			<NavWalkAside :shoppinglist="this.shoppinglist" />
		</div>

		<div class="store-succes" v-show="success">
			<h1 v-if="this.list.length">Uw product werd gescand</h1>
			<h1 v-else>
				Alle producten werden gescand, <br />
				u kunt
				<router-link
					to="/qr-kassa"
					v-if="!this.list.length"
					class="white"
				>
					naar de kassa
				</router-link>
			</h1>
			<Success @click="successOff()" />
		</div>

		<div
			class="toggler-shoppinglist"
			@click="toggleList()"
			v-show="!success"
		>
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
import NavWalkMain from '@/components/store/partials/NavWalkMain.vue';
import NavWalkAside from '@/components/store/partials/NavWalkAside.vue';

import Success from '@/components/store/partials/Success.vue';

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'NavWalkView',
	components: {
		NavWalkMain,
		NavWalkAside,
		Success,
	},

	data() {
		return {
			navigation: true,
			shoppinglist: false,
			message: 'openen',
			success: false,
			list: [
				{
					item: 'Peren',
					direction: 'links',
					rack: 5,
					shelf: 3,
				},
				{
					item: 'Appelen',
					direction: 'rechts',
					rack: 10,
					shelf: 1,
				},
				{
					item: 'Bananen',
					direction: 'links',
					rack: 12,
					shelf: 2,
				},
				{
					item: 'Wortelen',
					direction: 'rechts',
					rack: 15,
					shelf: 1,
				},
			],
			newList: [],
		};
	},
	methods: {
		toggleList() {
			this.navigation = !this.navigation;
			this.shoppinglist = !this.shoppinglist;

			if (this.navigation === true) return (this.message = 'openen');
			return (this.message = 'sluiten');
		},
		successOn() {
			this.success = true;
		},
		successOff() {
			this.success = false;
			this.list.shift();
		},
	},
});
</script>

<style></style>
