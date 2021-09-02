
/**
 * resetPassword
 * @description Envia Correo Electronico para cambiar contrase;a
 * @param {email,respondOk,respondError} 
 */
const resetPassword = (firebase) => async (email) => {
    try {
        const respond = await firebase.auth().sendPasswordResetEmail(email)
        return respond
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default resetPassword