<template>
  <Layout :options="{ title: 'Home', arrow: true, search: true }" />
  <Navigation />
</template>

<script>
import { defineComponent } from "vue";
// import WeirdChamp from "@/components/app/atoms/Weirdchamp.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";
import Layout from "@/components/app/atoms/Layout.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // WeirdChamp,
    Navigation,
    Layout,
  },
});
</script>
