<template>
    <div>
        <div class="container">
            <div id="boxA" class="box" @dragover="dragOver" @drop="drop">{{ zone1 }}
            </div>
            <div id="boxB" class="box" @dragover="dragOver" @drop="drop">{{ zone2 }}

            </div>

            <div class="container">
                <div id="1" draggable="true" class="box" @dragstart="dragStart">A</div>
                <div id="2" draggable="true" class="box" @dragstart="dragStart">B</div>
                <div id="3" draggable="true" class="box" @dragstart="dragStart">C</div>
            </div>
        </div>
    </div>
</template>

<script setup>

const zone1 = ref('zone1')
const zone2 = ref('zone2')

const dragOver = (event) => {
    event.preventDefault(); // Necessary to allow dropping
};

const drop = (event: any) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const targetElement = event.target;
    const draggedElement = document.getElementById(data);

    // Prevent dropping if the target is also draggable
    if (!targetElement.getAttribute('draggable')) {
        targetElement.appendChild(draggedElement);
        if (targetElement.id === 'boxA') {
            zone1.value = draggedElement.textContent;
        } else if (targetElement.id === 'boxB') {
            zone2.value = draggedElement.textContent;
        }
    }
};

const dragStart = (event: any) => {
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
</style>