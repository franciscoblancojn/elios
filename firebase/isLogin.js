import {mapUser} from '@/functions/index'
import {saveCookie} from "@/functions/index";

import {CreateAccount} from '@/app/app'

/**
 * isLogin
 * @description verifica si es login o no 
 * @returns {*} promesa
 */
const isLogin = (firebase) => async (after = () =>{}) =>{
    firebase
        .auth()
        .onAuthStateChanged( async user => {
            try {
                console.log(mapUser(user));
                const result = await CreateAccount(mapUser(user))
                console.log(result);
                if(result.type == "ok"){
                    const token = result.token
                    saveCookie(JSON.stringify({
                        login:true,
                        token
                    }))
                    after()
                }else{
                    saveCookie(JSON.stringify({
                        login:false
                    }))
                    after()
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
                after()
                return {
                    type:"error",
                    error,
                    msj : `${error}`
                }
            }
        })
}
export default isLogin