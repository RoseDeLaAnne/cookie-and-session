<template>
    <section class="composition">
        <img src="" alt="" class="composition__song-cover" />
        <h1 class="composition__song-name">Resistance</h1>
        <h2 class="composition__song-composer">Muse</h2>

        <div class="control">
            <div>
                <div class="control__repeat">
                    <svg class="control__repeat-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>
            </div>

            <div>
                <div class="control__previous">
                    <svg class="control__previous-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>
                <div class="control__play-stop">
                    <svg class="control__play-stop-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>
                <div class="control__next">
                    <svg class="control__next-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>
            </div>

            <div>
                <div class="control__shuffle">
                    <svg class="control__shuffle-icon">
                        <use href="@/assets/icons/sprites.svg#heart" />
                    </svg>
                </div>
            </div>
        </div>

        <div class="playbar">
            <div>
                <div class="playbar__current-time">0:24</div>
            </div>

            <div>
                <div class="playbar__audio-track"></div>
            </div>

            <div>
                <div class="playbar__composition-time">5:46</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        // 
    },
})
</script>

<style lang="sass" scoped>
// 
</style>

