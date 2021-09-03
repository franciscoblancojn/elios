import {mapUser} from '@/functions/index'


/**
 * isLogin
 * @description verifica si es login o no 
 * @param {*} onChange 
 * @returns {*} promesa
 */
const isLogin = (firebase) => async (onChange) =>{
    try {
        const respond = await firebase.auth()
        console.log(respond);
        const resutl = await respond.onAuthStateChanged(user => {
            console.log(user);
            const UserR = mapUser(user)
            console.log(UserR)
        })
        console.log(resutl());
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default isLogin