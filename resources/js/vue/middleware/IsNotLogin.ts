import { useAuthStore } from "@/stores/auth";
export const IsNotLogin = (to: any, from: any, next: any) => {
    const authStore = useAuthStore();
    if (authStore.getUser() == null) {
        next({ name: "login" });
    }
}