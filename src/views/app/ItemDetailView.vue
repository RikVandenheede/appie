<template lang="">
    <div class="container">
        <Layout :options="{ title: '', arrow: true, search: false, }">
            <div class="itemdetail">
                <div class="itemdetail__img">
                    <img :src="item.previewImg">
                </div>
                <div class="itemdetail__text">
                    <h3>{{item.name}}</h3>
                    <p>{{item.brand}}</p>
                    <p class="itemdetail__text__beschrijving">{{item.description}}</p>
                    <p class="itemdetail__text__voedselwaarde">NutriScore: {{item.nutriScore}}</p>
                </div>
            </div>
        </Layout>
        <Navigation />
    </div>
</template>
<script>
import {data} from "@/data.js";
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";

export default {
    props: ['id'],
    data() {
        return {
            item: null,
        }
    },
    components: {
        Layout,
        Navigation
    },
    created(){
        let ItemOnID  = data.filter(x => x.id == this.id);
        this.item = ItemOnID[0]
    }
}
</script>
<style scoped>
    
</style>