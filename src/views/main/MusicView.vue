<template>
    <main class="main">
        <img
            v-if="showBannerMusic === 'true'"
            src="@/assets/images/main/music-instruments.jpg"
            alt=""
        />
        <h1>Music Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus eveniet sequi, ab quibusdam debitis aliquid consectetur dolorem officia amet, sed maxime error ducimus est totam quasi suscipit quod, blanditiis adipisci laboriosam magni. Optio hic excepturi porro qui! Optio obcaecati ab odit qui enim odio, magnam sed aliquam nisi delectus in quae doloribus repudiandae repellendus laudantium recusandae rerum perferendis blanditiis inventore facere laborum vel, voluptatibus dolores! Nihil quibusdam porro vero, at fugiat adipisci doloremque voluptatibus dolor aperiam a quisquam. Nostrum omnis eum voluptatum illo soluta necessitatibus laboriosam exercitationem! Dolore consequuntur distinctio eveniet, earum corporis dolor temporibus suscipit tempore. Ut, corrupti!</p>
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
