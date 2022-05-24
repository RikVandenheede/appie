<template>
	<h1 class="leading">Booschappenlijst wordt ingeladen.</h1>
	<Loading />
</template>

<script>
import { defineComponent } from 'vue'
import Loading from '@/components/store/Loading.vue'

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
	name: 'LoadingView',
	components: {
		Loading,
	},
})
</script>
