<template>
    <div class="page">
        <Sidebar />

        <div class="wrap">
            <Header />

            <main class="main">
                <div>
                    <Compositions />
                </div>
                <div>
                    <Composition />
                </div>

                <Transition>
                    <div v-if="show">
                        <HomeSection />
                    </div>
                </Transition>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Sidebar from "@/components/main/SidebarComp.vue";
import Header from "@/components/main/HeaderComp.vue";

import Compositions from "@/components/main/CompositionsComp.vue";
import Composition from "@/components/main/CompositionComp.vue";

import HomeSection from "@/components/main/HomeSectionComp.vue";

export default defineComponent({
    components: {
        Sidebar,
        Header,
        Compositions,
        Composition,
        HomeSection,
    },
    data() {
        return {
            show: false,
        };
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
//
</style>
