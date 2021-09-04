import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'
import { useRouter } from "next/router"

/**
 * loginGoogle
 * @description genera popup para login con google
 */
const loginGoogle =  (firebase) => async () => {
    const router = useRouter()
    try {
        var provider = new firebase.auth.GoogleAuthProvider();
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
export default loginGoogle