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
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default createAccount