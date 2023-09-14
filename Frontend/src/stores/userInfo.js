import { defineStore } from 'pinia';

export const useUserInfoStore = defineStore('userInfo', {
  state() {
    return {
      idUser: localStorage.idUser || 0,
    };
  },
  actions: {
    setIdUser(newUserId) {
      this.idUser = newUserId;
    },
  },
});