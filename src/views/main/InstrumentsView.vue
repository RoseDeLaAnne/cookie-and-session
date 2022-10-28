<template>
    <main class="main">
        <img v-if="showBannerInstruments === 'true'" src="@/assets/images/main/image.jpg" alt="" />
    </main>
</template>

<script>
import { getCookie, deleteCookie } from "@/use/cookie.js";

export default {
    data() {
        return {
            showBannerInstruments: '',
        };
    },
    mounted() {
        if (getCookie("showBannerInstruments") === "true") {
            this.showBannerInstruments = 'true';
        } else if (getCookie("showBannerInstruments") != "true") {
            document.cookie =
                "showBannerInstruments=true; path=/; expires=Fri, 1 Jan 2038 00:00:00 GMT";
            sessionStorage.setItem("showBannerInstruments", "true");
        }
    },
    setup() {
        //
    },
};
</script>

<style lang="sass" scoped>
img
    width: 100%
    height: 512px
</style>
