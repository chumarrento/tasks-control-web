import { User } from '~~/types';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        userStore: userStore(),
    }),
    actions: {
        loadIfNotLoaded(): Promise<User | undefined> {
            return useHttp()
                .get<{ user: User }>('user')
                .then(({ user }) => {
                    if (user) {
                        this.userStore.setUser(user);
                        return user;
                    }
                });
        },
    },
});
