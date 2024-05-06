<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="card flex-wrap" v-for="(card, index) in game.hand" :id="String(index)" draggable="true"
            @dragstart="dragStart" @dragover.prevent>
            {{ card }}</div>
    </div>
</template>

<script setup lang="ts">
import useDragAndDrop from '~/composables/dragAndDrop';

const game = useGameStore();

const { dragStart } = useDragAndDrop();

</script>

<style scoped>
.card {
    width: 48px;
    height: 84px;
    background-color: rgb(157, 75, 171);
}
</style>