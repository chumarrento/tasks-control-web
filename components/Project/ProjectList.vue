<template>
    <section class="flex gap-4 mt-4">
        <ProjectListItem v-for="project in projects" :key="project.id" :project="project" />
    </section>
</template>

<script setup lang="ts">
import { Project } from 'types';

defineProps<{ projects: Project[] }>();
</script>
