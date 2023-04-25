<script setup>
import { reactive, ref, onUnmounted } from "vue"
import Header from '../components/Header.vue';
import Profile from "../components/Profile.vue";
const state = reactive({
    deviceOrientation:{
        canUse: !!window.DeviceOrientationEvent,
        isInverted: false
    }
})
let rotateX = ref(0)

// check device orientation to detect upside down state.
const deviceOrientationEvent = (e) => {
    const frontToBack = e.beta
    state.deviceOrientation.isInverted = (frontToBack < -5)
    rotateX.value = frontToBack
}

if(!!window.DeviceOrientationEvent){
    // create "device orientation" event listener
    window.addEventListener("deviceorientation", deviceOrientationEvent)
    // remove event listener when leave from this page
    onUnmounted(() => {
        window.removeEventListener("deviceorientation", deviceOrientationEvent)
    })
}

</script>
<template>
    <Header title="共有" hasBackButton></Header>
    
    <div class="text-center qr-code" :class="{'is-inverted':state.deviceOrientation.isInverted}">
        <img src="/sampleQR.png" width="256">
        
        <Profile name="OPSTID" opstidId="d1fd17c6b612"></Profile>
    </div>
    <v-text-field value="https://opstid.com/p?twitter=opstid&ig=opstid_official" color="blue" variant="underlined" readonly></v-text-field>
    <p class="text-body-2 text-center text-grey mt-6">端末を傾けると、QRコードの向きが変わります</p>
</template>
<style scoped>
.qr-code{
    transition-duration: 0.3s;
}
.qr-code.is-inverted{
    transform: rotateZ(180deg)
}
</style>