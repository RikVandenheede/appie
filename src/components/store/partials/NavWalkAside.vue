<template>
	<aside class="shoppinglist-container" v-show="shoppinglist">
		<div class="store-leading">Boodschappenlijst</div>
		<div class="shoppinglist-content">
			<ul class="shoppinglist-list">
				<li
					v-for="item in list"
					:key="item.id"
					class="shoppinglist-item"
				>
					{{ item.item }}
				</li>
			</ul>
		</div>
	</aside>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'NavWalkAside',
	props: {
		navigation: Boolean,
		shoppinglist: Boolean,
		list: Object,
	},
});
</script>
