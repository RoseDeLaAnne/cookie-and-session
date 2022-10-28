<template>
    <section class="home">
        <div>
            <div>
                <h1>Home</h1>
            </div>

            <div>
                <div>
                    <svg>
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>

                <!-- custom-input -->
            </div>
        </div>

        <div class="banner">
            <img src="" alt="" class="banner__img" />

            <h2>Taylor Swift Midnights</h2>

            <h1>Listen to trending songs all the time</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                modi atque voluptatum nam non omnis beatae id obcaecati,
                delectus consequatur.
            </p>

            <router-link to="/">Explore now</router-link>
        </div>

        <div>
            <h2>Trending right now</h2>
            <h3>See all</h3>
        </div>

        <div>
            <Songs />
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Songs from '@/components/main/SongsComp.vue'

export default defineComponent({
    components: {
        Songs
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
//
</style>
