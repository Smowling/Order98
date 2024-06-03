<template>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
</template>
<script setup lang="ts">
const game = useGameStore();
const links = [
    {
        label: 'Deck: '
    }, {
        label: 'Draw',
        click: game.draw
    }
]

</script>