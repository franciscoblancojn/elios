import {redirect} from '@/functions/index'

/**
 * logout
 * @description cerrar sesion
 */
const logout = (firebase) => async () => {
    try {
        const respond = await firebase.auth().signOut()
        document.cookie = JSON.stringify({
            login:false
        })
        redirect("/login")
        return respond
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default logout