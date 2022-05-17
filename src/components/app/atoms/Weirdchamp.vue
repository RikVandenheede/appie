<template>
  <div class="weirdchamp">
    <h2 class="weirdchamp__header">
      {{ person.name }} is een {{ person.description }}
    </h2>
    <p class="weirdchamp__content">
      Waarheid Waarheid Waarheid Waarheid Waarheid Waarheid
    </p>
<<<<<<< HEAD
    <img class="weirdchamp__img" src="/public/for.jpeg" alt="meme" />
=======
    <img class="weirdchamp__img" src="../../../../public/for.jpeg" alt="meme" />
>>>>>>> a73825a2d61f6ab65deb64954d24b537e3a1627a
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
