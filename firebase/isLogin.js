import {mapUser} from '@/functions/index'
import {saveCookie} from "@/functions/index";

import {CreateAccount} from '@/app/app'

/**
 * isLogin
 * @description verifica si es login o no 
 * @returns {*} promesa
 */
const isLogin = (firebase) => async () =>{
    firebase
        .auth()
        .onAuthStateChanged( async user => {
            try {
                const result = await CreateAccount(mapUser(user))
                if(result.type == "ok"){
                    const token = result.token
                    saveCookie(JSON.stringify({
                        login:true,
                        token
                    }))
                }else{
                    saveCookie(JSON.stringify({
                        login:false
                    }))
                    return {
                        type:"error",
                        error:result.error,
                        msj : result.msj,
                    }
                }
            } catch (error) {
                console.log('error',error);
                saveCookie(JSON.stringify({
                    login:false
                }))
                return {
                    type:"error",
                    error,
                    msj : `${error}`
                }
            }
        })
}
export default isLogin