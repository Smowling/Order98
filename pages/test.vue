<template>
    <div class="flex justify-around">
        <div class="game">
            <nav>test</nav>
            <div class="flex justify-evenly">
                <div class="zone">{{ game.piles.desc1[game.piles.desc1.length - 1] }}</div>
                <div class="zone">{{ game.piles.desc2[game.piles.desc2.length - 1] }}</div>

            </div>
            <div class="flex justify-evenly">
                <div class="zone">{{ game.piles.asc1[game.piles.asc1.length - 1] }}</div>
                <div class="zone">{{ game.piles.asc2[game.piles.asc2.length - 1] }}</div>

            </div>
            <div class="hand flex justify-evenly">
                <div class="card" v-for="card in game.hand">{{ card }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const game = ref({
    "deck": [3, 4, 5, 6, 7, 8, 9, 11],
    "hand": [23, 43, 12, 52, 31, 15, 23, 15],
    "piles": {
        "asc1": [1],
        "asc2": [1],
        "desc1": [100],
        "desc2": [100],

    }
})
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

.card {
    width: 48px;
    height: 84px;
    background-color: rgb(157, 75, 171);
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