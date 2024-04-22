<template>
    <div class="flex justify-evenly">
        <div class="zone" @dragover="dragOver" @drop="drop">{{ last($attrs.piles.desc1) }}</div>
        <div class="zone" @dragover="dragOver" @drop="drop">{{ last($attrs.piles.desc2) }}</div>

    </div>
    <div class="flex justify-evenly">
        <div class="zone" @dragover="dragOver" @drop="drop">{{ last($attrs.piles.asc1) }}</div>
        <div class="zone" @dragover="dragOver" @drop="drop">{{ last($attrs.piles.asc2) }}</div>

    </div>
</template>

<script setup lang="ts">
function last(element: number[]) {
    return element[element.length - 1]
}
const dragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
};

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetElement = event.target;
    const draggedElement = document.getElementById(data);
    const cardIndex = parseInt(draggedElement.id, 10);

    // Prevent dropping if the target is also draggable
    if (!targetElement.getAttribute('draggable')) {
        targetElement.appendChild(draggedElement);
        if (targetElement.id === 'asc1') {
            $attrs.piles.desc1.push(parseInt(draggedElement.textContent, 10));
            hand.value.splice(cardIndex, 1);
            console.log(asc1.value)
            console.log("hand size: ", hand.value.length, " cards: ", hand.value)
        } else if (targetElement.id === 'asc2') {
            asc2.value.push(draggedElement.textContent);
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