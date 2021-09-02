import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'

/**
 * loginEmailPassword
 * @description generar login por firebase con Email y Password
 * @param {e returnMessage fLogin} 
 */
const loginEmailPassword = (firebase) => async (user) => {
    try {
        const respond = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        const result = await CreateAccount(mapUser(respond.user))
        if(result.type == "ok"){
            const token = result.token
            document.cookie = token
        }else{
            return {
                type:"error",
                error:result.error,
                msj : result.msj,
            }
        }
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default loginEmailPassword