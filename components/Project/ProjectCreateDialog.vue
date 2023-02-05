<template>
    <VDialog v-model="dialog" persistent width="50%">
        <VCard>
            <VForm class="w-full" @submit.prevent="submit">
                <VCardTitle>Criar um projeto</VCardTitle>

                <VCardText>
                    <VContainer>
                        <VTextField v-model="form.data.name" placeholder="Nome do projeto" label="Nome do projeto" />
                        <VTextarea
                            v-model="form.data.description"
                            placeholder="Descrição do projeto"
                            label="Descrição do projeto"
                            color="primary"
                        />
                        <section>
                            <label class="text-xl font-sm">Valor da hora</label>
                            <Money3Component
                                v-model="form.data.amountPerHour"
                                placeholder="Valor da hora"
                                decimal=","
                                thousands="."
                                prefix="R$ "
                                suffix=""
                                :precision="2"
                                :masked="false"
                                :allow-blank="false"
                                class="w-full p-2 bg-[#5D5D5D]"
                            />
                        </section>
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
import { Money3Component } from 'v-money3';

const { dialog } = defineModel<{ dialog: boolean }>();

const { form, submit } = makeForm();

function makeForm() {
    const form = useForm<{
        name: string;
        description: string;
        amountPerHour: string;
    }>('projects');

    const submit = async () => {
        console.log(form.data);
    };

    return {
        form,
        submit,
    };
}
</script>
