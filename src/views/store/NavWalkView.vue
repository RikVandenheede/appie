<template>
  <div class="container-background">
    <main class="store-navigation" v-show="navigation">
      <div class="store-navigation-content">
        <div class="store-navigation-left">
          <div class="store-navigation-arrow">
            <img
              src="/images/svg/arrow-left.svg"
              alt="store-navigation arrow left"
            />
            <!-- <img
						src="/images/svg/arrow-right.svg"
						alt="store-navigation arrow right"
					/> -->
          </div>
          <div class="store-navigation-text">
            <div>
              <h2>Peren</h2>
              <h2 class="nav-white">rechts</h2>
              <h2 class="nav-white">1 meter</h2>
              <br />
              <h2 class="nav-white">STELLING: 5</h2>
              <h2 class="nav-white">SCHAP: 3</h2>
            </div>
          </div>
        </div>
        <div class="store-navigation-right">
          <div class="store-navigation-">
            <img src="/images/svg/navigation-map.svg" alt="navigation map" />
          </div>
        </div>
      </div>
    </main>

    <aside class="shoppinglist-container" v-show="shoppinglist">
      <div class="leading">Boodschappenlijst:</div>
      <div class="shoppinglist-content">
        <ul class="shoppinglist-list">
          <li class="list-item">
            Dit wordt een heel lang list item wat waarschijnlijk nooit zo lang
            zal zijn.
          </li>
          <li class="list-item">Appelen</li>
          <li class="list-item">Peren</li>
          <li class="list-item">Bananen</li>
          <li class="list-item">Item item</li>
          <li class="list-item">item item</li>
          <li class="list-item">item item item</li>
          <li class="list-item">item item item item</li>
          <li class="list-item">
            Dit wordt een heel lang list item wat waarschijnlijk nooit zo lang
            zal zijn.
          </li>
          <li class="list-item">item item item item</li>
        </ul>
      </div>
    </aside>

    <div class="toggler-shoppinglist" @click="toggleList()">
      <div class="toggler-content">
        <h4 class="toggler-headline">
          Tik hier om boodschappenlijst te {{ this.message }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// import WeirdChamp from "@/components/store/atoms/Weirdchamp.vue";
// import Navigation from "@/components/store/molecules/Navigation.vue";

export default defineComponent({
  name: "NavWalkView",
  components: {},
  data() {
    return {
      navigation: true,
      shoppinglist: false,
      message: "openen",
    };
  },
  methods: {
    toggleList() {
      this.navigation = !this.navigation;
      this.shoppinglist = !this.shoppinglist;

      if (this.navigation === true) return (this.message = "openen");
      return (this.message = "sluiten");
    },
  },
});
</script>

<style></style>
