<template lang="">
    <div>
        <h2>{{item.brand}}</h2>
        <p>xd</p>
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