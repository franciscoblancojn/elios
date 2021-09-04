import {mapUser} from '@/functions/index'
import {CreateAccount} from '@/app/app'
import { useRouter } from "next/router"

/**
 * loginEmailPassword
 * @description generar login por firebase con Email y Password
 * @param {e returnMessage fLogin} 
 */
const loginEmailPassword = (firebase) => async (user) => {
    const router = useRouter()
    try {
        const respond = await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
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
export default loginEmailPassword