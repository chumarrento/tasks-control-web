import { Optional, User } from '~~/types';

export const userStore = defineStore('user', {
    state: () => ({
        user: undefined as Optional<User>,
    }),
    actions: {
        setUser(user: User) {
            this.user = user;
        },
    },
});
