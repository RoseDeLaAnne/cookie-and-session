<template>
    <section class="sidebar">
        <div class="sidebar__box-1">
            <Logo />
        </div>

        <div class="sidebar__box-2">
            <nav class="nav">
                <router-link to="/" class="nav__item">
                    <svg class="nav__item-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </router-link>
                <router-link to="/" class="nav__item">
                    <svg class="nav__item-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </router-link>
            </nav>

            <div class="sidebar__decor"></div>

            <nav class="nav">
                <router-link to="/" class="nav__item">
                    <svg class="nav__item-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </router-link>
                <router-link to="/" class="nav__item">
                    <svg class="nav__item-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </router-link>
            </nav>
        </div>

        <div class="sidebar__box-3">
            <nav class="nav">
                <router-link to="/" class="nav__item">
                    <svg class="nav__item-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </router-link>
            </nav>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Logo from "@/components/LogoComp.vue";

export default defineComponent({
    components: {
        Logo,
    },
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
.sidebar
    padding-top: 64px
    padding-bottom: 64px

    position: fixed

    top: 0
    left: 0

    width: 96px
    height: 100vh

    display: grid
    grid-template-rows: 1fr 1.5fr 1fr

    justify-content: center

    background-color: #362E4E

.sidebar__box-1
    display: flex
    flex-direction: column

    align-items: center
    justify-content: flex-start

.sidebar__box-2
    display: flex
    flex-direction: column

    align-items: center
    justify-content: space-between

.sidebar__box-3
    display: flex
    flex-direction: column

    align-items: center
    justify-content: flex-end

.nav
    display: flex
    flex-direction: column

    row-gap: 16px

.nav__item
    &:hover
        .nav__item-icon
            filter: drop-shadow(3px 3px 10px rgba(#fff, 1))

.nav__item-icon
    width: 28px
    height: 28px

    fill: #fff
</style>
