import {getUser} from "@/functions/index";

const getSiteSelected = () => {
    const user = getUser()
    const sites = user.sites || []
    if(!localStorage.getItem('site')){
        return sites[0]
    }else{
        return JSON.parse(localStorage.getItem('site'))
    }
}
export default getSiteSelected