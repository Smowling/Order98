<<template>
    <div>
        <div class="container">
            <div draggable="true" class="box">A</div>
            <div draggable="true" class="box">B</div>
            <div draggable="true" class="box">C</div>
        </div>
    </div>
</template>

    <script setup>

</script>

    <style scoped>

    .container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 10px;
    }

    .box {
        border: 3px solid #666;
        background-color: #ddd;
        border-radius: .5em;
        padding: 10px;
        cursor: move;
    }
</style>