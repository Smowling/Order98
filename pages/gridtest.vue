<template>
    <div class="container">
        <div class="asc1">asc1</div>
        <div class="asc2">asc2</div>
        <div class="desc1">test1</div>
        <div class="desc2">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
        <div class="con card">test1</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
    height: 100vh;
    /* 100% of the viewport height */
    width: 100vw;
    /* 100% of the viewport width */
    gap: 10px;
    padding: 50px;
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