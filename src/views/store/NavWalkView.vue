<template>
	<main class="navigation">
		<div class="navigation-content" v-sho>
			<div class="navigation-left">
				<div class="navigation-arrow">
					<img
						src="/images/svg/arrow-left.svg"
						alt="navigation arrow left"
					/>
					<!-- <img
						src="/images/svg/arrow-right.svg"
						alt="navigation arrow right"
					/> -->
				</div>
				<div class="navigation-text">
					<div>
						<h2>Peren</h2>
						<h2 class="nav-white">rechts</h2>
						<h2 class="nav-white">1 meter</h2>
						<br />
						<h2 class="nav-white">STELLING: 5</h2>
						<h2 class="nav-white">SCHAP: 3</h2>
					</div>
				</div>
			</div>
			<div class="navigation-right">
				<div class="navigation-">
					<img
						src="/images/svg/navigation-map.svg"
						alt="navigation map"
					/>
				</div>
			</div>
		</div>

		<div class="shoppinglist-toggler" v-on:click="showOthers()">
			<div class="toggler-content">
				<h4 class="toggler-headline">
					Tik hier om boodschappenlijst te openen / sluiten
				</h4>
			</div>
		</div>
	</main>

	<aside class="shoppinglist-container" v-bind:style="{"display" }">
		<div class="leading">Boodschappenlijst:</div>
		<div class="shoppinglist-content">
			<ul class="shoppinglist-list">
				<li class="list-item">
					Dit wordt een heel lang list item wat waarschijnlijk nooit
					zo lang zal zijn.
				</li>
				<li class="list-item">Appelen</li>
				<li class="list-item">Peren</li>
				<li class="list-item">Bananen</li>
				<li class="list-item">Item item</li>
				<li class="list-item">item item</li>
				<li class="list-item">item item item</li>
				<li class="list-item">item item item item</li>
				<li class="list-item">
					Dit wordt een heel lang list item wat waarschijnlijk nooit
					zo lang zal zijn.
				</li>
				<li class="list-item">item item item item</li>
			</ul>
		</div>
	</aside>
</template>

<script>
import { defineComponent } from 'vue'

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'NavWalkView',
	components: {},
	data() {
		return {
			display1: 'inline-block',
			displayTwo: 'none',
		}
	},
	methods: {
		showOthers: function () {
			if (this.display1 == 'inline-block') {
				this.display1 = 'none'
			}

			// this.display = 'inline-block'
			// if (this.display == 'inline-block') {
			// 	this.display = 'none'
			// }
		},
	},
})
</script>

<style></style>
