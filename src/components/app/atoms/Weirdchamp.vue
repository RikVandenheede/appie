<template>
  <div class="weirdchamp">
    <h2 class="weirdchamp__header">
      {{ person.name }} is een {{ person.description }}
    </h2>
    <p class="weirdchamp__content">
      Waarheid Waarheid Waarheid Waarheid Waarheid Waarheid
    </p>
    <img class="weirdchamp__img" src="../../../public/for.jpeg" alt="meme" />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WeirdChamp",
  props: {
    person: Object,
  },
});
</script>
