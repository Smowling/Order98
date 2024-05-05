<template>
    <ul class="menu bg-base-200 lg:menu-horizontal rounded-box">
        <li>
            <button @click="game.draw">
                draw
                <!-- <span class="badge badge-xs badge-info"></span> -->
            </button>
        </li>
        <li>
            cards {{ game.deck.length }}
        </li>
        <li>
            <button @click="game.draw">
                draw
                <span v-if="game.hand.length <= game.handSize - 2" class="badge badge-sm badge-warning">Draw</span>
            </button>
        </li>
    </ul>
</template>
<script setup lang="ts">
const game = useGameStore();

</script>