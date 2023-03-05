<template>
    <template v-if="project">
        <header>
            <ProjectDetails :project="project" />
        </header>

        <section class="my-8 flex justify-between">
            <h2 class="text-xl">Lista de atividades do projeto</h2>
            <section class="flex gap-4">
                <VBtn :to="`/app/project/${project.id}/report`">Relatorio mensal</VBtn>
                <VBtn @click="openCreateTaskDialog" :append-icon="mdiPlus">Criar uma atividade</VBtn>
            </section>
        </section>

        <TasksTable v-if="tasks?.length" :tasks="tasks" />

        <TasksCreateDialog v-if="project" v-model:dialog="dialog" :project="project" @new-task-created="refreshData" />
    </template>
</template>
<script setup lang="ts">
import { mdiPlus } from '@mdi/js';
import { Project, Task } from '~~/types';

const dialog = ref(false);

const openCreateTaskDialog = () => {
    dialog.value = true;
};
// TODO: paginate table

// TODO: added total amount of project and maybe graph with projects tasks

// TODO: view total of project by month - HIGH PRIORITY
const route = useRoute();
const { data: project, refresh: refreshProject } = await useAsyncData(() => useHttp().get<{ data: Project }>(`projects/${route.params.id}`), {
    transform: (r) => r.data,
});

const { data: tasks, refresh: refreshTasks } = await useAsyncData(() => useHttp().get<{ data: Task[] }>(`projects/${route.params.id}/tasks`), {
    transform: (r) => r.data,
});

const refreshData = () => {
    refreshTasks();
    refreshProject();
}
</script>
