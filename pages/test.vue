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
    justify-items: center;
    padding: 10px;
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
    border: 5px solid black;
    border-radius: 5px;
    justify-content: center;
    -webkit-box-shadow: 3px 6px 20px 3px #7A7A7A;
    box-shadow: 3px 6px 20px 3px #7A7A7A;
}
</style>