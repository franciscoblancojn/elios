
/**
 * mapUser
 * @description mapea el resultado para retornar user
 * @param {*} user 
 * @returns {email , password}
 */
const mapUser = (user) => {
    if(user == undefined)return undefined
    return {
        email:user.email,
        uid:user.uid
    }
}
export default mapUser