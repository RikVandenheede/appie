<template lang="">
  <div class="myBigZiggy">
    <div class="winkewagen-item" :class="{ toggled: isToggled }">
      <div class="slider-toggler" @click="toggleAnimation(isToggled)">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>
      <div class="winkewagen-item__img">
        <img :src="item.previewImg" />
      </div>
      <div class="winkewagen-item__text">
        <p class="winkewagen-item__text__name">{{ item.name }}</p>
        <p class="winkewagen-item__text__brand">{{ item.brand }}</p>
      </div>
      <div class="winkewagen-item__hoeveelheid">
        <p>{{ item.amount }}</p>
      </div>
    </div>
    <span class="first-child" :class="{ toggled: isToggled }">-</span>
    <span :class="{ toggled: isToggled }">+</span>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WinkelwagenItem",
  props: {
    item: Object,
  },
  data() {
    return {
      isToggled: false,
    };
  },
  created() {
    console.log("ITEM CHECK   -> " + this.item.id);
  },
  methods: {
    toggleAnimation(toggler) {
      this.isToggled = !toggler;
    },
  },
});
</script>
<style lang=""></style>
