<template>
    logged in app works
    {{ user?.name }}
</template>
<script setup lang="ts">
const { user } = useUser().asRef()
</script>