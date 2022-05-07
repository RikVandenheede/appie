<template>
	<main>
		<h1>Dit is de check view.</h1>
		<h1>Product werd ingescand.</h1>
		<h1>Alles werd gescand, <br>
		u kunt naar de kassa.</h1>
		
        
        <Check />
	</main>
</template>

<script>
import { defineComponent } from 'vue';
import Check from '@/components/store/Check.vue';

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'CheckView',
	components: {
		Check,
	},
})
</script>
