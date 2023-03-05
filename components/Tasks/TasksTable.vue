<template>
     <VTable>
        <thead>
            <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Título</th>
                <th class="text-left">Horas</th>
                <th class="text-left">Total</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="task in tasks" :key="task.id">
                <td>{{ task.id }}</td>
                <td>{{ task.title }}</td>
                <td>{{ task.formatted_duration }}</td>
                <td>{{ task.formatted_total }}</td>
            </tr>
        </tbody>
    </VTable>
</template>
<script setup lang="ts">
import { Task } from '~~/types';

defineProps<{ tasks: Task[]}>()
</script>