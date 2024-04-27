<template>
    <div>
        <div class="card flex-wrap" v-for="card in game.deck">{{ card }}</div>
    </div>
</template>

<script lang="ts">

</script>

<style scoped>
.card {
    width: 48px;
    height: 84px;
    background-color: rgb(157, 75, 171);
}
</style>