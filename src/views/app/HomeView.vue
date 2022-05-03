<template>
  <main>
    <Layout :options="{ title: 'pog zog', arrow: true, search: true }">
    </Layout>
    <Navigation />
  </main>
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
