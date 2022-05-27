<template>
  <Layout :options="{ title: 'Home', arrow: false, search: false }">
    <section class="home-search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="ionicon"
        viewBox="0 0 512 512"
      >
        <title>Search</title>
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="currentColor"
          stroke-miterlimit="10"
          stroke-width="32"
        />
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <!-- <label>Search...</label> -->
      <input type="text" name="" id="search" placeholder="Search..." />
    </section>

    <section class="home-korting">
      <img src="../../../public/spa.png" alt="spa" />
      <h2 class="home-korting__title">
        <div class="korting">Krijg tot</div>
        10% korting
      </h2>
    </section>

    <section class="home-categories">
      <h2 class="home-categories__title">Categorie</h2>
      <div class="home-categories__items">
        <CategoryItem title="Groenten" />
        <CategoryItem title="Vlees" />
        <CategoryItem title="Zuivel" />
        <CategoryItem title="Vis" />
        <CategoryItem title="Fruit" />
        <CategoryItem title="Huishouden" />
        <CategoryItem title="Keukengerei" />
        <CategoryItem title="Tuingerief" />
      </div>
    </section>
  </Layout>
  <Navigation :pageNumber="3" />
</template>

<script>
import { defineComponent } from "vue";
import Navigation from "@/components/app/molecules/Navigation.vue";
import Layout from "@/components/app/atoms/Layout.vue";
import CategoryItem from "@/components/app/atoms/CategoryItem.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Navigation,
    Layout,
    CategoryItem,
  },
});
</script>
