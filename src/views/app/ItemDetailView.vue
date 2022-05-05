<template lang="">
    <div class="container">
        <Layout :options="{ title: '', arrow: true, search: false, }">
            <div class="itemdetail__img">
                <img :src="item.previewImg">
            </div>
            <div class="itemdetail__text">
                <h3>{{item.name}}</h3>
                <p>{{item.brand}}</p>
                <p class="beschrijving">{{item.description}}</p>
                <p class="voedselwaarde">NutriScore: {{item.nutriScore}}</p>
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
    .container {overflow: hidden}
    /* TODO: dit moet nog naar sas gedaan worden + moet nog defig gemaakt worden */
    .itemdetail__img{
        max-width: 350px;
        max-height: 300px;
        height:300px;
        display:flex;
        justify-content: center;
        
    }
    img{ 
        height: 300px;
        min-width: 350px;
        max-width: 350px;
        object-fit: contain;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .itemdetail__text{
        margin-top:60px;
    }
    .beschrijving{
        margin-top:20px;
    }
    .voedselwaarde{
        margin-top:25px;
    }
</style>