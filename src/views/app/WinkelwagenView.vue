<template lang="">
  <div>
    <Layout :options="{ title: 'Winkelwagentje', arrow: false, search: false }">
      <div class="item-list" v-if="inCart.length != 0">
        <WinkelwagenItem v-for="item in inCart" :key="item.id" :item="item" />
      </div>
      <div class="item-empty" v-else>
        <div class="item-empty__text">
          <p class="item-empty__text__title">Je winkelwagentje is leeg.</p>
          <p class="item-empty__text__text">
            klik hier voor items toe te voegen aan je winkelwagen
          </p>
        </div>
        <router-link v-bind:to="{ name: 'home' }" class="itemlink">
          <div class="item-empty__button">
            <p>Ga shoppen!</p>
          </div>
        </router-link>
      </div>
    </Layout>
    <Navigation :pageNumber="3" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
import WinkelwagenItem from "@/components/app/atoms/WinkelwagenItem.vue";
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";

//test data
//import { data } from "@/data.js";

export default defineComponent({
  name: "winkelwagenView",
  components: {
    WinkelwagenItem,
    Layout,
    Navigation,
  },
  data() {
    return {
      error: Object,
      inCart: [],
    };
  },
  created() {
    //add van test data
    //console.log(data);
    //let arry = [];
    //for (let i = 0; i < 50; i++) {
    //  arry.push(data[i]);
    //}
    //this.inCart = arry;
    //console.log(arry);
    //console.log(this.inCart);
    ////////////////////////////////////////////////////////////////////////////////////////////////

    // if (sessionStorage.getItem("winkelwagen") != undefined) {
    //   let inputVanStorage = JSON.parse(sessionStorage.getItem("winkelwagen"));
    //   this.inCart = inputVanStorage;
    // }

    this.myCounter();
  },
  methods: {
    myCounter() {
      setInterval(() => {
        if (sessionStorage.getItem("winkelwagen") != undefined) {
          let inputVanStorage = JSON.parse(
            sessionStorage.getItem("winkelwagen")
          );
          this.inCart = inputVanStorage;
        }
      }, 0);
    },
  },
});
</script>
<style lang=""></style>
