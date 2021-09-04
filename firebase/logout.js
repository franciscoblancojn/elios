import { useRouter } from "next/router"

/**
 * logout
 * @description cerrar sesion
 */
const logout = (firebase) => async () => {
    const router = useRouter()
    try {
        const respond = await firebase.auth().signOut()
        document.cookie = JSON.stringify({
            login:false
        })
        router.push("/login")
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