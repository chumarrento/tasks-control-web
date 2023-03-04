<template>
    <VCard>
        <VCardTitle>
            <section class="flex justify-between">
                <h2>{{ project.name}}</h2>
                <VIcon :icon="mdiArrowRight" />
            </section>
        </VCardTitle>
        <VCardText>
            <p class="font-semibold text-sm">{{project.description}}</p>

            <section class="flex flex-col mt-4">
                <span class="text-xs"> Preço da hora - {{project.formatted_price_per_hour}} </span>
                <span class="text-xs"> Total de horas trabalhadas 1000 </span>
            </section>
        </VCardText>

        <VCardActions>
            <VBtn>Editar</VBtn>
        </VCardActions>
    </VCard>
</template>
<script setup lang="ts">
import { mdiArrowRight } from '@mdi/js';
import { Project } from '~~/types';

defineProps<{project: Project }>();
</script>
