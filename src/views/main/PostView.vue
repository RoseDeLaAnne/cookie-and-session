<template>
    <div class="page">
        <Header />

        <div class="wrap">
            <main class="main">
                <h1 class="title">Post View</h1>

                <Transition>
                    <p v-if="show">Transition 1</p>
                </Transition>

                <Transition name="slide-fade">
                    <p v-if="show">Transition 2</p>
                </Transition>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/main/HeaderComp.vue";

export default defineComponent({
    components: {
        Header,
    },
    data() {
        return {
            show: true,
        };
    },
    // setup() {},
});
</script>

<style lang="sass" scoped>
.title
    animation: opacity .5s ease-in-out
</style>
