
/**
 * logout
 * @description cerrar sesion
 */
const logout = (firebase) => async () => {
    try {
        const respond = await firebase.auth().signOut()
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