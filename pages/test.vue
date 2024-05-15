<template>
    <div class="flex h-screen justify-center items-center">
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
    </div>
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
        game.load(gameState);
    }
})


</script>

<style scoped>
.content-expand {
    flex-grow: 1;
}
</style>