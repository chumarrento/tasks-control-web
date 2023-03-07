<template>app</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
});

navigateTo('/app');
</script>
