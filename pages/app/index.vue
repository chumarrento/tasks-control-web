<template>
    <VLayout>
        <VAppBar>
            <VAppBarTitle>Projects</VAppBarTitle>
        </VAppBar>
        <VMain>
            <VContainer>
                <h1 class="font-semibold text-2xl">Olá {{ user?.name }}, bem vindo de volta!</h1>

                <section class="mt-8">
                    <header class="flex justify-between">
                        <h2 class="text-xl">Lista de projetos</h2>
                        <VBtn @click="openCreateProjectDialog">Criar um projeto</VBtn>
                    </header>
                    <ProjectList />
                </section>

                <ProjectCreateDialog v-model:dialog="dialog" />
            </VContainer>
        </VMain>
    </VLayout>
</template>
<script setup lang="ts">
const { user } = useUser().asRef();

const dialog = ref(false);

const openCreateProjectDialog = () => {
    dialog.value = true;
};
</script>
