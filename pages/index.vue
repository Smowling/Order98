<template>
    <div>
        <div class="container">
            <div class="columns-2">
                <div id="asc1" class="box" @dragover="dragOver" @drop="drop">{{ asc1[asc1.length - 1] }}
                </div>
                <div id="asc2" class="box" @dragover="dragOver" @drop="drop">{{ asc2[asc2.length - 1] }}
                </div>
                <div id="desc1" class="box" @dragover="dragOver" @drop="drop">{{ desc1[desc1.length - 1] }}
                </div>
                <div id="desc2" class="box" @dragover="dragOver" @drop="drop">{{ desc2[desc2.length - 1] }}
                </div>
            </div>
        </div>
        <div class="container">
            <div v-for="(card, index) in hand" :id="index" draggable="true" class="card" @dragstart="dragStart">{{
                card }} </div>

        </div>
    </div>
</template>

<script setup>

const asc1 = ref([1])
const asc2 = ref([1])
const desc1 = ref([100])
const desc2 = ref([100])

const hand = ref([2, 3, 4, 5, 6, 7, 8, 9])
const deck = ref([99, 98, 97, 96])



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
            asc1.value.push(parseInt(draggedElement.textContent, 10));
            hand.value.splice(cardIndex, 1);
            console.log(asc1.value)
            console.log("hand size: ", hand.value.length, " cards: ", hand.value)
        } else if (targetElement.id === 'asc2') {
            asc2.value.push(draggedElement.textContent);
        }
    }
};

const dragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);
};


</script>


<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
}

.box {
    border: 3px solid #666;
    background-color: #ddd;
    border-radius: .5em;
    padding: 10px;
    cursor: move;
}

.card {
    border: 4px solid #000;
    background-color: #ddd;
    border-radius: .5em;
    padding: 10px;
    height: 80px;
    width: 54px;
}
</style>