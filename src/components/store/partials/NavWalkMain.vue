<template>
	<main class="store-navigation" v-show="navigation">
		<div class="store-navigation-content">
			<div class="store-navigation-left">
				<div class="store-navigation-arrow">
					<div v-if="this.list[0].direction === 'links'">
						<img
							src="/images/svg/arrow-left.svg"
							alt="store-navigation arrow left"
						/>
					</div>
					<div v-else>
						<img
							src="/images/svg/arrow-right.svg"
							alt="store-navigation arrow right"
						/>
					</div>
				</div>
				<div class="store-navigation-text">
					<div v-if="this.list.length">
						<h2>
							{{ this.list[0].item }}
						</h2>
						<h2 class="nav-white">
							{{ this.list[0].direction }}
						</h2>
						<h2 class="nav-white">1 meter</h2>
						<br />
						<h2 class="nav-white">
							STELLING: {{ this.list[0].rack }}
						</h2>
						<h2 class="nav-white">
							SCHAP: {{ this.list[0].shelf }}
						</h2>
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
	components: {},
	props: {
		navigation: Boolean,
		shoppinglist: Boolean,
		list: Object,
	},
	data() {},
});
</script>
