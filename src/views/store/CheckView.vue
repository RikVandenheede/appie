<template>
	<main>
		<h1 class="leading">Product werd ingescand.</h1>
		<Check />
	</main>
</template>

<script>
import { defineComponent } from 'vue'
import Check from '@/components/store/Check.vue'

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'CheckView',
	components: {
		Check,
	},
})
</script>
