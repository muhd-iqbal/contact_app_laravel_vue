import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore",{
    state:()=>({
        users:[] as any[] 
    }),
    actions:{
        store(user:any){
            this.users.push(user);
        }
    }
});