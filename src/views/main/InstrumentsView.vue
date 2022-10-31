<template>
    <main class="main">
        <img
            v-if="showBannerInstruments === 'true'"
            src="@/assets/images/main/construction-instruments.jpg"
            alt=""
        />
        <h1>Instruments Page</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptates et eligendi molestiae aliquam ipsum quos neque corporis,
            possimus sapiente velit accusamus vero quo cumque nesciunt! Ab
            voluptas consequuntur minima, dignissimos impedit in molestiae
            tenetur? Neque expedita delectus hic nulla quam. Placeat dignissimos
            ducimus recusandae corrupti consequatur quaerat at magni, vitae
            cupiditate maiores quo harum facere. Reprehenderit voluptas et
            nostrum ut fugit modi a ratione quibusdam, repellendus nam,
            cupiditate culpa est quo eum neque in. Iure laboriosam error totam
            libero. Architecto, consequuntur et, voluptates odio inventore
            possimus voluptatum, maiores quas officia saepe sit optio nostrum
            unde repudiandae aliquid facere eveniet!
        </p>
    </main>
</template>

<script>
import { getCookie, deleteCookie } from "@/use/cookie.js";

export default {
    data() {
        return {
            showBannerInstruments: "",
        };
    },
    mounted() {
        if (getCookie("showBannerInstruments") === "true") {
            this.showBannerInstruments = "true";
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
.main
    align-items: center

img
    margin-bottom: 128px

    width: 100%
    height: 512px

h1
    margin-bottom: 64px

    font-size: 64px

p
    padding-left: 64px
    padding-right: 64px
</style>
