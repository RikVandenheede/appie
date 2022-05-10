<template lang="">
    <div class="container">
        <Layout :options="{ title: '', arrow: true, search: false, }">
            <div class="itemdetail">
                <div class="itemdetail__img">
                    <img :src="item.previewImg">
                </div>
                <div class="itemdetail__text">
                    <div>
                        <h3>{{item.name}}</h3>
                        <p>{{item.brand}}</p>
                    </div>
                    <div class="itemdetail__text__addtocard-button" id="additemtocart-button">
                        <img src="../../../public/icons_app/addtocart.png">
                    </div>
                </div>
                <div class="itemdetail__beschrijving">
                    <p class="itemdetail__beschrijving__description">{{item.description}}</p>
                    <p class="itemdetail__beschrijving__nutriscore">NutriScore: {{item.nutriScore}}</p>
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