import {mapUser} from '@/functions/index'
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
        if(result.type == "ok"){
            const token = result.token
            console.log(token);
        }else{
            console.log(result);
            throw 'error in login'
        }
    } catch (error) {
        console.log(error);
    }
}
export default loginGoogle