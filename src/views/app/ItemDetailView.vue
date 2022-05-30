<template lang="">
  <div class="container">
    <Layout :options="{ title: '', arrow: true, search: false }">
      <div class="itemdetail">
        <div class="itemdetail__img">
          <img :src="item.previewImg" />
        </div>
        <div class="itemdetail__text">
          <div class="itemdetail__text__titlebrand">
            <h3>{{ item.name }}</h3>
            <p>{{ item.brand }}</p>
          </div>
          <div
            class="itemdetail__text__addtocard-button"
            id="additemtocart-button"
            @click="additemtocart(item)"
          >
            <img src="../../../public/icons_app/addtocart.png" />
          </div>
        </div>
        <div class="itemdetail__beschrijving">
          <p class="itemdetail__beschrijving__title">
            Meer info over dit product
          </p>
          <p class="itemdetail__beschrijving__description">
            {{ item.description }}
          </p>
          <div v-if="item.nutriScore == 'a'">
            <img
              class="nutriscore"
              src="../../../public/icons_app/nutriscoreIcons/Nutri-score-A.svg"
            />
          </div>
          <div v-else-if="item.nutriScore == 'b'">
            <img
              class="nutriscore"
              src="../../../public/icons_app/nutriscoreIcons/Nutri-score-B.svg"
            />
          </div>
          <div v-else-if="item.nutriScore == 'c'">
            <img
              class="nutriscore"
              src="../../../public/icons_app/nutriscoreIcons/Nutri-score-C.svg"
            />
          </div>
          <div v-else-if="item.nutriScore == 'd'">
            <img
              class="nutriscore"
              src="../../../public/icons_app/nutriscoreIcons/Nutri-score-D.svg"
            />
          </div>
          <div v-else-if="item.nutriScore == 'e'">
            <img
              class="nutriscore"
              src="../../../public/icons_app/nutriscoreIcons/Nutri-score-E.svg"
            />
          </div>
          <div v-else>
            <p class="itemdetail__beschrijving__nutriscore"></p>
          </div>
        </div>
      </div>
    </Layout>
    <Navigation />
  </div>
</template>
<script>
import { data } from "@/data.js";
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";

export default {
  props: ["id"],
  data() {
    return {
      item: null,
    };
  },
  components: {
    Layout,
    Navigation,
  },
  created() {
    let ItemOnID = data.filter((x) => x.id == this.id);
    this.item = ItemOnID[0];
  },
  methods: {
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
  },
};
</script>
<style scoped></style>
