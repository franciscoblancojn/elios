import firebase from 'firebase'

/**
 * @description configuracion para firebase
 */
const firebaseConfig = {
    apiKey: "AIzaSyBvRUvYo-D9MJvk2LvdSP3hS5ZpHxx9H8w",
    authDomain: "eliosanalytics.firebaseapp.com",
    projectId: "eliosanalytics",
    storageBucket: "eliosanalytics.appspot.com",
    messagingSenderId: "426648683005",
    appId: "1:426648683005:web:4e620b901adce0322c5994",
    measurementId: "G-D1FJ19GKC8"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

import f_isLogin from '@/firebase/isLogin'
export const isLogin = () => f_isLogin(firebase) 

import f_loginGoogle from '@/firebase/loginGoogle'
export const loginGoogle = f_loginGoogle(firebase)

import f_loginFacebook from '@/firebase/loginFacebook'
export const loginFacebook = f_loginFacebook(firebase)

import f_loginEmailPassword from '@/firebase/loginEmailPassword'
export const loginEmailPassword = f_loginEmailPassword(firebase)

import f_createAccount from '@/firebase/createAccount'
export const createAccount = f_createAccount(firebase)

import f_resetPassword from '@/firebase/resetPassword'
export const resetPassword = f_resetPassword(firebase)

import f_logout from '@/firebase/logout'
export const logout = f_logout(firebase)
