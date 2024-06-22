<template>
    <div class="grid grid-cols-1 justify-evenly">
        <div class="flex justify-evenly">
            <div class="zone" :style="{ backgroundColor: last(game.piles.desc1).color }" id="desc1" @dragover.prevent
                @drop="drop">{{ last(game.piles.desc1).number }}</div>
            <div class="zone" :style="{ backgroundColor: last(game.piles.desc2).color }" id="desc2" @dragover.prevent
                @drop="drop">{{ last(game.piles.desc2).number }}</div>

        </div>
        <div class="flex justify-evenly">
            <div class="zone" :style="{ backgroundColor: last(game.piles.asc1).color }" id="asc1" @dragover.prevent
                @drop="drop">{{ last(game.piles.asc1).number }}</div>
            <div class="zone" :style="{ backgroundColor: last(game.piles.asc2).color }" id="asc2" @dragover.prevent
                @drop="drop">{{ last(game.piles.asc2).number }}</div>

        </div>
    </div>
</template>

<script setup lang="ts">
import useDragAndDrop from '~/composables/dragAndDrop';

const game = useGameStore();
const { drop } = useDragAndDrop();

</script>

<style scoped>
.zone {
    background-color: cadetblue;
    width: 40%;
    min-width: 64px;
    height: 95%;
    min-height: 80px;
    border: 5px solid black;
    border-radius: 5px;
    justify-content: center;
    -webkit-box-shadow: 3px 6px 20px 3px #7A7A7A;
    box-shadow: 3px 6px 20px 3px #7A7A7A;
}
</style>