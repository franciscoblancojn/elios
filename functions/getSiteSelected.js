import {getUser} from "@/functions/index";

const getSiteSelected = () => {
    const user = getUser()
    const sites = user.sites || []
    const site = localStorage.getItem('site') || sites[0]
    return site
}
export default getSiteSelected