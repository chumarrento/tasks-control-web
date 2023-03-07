<template>
    <VCard>
        <VCardText>
            <main class="flex flex-col mt-2">
                <h2 class="text-xl font-bold my-2">Dados</h2>

                <section class="flex gap-2">
                    <h3 class="text-base font-semibold">Horas trabalhadas:</h3>
                    <span class="text-base">{{ report?.hours_of_month }}</span>
                </section>
                <section class="flex gap-2">
                    <h3 class="text-base font-semibold">Total:</h3>
                    <span class="text-base">{{ report?.total_of_month }}</span>
                </section>
            </main>
        </VCardText>
    </VCard>
</template>
<script setup lang="ts">
import { Report } from '~~/types';

defineProps<{ report: Report }>();
</script>
