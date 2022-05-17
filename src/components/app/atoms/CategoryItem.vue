<template>
  <div class="category-item">
    <div class="category-item__top">
      <img
        :class="imageClassName"
        src="../../../../public/groenten.png"
        alt="category"
      />
    </div>
    <div class="category-item__bottom">
      <h3 class="category-item__title">{{ title }}</h3>
    </div>
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
