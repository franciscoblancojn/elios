
/**
 * isLogin
 * @description verifica si es login o no 
 * @param {*} onChange 
 * @returns {*} promesa
 */
 export const isLogin = (onChange) =>{
    return firebase
    .auth()
    .onAuthStateChanged(user => {
        const UserR = mapUser(user)
        onChange(UserR)
    })
}