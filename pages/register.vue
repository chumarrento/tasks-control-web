<template>
    <VLayout>
        <VMain class="flex flex-col h-screen items-center justify-center">
            <div class="form-card">
                <h1 class="text-slate-50 font-semibold mb-5 text-lg text-center">Bem vindo ao tasks control</h1>
                <VForm class="w-full" @submit.prevent="submit">
                    <VTextField v-model="form.data.name" label="Nome" type="text" placeholder="Digite seu nome"
                        class="mb-2" />
                    <VTextField v-model="form.data.email" label="Email" type="email" placeholder="Digite seu email"
                        class="mb-2" />
                    <VTextField v-model="form.data.password" label="Senha" type="password"
                        placeholder="Digite sua senha" class="mb-2" />
                    <VTextField v-model="form.data.password_confirmation" label="Confirmação da senha" type="password"
                        placeholder="Digite a confirmação da senha" />

                    <section class="flex justify-between">
                        <NuxtLink class="text-violet-300" to="register">Ainda não tem conta? Registre-se</NuxtLink>
                        <VBtn type="submit" :loading="form.busy.value" :disabled="form.busy.value">Entrar</VBtn>
                    </section>
                </VForm>

            </div>
        </VMain>
    </VLayout>
</template>

<script setup lang="ts">
const { form, submit } = makeForm();

const router = useRouter();

function makeForm() {
    const form = useForm<{
        name: string;
        email: string;
        password: string;
        password_confirmation: string;
    }>('auth/register');

    const submit = async () => {
        const response = await form.post<{ message: string }>();
        if (response) {
            router.push('/login');
        }
    }

    return {
        form,
        submit
    }
}


</script>

<style scoped lang="css">
.form-card {
    @apply bg-slate-700 flex flex-col justify-center h-full w-full items-center p-8 rounded md:w-[50%] lg:w-[30%] md:max-h-[50%];
}
</style>