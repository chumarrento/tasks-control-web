<template>
    <VDialog v-model="dialog" persistent width="50%">
        <VCard>
            <VForm class="w-full" @submit.prevent="submit">
                <VCardTitle>Criar um projeto</VCardTitle>

                <VCardText>
                    <VContainer>
                        <VTextField
                            v-model="form.data.title"
                            placeholder="Título da atividade"
                            label="Título"
                            required
                        />
                        <VTextField
                            v-model="form.data.starts_at"
                            type="datetime-local"
                            placeholder="Data e hora de início"
                            label="Data inicial"
                            required
                        />
                        <VTextField
                            v-model="form.data.ends_at"
                            type="datetime-local"
                            placeholder="Data e hora de termino"
                            label="Data final"
                            required
                        />
                    </VContainer>
                </VCardText>

                <VCardActions>
                    <section class="flex w-full justify-end">
                        <VBtn type="button" @click="dialog = false">Fechar</VBtn>
                        <VBtn color="primary" type="submit">Criar</VBtn>
                    </section>
                </VCardActions>
            </VForm>
        </VCard>
    </VDialog>
</template>
<script setup lang="ts">
import { Project } from '~~/types';

const { dialog } = defineModel<{ dialog: boolean }>();

const props = defineProps<{ project: Project }>();

const { form, submit } = makeForm();

const emit = defineEmits<{
    (event: 'newTaskCreated'): void;
}>();

function makeForm() {
    const formUrl = computed(() => `projects/${props.project.id}/tasks`);
    const form = useForm<{
        title: string;
        starts_at: string;
        ends_at: string;
    }>(formUrl.value);

    const submit = () => {
        form.post().then(() => {
            // TODO: se der erro não fechar o modal e mostrar o feedback dos erros
            dialog.value = false;
            emit('newTaskCreated');
        });
    };

    return {
        form,
        submit,
    };
}
</script>
