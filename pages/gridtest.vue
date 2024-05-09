<template>
    <div class="container">
        <div class="asc">dsdfsdf</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
        <div class="con">test1</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style>
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

.asc {
    grid-column: 1/2;
    grid-row: 1/2;
    background-color: aqua;
}
</style>