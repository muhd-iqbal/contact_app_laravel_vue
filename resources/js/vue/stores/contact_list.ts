import { defineStore } from "pinia";

interface Contact {
    id: string
    first_name: string,
    last_name: string
    company: string
    job_title: string
    email: string
    phone: string
    remark?: string
}


export const useContactListStore = defineStore("contact-list", {
    state: () => ({
        contacts: [] as Contact[]
    }),
    actions: {
        // setValue(field:keyof ContactForm,val: string) {
        //     this[field] = val;
        // }
        store(contact: Contact) {
            this.contacts.push(contact);
        },
        update(contact: Contact) {
            const i = this.contacts.findIndex((con) => con.id == contact.id);

            // -1 ? >= 0

            if (i != -1) {
                this.contacts[i].first_name = contact.first_name;
                this.contacts[i].last_name = contact.last_name;
                this.contacts[i].company = contact.company;
                this.contacts[i].job_title = contact.job_title;
                this.contacts[i].email = contact.email;
                this.contacts[i].phone = contact.phone;
                this.contacts[i].remark = contact.remark;
            }
        },
        deleteContact(id: string) {
            const i = this.contacts.findIndex((contact) => contact.id == id);

            if (i != -1) {
                this.contacts.splice(i, 1);
            }
        }
    },
    getters: {}
});