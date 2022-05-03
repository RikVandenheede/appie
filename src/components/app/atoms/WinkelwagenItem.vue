<template lang="">
    <div class="winkewagen-item">
        <div class="winkewagen-item__img" >
            <img :src="item.previewImg">
        </div>
        <div class="winkewagen-item__text">
            <p class="winkewagen-item__text__name">{{item.name}}</p>
            <p class="winkewagen-item__text__brand">{{item.brand}}</p>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "WinkelwagenItem",
  props: {
    item: Object
  },
});
</script>
<style lang="">
    
</style>