<template>
  <main class="layout">
    <div v-if="options.arrow || options.search" class="layout-topnavigation">
      <div v-if="options.arrow" class="layout-topnavigation__back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Back</title>
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="48"
            d="M328 112L184 256l144 144"
          />
        </svg>
      </div>
      <div v-if="options.search" lass="layout-topnavigation__search">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ionicon"
          viewBox="0 0 512 512"
        >
          <title>Search</title>
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
    </div>
    <h1 class="layout-topnavigation__title">{{ options.title }}</h1>
  </main>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  props: {
    options: Object,
  },
});
</script>
