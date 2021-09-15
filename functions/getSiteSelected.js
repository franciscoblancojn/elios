import {getUser} from "@/functions/index";

const getSiteSelected = () => {
    const user = getUser()
    const sites = user.sites || []
    try {
        const site = JSON.parse(localStorage.getItem('site'))
        if(sites.find((e)=>e.host==site.host)){
            return site
        }
    } catch (error) {
        return sites[0]
    }
    return sites[0]
}
export default getSiteSelected