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
    <span
      class="first-child"
      @click="removeItemFromCart(item)"
      :class="{ toggled: isToggled }"
      >-</span
    >
    <span @click="additemtocart(item)" :class="{ toggled: isToggled }">+</span>
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
    additemtocart(item) {
      console.log(item);
      if (sessionStorage.getItem("winkelwagen") == undefined) {
        sessionStorage.setItem("winkelwagen", JSON.stringify([item]));
      } else {
        let inputVanStorage = JSON.parse(sessionStorage.getItem("winkelwagen"));
        const itemInStorageMetZelfdeID = inputVanStorage.filter(
          (x) => x.id == item.id
        );

        if (itemInStorageMetZelfdeID.length == 1) {
          itemInStorageMetZelfdeID[0].amount++;
          sessionStorage.setItem(
            "winkelwagen",
            JSON.stringify(inputVanStorage)
          );
        } else {
          inputVanStorage.push(item);
          sessionStorage.setItem(
            "winkelwagen",
            JSON.stringify(inputVanStorage)
          );
        }
      }
    },
    removeItemFromCart(item) {
      console.log(item);
      let inputVanStorage = JSON.parse(sessionStorage.getItem("winkelwagen"));
      const itemInStorageMetZelfdeID = inputVanStorage.filter(
        (x) => x.id == item.id
      );

      if (itemInStorageMetZelfdeID.length == 1) {
        itemInStorageMetZelfdeID[0].amount--;
        sessionStorage.setItem("winkelwagen", JSON.stringify(inputVanStorage));
      }

      if (itemInStorageMetZelfdeID[0].amount === 0) {
        const overgeblevenItems = inputVanStorage.filter(
          (x) => x.id != item.id
        );
        sessionStorage.setItem(
          "winkelwagen",
          JSON.stringify(overgeblevenItems)
        );
      }
    },
  },
});
</script>
<style lang=""></style>
