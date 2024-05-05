<template>
    <WindowFrame>
        <div class="window-frame">
            <nav>
                <Drawer />
                <button @click="game.restart">Restart</button>
            </nav>
            <DropZones />
            <div class="content-expand"></div> <!-- This div will push the BottomNav to the bottom -->

            <Cards />

            <BottomNav />
        </div>
    </WindowFrame>

</template>

<script setup lang="ts">

const game = useGameStore();

onMounted(() => {
    // start game or load from localstorage
    if (!localStorage.getItem('gameState')) {
        game.setup();
    }
    else {
        const gameState = JSON.parse(localStorage.getItem('gameState')!);
        game.load(gameState.gameState);
    }
})


</script>

<style scoped>
.window-frame {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* Ensure WindowFrame takes full height */
}

.content-expand {
    flex-grow: 1;
}
</style>