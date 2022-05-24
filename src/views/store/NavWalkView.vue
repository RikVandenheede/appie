<template>
	<div class="store-container">
		<div v-show="!success">
			<Transition name="mainTrans">
				<NavWalkMain
					:navigation="this.navigation"
					:list="this.list"
					@click="successOn()"
				/>
			</Transition>
			<Transition name="asideTrans">
				<NavWalkAside
					:shoppinglist="this.shoppinglist"
					:list="this.list"
				/>
			</Transition>
		</div>

		<div class="store-succes" v-show="success">
			<h1 v-if="this.list.length > 1">Uw product werd gescand</h1>
			<h1 v-else>
				Alle producten werden gescand, <br />
				u kunt
				<router-link to="/qr-kassa" class="white">
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
					Tik hier om boodschappenlijst te
					{{ this.message }}
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
					item: 'DuckTape',
					direction: 'links',
					rack: 6,
					shelf: 3,
				},
				{
					item: 'Koksmes',
					direction: 'rechts',
					rack: 10,
					shelf: 1,
				},
				{
					item: 'Vuilniszakken',
					direction: 'links',
					rack: 12,
					shelf: 2,
				},
				{
					item: 'Touw',
					direction: 'rechts',
					rack: 1,
					shelf: 3,
				},
				{
					item: 'Bleekmiddel',
					direction: 'rechts',
					rack: 15,
					shelf: 1,
				},
				{
					item: 'Rubberen handschoenen',
					direction: 'rechts',
					rack: 6,
					shelf: 1,
				},
				{
					item: 'Dweilstok met emmer',
					direction: 'rechts',
					rack: 4,
					shelf: 1,
				},
			],
		};
	},
	mounted() {
		this.list.sort((a, b) => a.rack - b.rack);
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
			console.log(this.list);
		},
	},
});
</script>

<style scoped>
.mainTrans-enter-active,
.mainTrans-leave-active {
	transition: opacity 0.5s ease-in;
	-moz-transform: translateY(-200%);
	transform: translateY(-100%);
	transition: all 0.5s ease-in;
}

.mainTrans-enter-from,
.mainTrans-leave-to {
	opacity: 0;
}

.asideTrans-enter-active,
.asideTrans-leave-active {
	transition: opacity 0.5s ease-in;
	-moz-transform: translateY(200%);
	transform: translateY(100%);
	transition: all 0.5s ease-in;
}

.asideTrans-enter-from,
.asideTrans-leave-to {
	opacity: 0;
}
</style>
