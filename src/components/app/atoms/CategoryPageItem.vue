<template lang="">
    <div>
        <router-link v-bind:to="{ name: 'ItemDetailView', params: { id: item.id } }" class="itemlink">
            <div class="categorypage-item">
              <div class="categorypage-item__img" >
                <img :src="item.previewImg">
              </div>
              <div class="categorypage-item__text">
                <p class="categorypage-item__text__name">{{item.name}}</p>
                <p class="categorypage-item__text__brand">{{item.brand}}</p>
              </div>
              <div class="categorypage-item__hoeveelheid" @click="additemtocart(item)"> 
                <!-- TODO: as ik hier op die add click moet die niet naar da ander scherm gaan -->
                <img src="../../../../public/icons_app/addtocart-green.png">
              </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
    item: Object,
    },
    created() {
      console.log("ITEM CHECK   -> " + this.item.id)
    },
    methods: {
      additemtocart(item){
            console.log(item)
            if(sessionStorage.getItem("winkelwagen") == undefined){
                sessionStorage.setItem('winkelwagen',JSON.stringify([item]));
            }else{
                let inputVanStorage = JSON.parse(sessionStorage.getItem('winkelwagen'));
                const itemInStorageMetZelfdeID =  inputVanStorage.filter((x) =>  x.id == item.id );

                if(itemInStorageMetZelfdeID.length == 1){
                  itemInStorageMetZelfdeID[0].amount++;
                  sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
                }else{
                  inputVanStorage.push(item);
                  sessionStorage.setItem('winkelwagen',JSON.stringify(inputVanStorage));
                }
            }
        }
    }
}
</script>
<style lang="">
    
</style>