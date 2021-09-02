import firebase from 'firebase'
import {CreateAccount} from '@/app/app'

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

/**
 * mapUser
 * @description mapea el resultado para retornar user
 * @param {*} user 
 * @returns {email , password}
 */
const mapUser = (user) => {
    if(user == undefined)return undefined
    return {
        email:user.email,
        uid:user.uid
    }
}

import f_isLogin from '@/firebase/isLogin'
export const isLogin = () => f_isLogin(firebase) 

import f_loginGoogle from '@/firebase/loginGoogle'
export const loginGoogle = f_loginGoogle(firebase)
/**
 * loginFacebook
 * @description genera popup para login con facebook
 */
export const loginFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result)=>{
            CreateAccount(mapUser(result.user))
        })
        .catch((error) => {
            console.log(error);
        });
}
/**
 * loginEmailPassword
 * @description generar login por firebase con Email y Password
 * @param {e returnMessage fLogin} 
 */
export const loginEmailPassword = (e , returnMessage,fLogin) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(e.email, e.password)
        .then((result) => {
            fLogin()
        })
        .catch((error) => {
            returnMessage({
                msj : (
                    <span className="error">
                        {error.message}
                    </span>
                ),
                ...error
            })
        });
}

/**
 * createAccount
 * @description crea usuario por firebase con Email y Password
 * @param {e returnMessage fLogin} 
 */
export const createAccount = (e , returnMessage) => {
    if(e.name.replaceAll(" ","") == ""){
        returnMessage({
            msj : (
                <span className="error">
                    Name Empty
                </span>
            ),
            code:"auth/invalid-name"
        })
        return;
    }
    if(e.surname.replaceAll(" ","") == ""){
        returnMessage({
            msj : (
                <span className="error">
                    Surname Empty
                </span>
            ),
            code:"auth/invalid-surname"
        })
        return;
    }
    firebase
        .auth()
        .createUserWithEmailAndPassword(e.email, e.password)
        .then((userCredential) => {
            var user = mapUser(userCredential.user)
            console.log(user);
            CreateAccount(
                {
                    ...user,
                    ...e
                },
                (result) => {
                    if(result.type == "error"){
                        returnMessage({
                            msj : (
                                <span className="error">
                                    {result.msj}
                                </span>
                            ),
                            ...result
                        })
                    }else{
                        console.log("yes");
                    }
                }
            )
        })
        .catch((error) => {
            returnMessage({
                msj : (
                    <span className="error">
                        {error.message}
                    </span>
                ),
                ...error
            })
        });
}
/**
 * resetPassword
 * @description Envia Correo Electronico para cambiar contrase;a
 * @param {email,respondOk,respondError} 
 */
export const resetPassword = ({email},respondOk = (e) => console.log(e),respondError = (e) => console.log(e)) => {
    firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then((e) => {
            respondOk({
                message : "Check your email"
            })
        })
        .catch((error) => {
            respondError({
                msj : (
                    <span className="error">
                        {error.message}
                    </span>
                ),
                ...error
            })
        })
}
/**
 * logout
 * @description cerrar sesion
 */
export const logout = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log("logout");
        }).catch((error) => {
            console.log("error",error);
        });
}