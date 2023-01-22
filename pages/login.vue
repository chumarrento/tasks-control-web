<template>
    <VLayout>
        <VMain class="flex flex-col h-screen items-center justify-center">
            <div class="form-card">
                <h1 class="text-slate-50 font-semibold mb-5 text-lg text-center">Bem vindo ao tasks control</h1>
                <VForm class="w-full" @submit.prevent="submit">
                    <VTextField v-model="form.data.email" label="Email" type="email" placeholder="Digite seu email"
                        class="mb-2" />
                    <VTextField v-model="form.data.password" label="Senha" type="Password"
                        placeholder="Digite sua senha" />

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
import { User } from '~~/types';

const userStore = useUser();
const router = useRouter();
const { form, submit } = makeForm();


function makeForm() {
    const form = useForm<{
        email: string;
        password: string;
    }>('auth/login');

    const submit = async () => {
        const response = await form.post<{ user: User, token: string }>();
        if (response) {
            localStorage.setItem('accessToken', response.token);
            userStore.setUser(response.user);
            router.push('/app');
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
    @apply bg-slate-700 flex flex-col justify-center h-full items-center w-full p-8 rounded md: w-[50%] lg:w-[30%] md:max-h-72;
}
</style>