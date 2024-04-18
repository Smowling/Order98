<template>
    <!-- <div class="grid justify-items: center;"> -->
    <div class="game">
        <nav>test</nav>
        <div class="dropzone">
            <div class="zone"></div>
            <div class="zone"></div>
            <div class="zone"></div>
            <div class="zone"></div>
        </div>
        <div class="hand"></div>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">

</script>

<style scoped>
.game {
    width: 98%;
    max-width: 800px;
    background-color: blue;
    height: 1000px;
    display: flex;
    flex-direction: column;
}

.dropzone {
    width: 100%;
    height: 45%;
    background-color: bisque;
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    justify-content: center;
}

.hand {
    width: 100%;
    height: 100%;
    background-color: aqua;
}

.zone {
    background-color: cadetblue;
    width: 95%;
    height: 95%;
    border: 5px;
    border-radius: 5px;
    border-color: black;
    justify-content: center;
}
</style>