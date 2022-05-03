<template>
  <div class="main">{{ title.title }}</div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
  props: {
    title: Object,
  },
});
</script>
