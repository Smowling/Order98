<template>
    <WindowFrame>
        <TopNav />
        <DropZones />
        <!-- T<div class="content-expand"></div> his div will push the BottomNav to the bottom -->
        <Cards />
        <BottomNav />
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
        game.load(gameState);
    }
})


</script>

<style scoped>
.content-expand {
    flex-grow: 1;
}
</style>