<template>
    <div class="grid grid-cols-1 justify-evenly">
        <div class="flex justify-evenly">
            <div class="zone" id="desc1" @dragover="dragOver" @drop="drop">{{ last(game.piles.desc1) }}</div>
            <div class="zone" id="desc2" @dragover="dragOver" @drop="drop">{{ last(game.piles.desc2) }}</div>

        </div>
        <div class="flex justify-evenly">
            <div class="zone" id="asc1" @dragover="dragOver" @drop="drop">{{ last(game.piles.asc1) }}</div>
            <div class="zone" id="asc2" @dragover="dragOver" @drop="drop">{{ last(game.piles.asc2) }}</div>

        </div>
    </div>
</template>

<script setup lang="ts">
const game = useGameStore();


const dragOver = (event: any) => {
    event.preventDefault(); // Necessary to allow dropping
};

const drop = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetElement = event.target;
    const draggedElement = document.getElementById(data);
    const cardIndex = parseInt(draggedElement.id, 10);

    // console.log(targetElement.textContent) target value

    // Prevent dropping if the target is also draggable
    if (!targetElement.getAttribute('draggable')) {
        targetElement.appendChild(draggedElement);
        if (targetElement.id === 'asc1') {
            console.log("dragged to asc1")
            if (cardIndex > -1) {
                game.piles.asc1.push(...game.hand.splice(cardIndex, 1));
            }
        }
        if (targetElement.id === 'asc2') {
            console.log("dragged to asc2")
            if (cardIndex > -1) {
                game.piles.asc2.push(...game.hand.splice(cardIndex, 1));
            }
        }
        if (targetElement.id === 'desc1') {
            console.log("dragged to desc1")
            if (cardIndex > -1) {
                game.piles.desc1.push(...game.hand.splice(cardIndex, 1));
            }
        }
        if (targetElement.id === 'desc2') {
            console.log("dragged to desc2")
            if (cardIndex > -1) {
                game.piles.desc2.push(...game.hand.splice(cardIndex, 1));
            }
        }
    }
};

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