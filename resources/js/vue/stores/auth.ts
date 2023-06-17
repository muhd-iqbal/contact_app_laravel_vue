import { defineStore } from "pinia";
import { useUserStore } from "./users";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null
    }),
    actions: {
        login(id: String) {
            const { users } = useUserStore();
            const user = users.filter((u) => u.id);
            
            if (user.length < 1) {
                return false;
            }

            (this as any).user = id;
            return true;
        },
        getUser() {
            return this.user;
        }
    }
})