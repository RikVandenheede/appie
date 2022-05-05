<template lang="">
<router-link v-bind:to="{ name: 'ItemDetailView', params: { id: item.id } }" class="itemlink">
  <div class="winkewagen-item">
    <div class="winkewagen-item__img" >
      <img :src="item.previewImg">
    </div>
    <div class="winkewagen-item__text">
      <p class="winkewagen-item__text__name">{{item.name}}</p>
      <p class="winkewagen-item__text__brand">{{item.brand}}</p>
    </div>
  </div>
</router-link>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WinkelwagenItem",
  props: {
    item: Object,
  },
  created() {
    console.log("ITEM CHECK   -> " + this.item.id)
  }
});
</script>
<style lang="">
  
</style>