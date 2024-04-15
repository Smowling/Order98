<template>
    <div>
        <div class="container">
            <div id="asc1" class="box" @dragover="dragOver" @drop="drop">{{ asc1[asc1.length - 1] }}
            </div>
            <div id="asc2" class="box" @dragover="dragOver" @drop="drop">{{ asc2[asc2.length - 1] }}
            </div>
        </div>
        <div class="container">
            <div id="1" draggable="true" class="card" @dragstart="dragStart">2</div>
            <div id="2" draggable="true" class="card" @dragstart="dragStart">3</div>
            <div id="3" draggable="true" class="card" @dragstart="dragStart">4</div>
        </div>
    </div>
</template>

<script setup>

const asc1 = ref(['1'])
const asc2 = ref(['1'])




const dragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
};

const drop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetElement = event.target;
    const draggedElement = document.getElementById(data);

    // Prevent dropping if the target is also draggable
    if (!targetElement.getAttribute('draggable')) {
        targetElement.appendChild(draggedElement);
        if (targetElement.id === 'asc1') {
            asc1.value.push(draggedElement.textContent);
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