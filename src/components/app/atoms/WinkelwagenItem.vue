<template lang="">
    <div>
        <h3>{{item.name}}</h3>
        <p>{{item.brand}}</p>
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