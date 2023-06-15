import { defineStore } from "pinia";
import { useUserStore } from "./users";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null
    }),
    actions: {
        login(username: string, password: string) {
            const { users } = useUserStore();
            const user = users.filter((u) => u.email == username)

            if (user.length < 1) {
                return false;
            }

            if (user[0].password != password) {
                return false;
            }

            (this as any).user = user[0];
            return true;
        },
        getUser() {
            return this.user;
        }
    }
})