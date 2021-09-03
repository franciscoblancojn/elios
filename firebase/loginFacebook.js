import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'
/**
 * loginFacebook
 * @description genera popup para login con facebook
 */
 const loginFacebook = (firebase) => async () => {
    try {
        var provider = new firebase.auth.FacebookAuthProvider();
        const respond = await firebase.auth().signInWithPopup(provider)
        const result = await CreateAccount(mapUser(respond.user))
        return result
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default loginFacebook