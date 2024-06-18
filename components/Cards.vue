<template>
    <div v-auto-animate class="grid grid-cols-4 gap-4">
        <div class="card flex-wrap" v-for="(card, index) in game.hand" :id="String(index)" draggable="true"
            @dragstart="dragStart" @drop="swapCard" @dragover="swapCard" @dragover.prevent>
            {{ card.number }}</div>
    </div>
</template>

<script setup lang="ts">
import useDragAndDrop from '~/composables/dragAndDrop';

const game = useGameStore();

const { dragStart, swapCard } = useDragAndDrop();

</script>

<style scoped>
.card {
    width: 48px;
    height: 84px;
}
</style>