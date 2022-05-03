<template lang="">
    <div>
        <Layout :options="{ title: 'Winkelwagentje', arrow: false, search: false }">
            <div class="" v-if="inCart != null">
                <WinkelwagenItem v-for="item in inCart" :key="item.brand" :item="item" />
            </div>
            <div class="" v-else>
                <p>Je winkelwagentje is leeg.</p>
            </div>
        </Layout>
        <Navigation />
    </div>
</template>
<script>
import { defineComponent } from "vue";
import WinkelwagenItem from "@/components/app/atoms/WinkelwagenItem.vue";
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";

//test data
import {data} from "@/data.js";

export default defineComponent({
  name: "winkelwagenView",
  components: {
    WinkelwagenItem,
    Layout,
    Navigation
  },
  data() {
    return {
      error: Object,
      inCart:[]
    }
  },
  created() {
    //add van test data
    console.log(data);
    let arry = [];
    for (let i = 0; i < 10; i++) {
        arry.push(data[i])
    }
    this.inCart = arry;
    console.log(arry)
    console.log(this.inCart)
  }
});
</script>
<style lang="">
    
</style>