<template>
  <router-link
    v-bind:to="{ name: 'categoryPage', params: { category: this.title } }"
    class="itemlink"
  >
    <div class="category-item">
      <div class="category-item__top">
        <img
          v-if="title == 'Vlees'"
          :class="imageClassName"
          src="../../../../public/vlees.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Vis'"
          :class="imageClassName"
          src="../../../../public/vis.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Zuivel'"
          :class="imageClassName"
          src="../../../../public/zuivel.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Groenten'"
          :class="imageClassName"
          src="../../../../public/groenten.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Fruit'"
          :class="imageClassName"
          src="../../../../public/fruit.png"
          alt="category"
        />
      </div>
      <div class="category-item__bottom">
        <h3 class="category-item__title">{{ title }}</h3>
      </div>
    </div>
  </router-link>
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
  },
});
</script>
