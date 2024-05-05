<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <label for="my-drawer" class="btn btn-primary drawer-button">Sidebar</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li><button @click="game.restart">Restart</button></li>
                <li><a>Settings</a></li>
                <li><a>Profile</a></li>
                <li><a>Logout</a></li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
const game = useGameStore();

</script>