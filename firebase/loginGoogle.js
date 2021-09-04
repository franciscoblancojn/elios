import {mapUser,redirect} from '@/functions/index'
import {CreateAccount} from '@/app/app'

/**
 * loginGoogle
 * @description genera popup para login con google
 */
const loginGoogle =  (firebase) => async () => {
    try {
        var provider = new firebase.auth.GoogleAuthProvider();
        const respond = await firebase.auth().signInWithPopup(provider)
        const result = await CreateAccount(mapUser(respond.user))
        redirect("/")
        return result
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default loginGoogle