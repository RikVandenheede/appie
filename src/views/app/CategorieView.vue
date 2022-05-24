<template lang="">
  <div>
    <Layout
      :options="{
        title: this.$route.params.category,
        arrow: true,
        search: false,
      }"
    >
      <div class="marinbottemnest">
        <CategoryPageItem
          v-for="item in categoryItems"
          :key="item.id"
          :item="item"
        />
      </div>
    </Layout>
    <Navigation />
  </div>
</template>
<script>
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";
import CategoryPageItem from "@/components/app/atoms/CategoryPageItem.vue";
import { data } from "@/data.js";

export default {
  name: "categoryPage",
  components: {
    Layout,
    Navigation,
    CategoryPageItem,
  },
  props: ["category"],
  created() {
    // console.log(this.$route.params.category);s
    let categoryName = this.$route.params.category;

    // console.log(data);
    let arry = data.filter((x) => x.category[0] == categoryName);

    this.categoryItems = arry;
    // console.log(arry);
    // console.log(this.categoryItems);
  },
  data() {
    return {
      categoryItems: [],
    };
  },
};
</script>
<style scoped>
.marinbottemnest {
  margin-bottom: 75px;
}
</style>
