<template>
  <main>
    <WeirdChamp :person="{ name: 'Kai', description: 'Knuppel' }" />
    <Navigation />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import WeirdChamp from "@/components/atoms/Weirdchamp.vue";
import Navigation from "@/components/molecules/Navigation.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    WeirdChamp,
    Navigation,
  },
});
</script>
