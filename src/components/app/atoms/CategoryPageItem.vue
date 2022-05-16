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
              <div class="categorypage-item__hoeveelheid">
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
    }
}
</script>
<style lang="">
    
</style>