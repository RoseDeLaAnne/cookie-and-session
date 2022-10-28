<template>
    <section class="songs">
        <div class="songs__item">
            <div class="td">
                <div class="td__inner">
                    <h1 class="songs__item-number">01</h1>
                </div>
            </div>
            <div class="td">
                <div class="td__inner">
                    <img src="" alt="" class="songs__item-song-cover" />
                    <h1 class="songs__item-song-name">I'm Good (Blue)</h1>
                    <h2 class="songs__item-song-composer">
                        David Guetta & Bebe Rexha
                    </h2>
                </div>
            </div>
            <div class="td">
                <div class="td__inner">
                    <h2 class="songs__item-song-time">03:29</h2>
                </div>
            </div>
            <div class="td">
                <div class="td__inner">
                    <h2 class="songs__item-song-listeners">8 078 651</h2>
                </div>
            </div>
            <div class="td">
                <div class="td__inner">
                    <div class="songs__item-box">
                        <svg class="songs__item-favourite-icon">
                            <use href="@/assets/icons/sprites.svg#heart" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="td">
                <div class="td__inner">
                    <div class="songs__item-box">
                        <svg class="songs__item-action-icon">
                            <use href="@/assets/icons/sprites.svg#heart" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    setup() {
        //
    },
});
</script>

<style lang="sass" scoped>
//
</style>
