<template>
	<main class="store-navigation" v-show="navigation">
		<div class="store-navigation-content">
			<div class="store-navigation-left">
				<div class="store-navigation-arrow">
					<img
						src="/images/svg/arrow-left.svg"
						alt="store-navigation arrow left"
					/>
					<!-- <img
						src="/images/svg/arrow-right.svg"
						alt="store-navigation arrow right"
					/> -->
				</div>
				<div class="store-navigation-text">
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
			<div class="store-navigation-right">
				<div class="store-navigation-">
					<img
						src="/images/svg/navigation-map.svg"
						alt="navigation map"
					/>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'NavWalkMain',
	props: {},
});
</script>
