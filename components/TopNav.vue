<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>

<script setup>
const game = useGameStore();
const links = [
    {
        label: 'Order98'
    },
    {
        label: 'Restart',
        icon: 'ic-baseline-sync',
        click: game.restart
    }
]
</script>

<style lang="scss" scoped></style>