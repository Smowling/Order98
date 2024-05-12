<template>
    <div class="container min-w-80 max-w-96 h-96 h-svh">
        <div class="asc1">asc1</div>
        <div class="asc2">asc2</div>
        <div class="desc1">test1</div>
        <div class="desc2">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <button class="undo">undo</button>
        <button class="amount">cards</button>
        <button class="draw">draw</button>
    </div>
</template>

<script setup lang="ts">
// https://www.youtube.com/watch?v=6qpEOBkDr88
// todo
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
    gap: 10px;
    padding: 15px;
    /* Adjust the gap as needed */
}

.con {
    background-color: antiquewhite;
}

.card {
    grid-row: span 2;
    grid-column: span 1;
    padding: 1em;
    margin: 5px;
}

.undo {
    grid-column: 1 / 2;
    grid-row: 10;
}

.amount {
    grid-column: 2 / 4;
    grid-row: 10;
}

.draw {
    grid-column: 4 / 5;
    grid-row: 10;
}

.asc1 {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    background-color: aqua;
}

.asc2 {
    grid-column: 3 / 5;
    grid-row: 1 / 3;
    background-color: aqua;
}

.desc1 {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    background-color: aqua;
}

.desc2 {
    grid-column: 3 / 5;
    grid-row: 3 / 5;
    background-color: aqua;
}
</style>