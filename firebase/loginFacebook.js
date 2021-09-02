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
            console.log(result);
            throw 'error in login'
        }
    } catch (error) {
        console.log(error);
    }
}
export default loginFacebook