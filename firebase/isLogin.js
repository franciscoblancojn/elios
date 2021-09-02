import {mapUser} from '@/functions/index'


/**
 * isLogin
 * @description verifica si es login o no 
 * @param {*} onChange 
 * @returns {*} promesa
 */
const isLogin = (firebase)=>(onChange) =>{
    return firebase
    .auth()
    .onAuthStateChanged(user => {
        const UserR = mapUser(user)
        onChange(UserR)
    })
}
export default isLogin