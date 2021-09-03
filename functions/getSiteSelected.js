import {getUser} from "@/functions/index";

const getSiteSelected = () => {
    const user = getUser()
    const sites = user.sites || []
    if(localStorage.getItem('site')){
        const site = JSON.parse(localStorage.getItem('site'))
        if(sites.find((e)=>e.host==site.host)){
            return site
        }
    }
    return sites[0]
}
export default getSiteSelected