<template>
    <div class="flex justify-evenly">
        <div class="zone">{{ last($attrs.piles.desc1) }}</div>
        <div class="zone">{{ last($attrs.piles.desc2) }}</div>

    </div>
    <div class="flex justify-evenly">
        <div class="zone">{{ last($attrs.piles.asc1) }}</div>
        <div class="zone">{{ last($attrs.piles.asc2) }}</div>

    </div>
</template>

<script setup lang="ts">
function last(element: number[]) {
    return element[element.length - 1]
}
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