import { initializeApp } from "firebase/app";
import {
  getAuth,
} from "firebase/auth";
import { initUser } from "~~/composables/useFirebase";

export default defineNuxtPlugin((nuxtApp) => {


  const firebaseConfig = {
    apiKey: "AIzaSyAtz4IH8zY1iaMIXoPBXC_JZ4fcaHJ4b2w",
    authDomain: "compassdev-940a1.firebaseapp.com",
    projectId: "compassdev-940a1",
    storageBucket: "compassdev-940a1.appspot.com",
    messagingSenderId: "177153033431",
    appId: "1:177153033431:web:3d4bdacb65accd81305c92",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);

});