<template>
    <WindowFrame>
        <div class="flex flex-col">
            <div class="grid grid-cols-2">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
            <div class="con card">test1</div>
            <div class="con card">test1</div>
            <div class="con card">test1</div>
            <div class="con card">test1</div>
            <div class="con card">test1</div>
            <div class="grid grid-cols-3">
                <button class="undo">undo</button>
                <button class="amount">cards</button>
                <button class="draw">draw</button>
            </div>
        </div>
    </WindowFrame>
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
    grid-column: 2 / 3;
    grid-row: 10;
}

.draw {
    grid-column: 3 / 4;
    grid-row: 10;
}

.asc1 {
    grid-column: span 1;
    grid-row: span 1;
    background-color: aqua;
}

.asc2 {
    grid-column: span 1;
    grid-row: span 1;
    background-color: aqua;
}

.desc1 {
    grid-column: span 1;
    grid-row: span 1;
    background-color: aqua;
}

.desc2 {
    grid-column: span 1;
    grid-row: span 1;
    background-color: aqua;
}
</style>