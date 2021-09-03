import {mapUser} from '@/functions/index'
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
                    document.cookie = JSON.stringify({
                        login:true,
                        token
                    })
                }else{
                    document.cookie = JSON.stringify({
                        login:false
                    })
                    return {
                        type:"error",
                        error:result.error,
                        msj : result.msj,
                    }
                }
            } catch (error) {
                document.cookie = JSON.stringify({
                    login:false
                })
                return {
                    type:"error",
                    error,
                    msj : `${error}`
                }
            }
        })
}
export default isLogin