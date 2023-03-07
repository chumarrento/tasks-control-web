<template>
    <VCard class="mx-auto">
        <VCardText>
            <header>
                <h2 class="text-2xl font-bold">Project {{ project.name }}</h2>
            </header>
            <main class="flex flex-col mt-2">
                <h2 class="text-xl font-bold my-2">Dados</h2>

                <section class="flex gap-2">
                    <h3 class="text-base font-semibold">Horas trabalhadas:</h3>
                    <span class="text-base">{{ project.formatted_total_duration }}</span>
                </section>
                <section class="flex gap-2">
                    <h3 class="text-base font-semibold">Total:</h3>
                    <span class="text-base">{{ project.formatted_total }}</span>
                </section>
            </main>
        </VCardText>
    </VCard>
</template>
<script setup lang="ts">
import { Project } from '~~/types';

defineProps<{ project: Project }>();
</script>
