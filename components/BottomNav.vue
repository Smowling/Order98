<template>
    <ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
        <li>
            <button @click="game.undo">
                undo
            </button>
        </li>
        <li>
            cards {{ game.deck.length }}
        </li>
        <li v-if="game.hand.length <= game.handSize - 2">
            <button @click="game.draw">
                draw
            </button>
        </li>
        <li v-else class="disabled">
            <button>
                draw
            </button>
        </li>
    </ul>
</template>
<script setup lang="ts">
const game = useGameStore();

</script>