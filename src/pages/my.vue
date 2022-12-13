<template>
    <div>
        <div class="text-center mt-8">
            <v-progress-circular indeterminate color="blue"></v-progress-circular>
        </div>
    </div>

</template>
<script>
export default {
    setup() {
        document.getElementById("app-title").textContent = "マイプロフィール"
    }
}
</script>