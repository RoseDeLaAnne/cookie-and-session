<template>
    <div class="custom-input">
        <div class="custom-input__box-1">
            <svg class="custom-input__search-icon">
                <use href="@/assets/icons/sprites.svg#heart" />
            </svg>
        </div>

        <input type="text" class="custom-input__input" placeholder="Search" />
    </div>
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
.custom-input
    position: relative

.custom-input__box-1
    position: absolute

    top: 50%
    left: 32px

    transform: translate(0, -50%)

.custom-input__search-icon
    width: 16px
    height: 16px

.custom-input__search
    padding: 16px 32px 16px 32px

    background-color: #fff
    
    border-radius: 16px
</style>
