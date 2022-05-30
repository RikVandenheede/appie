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
          style="background-color: #fee1e1; width: 100%"
          src="../../../../public/vlees.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Vis'"
          :class="imageClassName"
          style="background-color: #e1f3fe; width: 100%"
          src="../../../../public/vis.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Zuivel'"
          :class="imageClassName"
          style="background-color: #fef9e1; width: 100%"
          src="../../../../public/zuivel.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Groenten'"
          :class="imageClassName"
          style="background-color: #e1fee3; width: 100%"
          src="../../../../public/groenten.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Fruit'"
          :class="imageClassName"
          style="background-color: #e1fee8; width: 100%"
          src="../../../../public/fruit.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Huishouden'"
          :class="imageClassName"
          style="background-color: #e1f3fe; width: 100%"
          src="../../../../public/huisgerei.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Keukengerei'"
          :class="imageClassName"
          style="background-color: #fef9e1; width: 100%"
          src="../../../../public/keukengerei.png"
          alt="category"
        />
        <img
          v-else-if="title == 'Tuingerief'"
          :class="imageClassName"
          style="background-color: #e1fee8; width: 100%"
          src="../../../../public/tuingerief.png"
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
