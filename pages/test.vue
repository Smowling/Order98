<template>
    <!-- <div class="grid justify-items: center;"> -->
    <div class="game">
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

}

.hand {
    width: 100%;
    height: 100%;
    background-color: aqua;
}

.zone {
    background-color: cadetblue;
    width: 50%;
    height: 50%;
    border: 1px;
    border-radius: 5px;
    border-color: black;
}
</style>