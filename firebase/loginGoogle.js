import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'

/**
 * loginGoogle
 * @description genera popup para login con google
 */
const loginGoogle = (firebase) => () => {
    console.log(1);
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result)=>{
            CreateAccount(mapUser(result.user))
        })
        .catch((error) => {
            console.log(error);
        });
}
export default loginGoogle