<template lang="">
    <div>
        <h1>Winkelwagentje</h1>
        <WinkelwagenItem />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import WinkelwagenItem from "@/components/app/atoms/WinkelwagenItem.vue";

export default defineComponent({
  name: "winkelwagenView",
  components: {
    WinkelwagenItem
  },
  data() {
    return {
      error: Object,
      inCart:[]
    }
  },
  created() {
      
  }
});
</script>
<style lang="">
    
</style>