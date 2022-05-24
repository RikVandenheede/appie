<template lang="">
    <div>
        <!--TODO: make empty state, kijk of er iets in winkelwagen zit of niet-->
        <Layout :options="{ title: 'QR', arrow: false, search: false }">
            <div class="qr-div">
                <div class="qr-div__toptext">
                    <p>Scan hier je QR code zodat je verder kan winkelen in je favoriete winkel!</p>
                </div>
                <div class="qr-div__qr">
                    <!-- TODO: hier zou nog een routerlink moeten op de qr voor naar de andere app te klikken -->
                    <img src="../../../public/icons_app/qrcode-app.png" > 
                </div>
                <div class="qr-div__bottomtext">
                    <h3>Hoe werkt dit nu?</h3>
                    <p>1. Maak een jezelf een boodschappenlijstje in onze app.</p>
                    <p>2. Pak de handscanner in de winkel en scan deze QR code.</p>
                    <p>3. You are good to go!</p>
                </div>
            </div>
        </Layout>
        <Navigation />
    </div>
</template>
<script>
import Layout from "@/components/app/atoms/Layout.vue";
import Navigation from "@/components/app/molecules/Navigation.vue";
export default {
  name: "AppQrView",
  components: {
    Layout,
    Navigation
  },
}
</script>
<style lang="">
    
</style>