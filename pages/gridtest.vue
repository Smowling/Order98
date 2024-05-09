<template>
    <div class="container">
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
        <div>test1</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(10, 1fr);
    height: 100vh;
    /* 100% of the viewport height */
    width: 100vw;
    /* 100% of the viewport width */
    gap: 10px;
    padding: 50px;
    /* Adjust the gap as needed */
}
</style>