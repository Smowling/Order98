<template>
    <UButton label="Restart" color="primary" @click="game.restart" />

</template>

<script setup>
const game = useGameStore();
</script>

<style lang="scss" scoped></style>