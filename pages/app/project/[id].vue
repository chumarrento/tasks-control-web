<template>
    <VLayout>
        <VAppBar>
            <VAppBarTitle>Projects</VAppBarTitle>
        </VAppBar>
        <VMain>
            <VContainer>
                <section class="my-8">
                    <header class="flex justify-between">
                        <h2 class="text-xl">Lista de atividades do projeto</h2>
                        <VBtn @click="openCreateTaskDialog">Criar uma atividade</VBtn>
                    </header>
                </section>
                <VTable v-if="tasks?.length">
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

                <TasksCreateDialog v-if="project" v-model:dialog="dialog" :project="project" />
            </VContainer>
        </VMain>
    </VLayout>
</template>
<script setup lang="ts">
import { Project, Task } from '~~/types';

const dialog = ref(false);

const openCreateTaskDialog = () => {
    dialog.value = true;
};
// TODO: paginate table

// TODO: added total amount of project and maybe graph with projects tasks

// TODO: view total of project by month - HIGH PRIORITY
const route = useRoute();
const { data: project } = await useAsyncData(() => useHttp().get<{ data: Project }>(`projects/${route.params.id}`), {
    transform: (r) => r.data,
});

const { data: tasks } = await useAsyncData(() => useHttp().get<{ data: Task[] }>(`projects/${route.params.id}/tasks`), {
    transform: (r) => r.data,
});
</script>
