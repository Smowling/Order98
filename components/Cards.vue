<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="card flex-wrap" v-for="(card, index) in game.hand" :id="index" draggable="true"
            @dragstart="dragStart">
            {{ card }}</div>
    </div>
</template>

<script lang="ts">
const game = useGameStore();

const dragStart = (event: any) => {
    event.dataTransfer.setData("text", event.target.id);
};
</script>

<style scoped>
.card {
    width: 48px;
    height: 84px;
    background-color: rgb(157, 75, 171);
}
</style>