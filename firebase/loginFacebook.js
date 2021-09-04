import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'
import { useRouter } from "next/router"
/**
 * loginFacebook
 * @description genera popup para login con facebook
 */
 const loginFacebook = (firebase) => async () => {
    const router = useRouter()
    try {
        var provider = new firebase.auth.FacebookAuthProvider();
        const respond = await firebase.auth().signInWithPopup(provider)
        const result = await CreateAccount(mapUser(respond.user))
        router.push("/")
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