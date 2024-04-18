<template>
    <div class="flex justify-around">
        <div class="game">
            <nav>test</nav>
            <div class="flex justify-evenly">
                <div class="zone"></div>
                <div class="zone"></div>

            </div>
            <div class="flex justify-evenly">
                <div class="zone"></div>
                <div class="zone"></div>

            </div>
            <div class="hand"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.game {
    width: 100%;
    height: 840px;
    max-height: 840px;
    max-width: 600px;
    background-color: blue;
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