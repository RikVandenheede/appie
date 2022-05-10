<template>
  <div class="category-item">
    <img :class="imageClassName" :src="imageSrource" alt="" />
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryItem",
  props: {
    title: String,
    image: String,
  },
  computed: {
    imageClassName() {
      return `category-item__${this.title.toLowerCase()}`;
    },
    imageSrource() {
      return `../../../../public/${this.image}.png`;
    },
  },
});
</script>
