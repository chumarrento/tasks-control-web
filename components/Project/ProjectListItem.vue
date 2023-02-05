<template>
    <VCard>
        <VCardTitle>
            <section class="flex justify-between">
                <h2>Project 1</h2>
                <VIcon :icon="mdiArrowRight" />
            </section>
        </VCardTitle>
        <VCardText>
            <p class="font-semibold text-sm">Projeto do cliente X</p>

            <section class="flex flex-col mt-4">
                <span class="text-xs"> Preço da hora - 45 </span>
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
</script>
