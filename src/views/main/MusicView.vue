<template>
    <main class="main">
        <img
            v-if="showBannerMusic === 'true'"
            src="@/assets/images/main/image.jpg"
            alt=""
        />
    </main>
</template>

<script>
import { getCookie, deleteCookie } from "@/use/cookie.js";

export default {
    data() {
        return {
            showBannerMusic: "",
        };
    },
    mounted() {
        if (getCookie("showBannerMusic") === "true") {
            this.showBannerMusic = "true";
        } else if (getCookie("showBannerMusic") != "true") {
            document.cookie =
                "showBannerMusic=true; path=/; expires=Fri, 1 Jan 2038 00:00:00 GMT";
            sessionStorage.setItem("showBannerMusic", "true");
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
