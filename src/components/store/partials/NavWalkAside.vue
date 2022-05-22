<template>
	<aside class="shoppinglist-container" v-show="shoppinglist">
		<div class="store-leading">Boodschappenlijst:</div>
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
import { defineComponent } from 'vue';

export default defineComponent({
	// eslint-disable-next-line vue/multi-word-component-names
	name: 'NavWalkAside',
	props: {},
});
</script>
