<template>
    <WindowFrame>
        <TopNav />
        <p>game score: {{ game.score }}</p>
        <UDivider />
        <DropZones />
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

<style scoped></style>