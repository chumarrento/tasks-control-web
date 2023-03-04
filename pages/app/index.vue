<template>
    <VLayout>
        <VAppBar>
            <VAppBarTitle>Projects</VAppBarTitle>
        </VAppBar>
        <VMain>
            <VContainer>
                <h1 class="font-semibold text-2xl">Olá {{ user?.name }}!</h1>

                <section class="mt-8">
                    <header class="flex justify-between">
                        <h2 class="text-xl">Lista de projetos</h2>
                        <VBtn @click="openCreateProjectDialog">Criar um projeto</VBtn>
                    </header>
                    <ProjectList v-if="projects" :projects="projects" />
                </section>

                <ProjectCreateDialog v-model:dialog="dialog" />
            </VContainer>
        </VMain>
    </VLayout>
</template>
<script setup lang="ts">
import { Project } from '~~/types';

const { user } = useUser().asRef();

const dialog = ref(false);

const openCreateProjectDialog = () => {
    dialog.value = true;
};

const { data: projects } = useAsyncData(() => useHttp().get<{data: Project[]}>('projects'), {
    transform: (r) => r.data
})
</script>
