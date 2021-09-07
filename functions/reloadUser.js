import {saveCookie} from '@/functions/index'
import {getUser} from "@/functions/index";

import {CreateAccount} from '@/app/app'

const reloadUser = async () => {
    try {
        const user = getUser()
        const result = await CreateAccount({
            uid:user.uid,
            email:user.email
        })
        if(result.type == "ok"){
            const token = result.token
            saveCookie(JSON.stringify({
                login:true,
                token
            }))
        }else{
            saveCookie(JSON.stringify({
                login:false
            }))
            return {
                type:"error",
                error:result.error,
                msj : result.msj,
            }
        }
    } catch (error) {
        console.log('error',error);
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default reloadUser