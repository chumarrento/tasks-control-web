import { useAuth } from '~~/composables/useAuth';

export default defineNuxtRouteMiddleware(async () => {
    const router = useRouter();

    if (!localStorage.getItem('accessToken')) {
        router.push('/login');
    }
    useAuth()
        .loadIfNotLoaded()
        .catch(() => {
            router.push('/login');
        });
});
