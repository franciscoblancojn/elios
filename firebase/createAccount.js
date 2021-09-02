import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'

/**
 * createAccount
 * @description crea usuario por firebase con Email y Password
 * @param {e returnMessage fLogin} 
 */
const createAccount = (firebase) => async (user) => {
    try {
        const respond = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        delete user.password
        const result = await CreateAccount({
            ...user,
            ...mapUser(respond.user)
        })
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
export default createAccount