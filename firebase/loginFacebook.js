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
export default loginFacebook