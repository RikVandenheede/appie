<template>
	<main class="store-navigation" v-show="navigation">
		<div class="store-navigation-content">
			<div class="store-navigation-left">
				<div class="store-navigation-arrow">
					<img
						v-if="this.list[0].direction === 'links'"
						src="/images/svg/arrow-left.svg"
						alt="store-navigation arrow left"
					/>
					<img
						v-else
						src="/images/svg/arrow-right.svg"
						alt="store-navigation arrow right"
					/>
				</div>
				<div v-if="this.list.length" class="store-navigation-text">
					<h2 class="store-navigation-headline">
						{{ this.list[0].item }}
					</h2>
					<h2 class="nav-white">
						{{ this.list[0].direction }}
					</h2>
					<h2 class="nav-white" v-if="this.list.length > 2">
						over {{ this.list[1].rack - this.list[0].rack }} meter
					</h2>
                    <h2 class="nav-white" v-else>over {{this.list[0].rack}} meter</h2>
					<br />
					<h2 class="nav-white uppercase">
						STELLING: {{ this.list[0].rack }}
					</h2>
					<h2 class="nav-white uppercase">
						SCHAP: {{ this.list[0].shelf }}
					</h2>
				</div>
			</div>
			<div class="store-navigation-right">
				<div class="store-navigation-">
					<img
						v-if="this.list[0].direction == 'rechts'"
						src="/images/svg/navigation-map-right.svg"
						alt="navigation map"
					/>
					<img
						v-else
						src="/images/svg/navigation-map-left.svg"
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
