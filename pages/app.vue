<template>
    <NuxtLayout name="app">
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: ['auth']
})
</script>