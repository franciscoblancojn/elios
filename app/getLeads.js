import request from "@/app/request"
import {getSiteSelected} from "@/functions/index";

const getLeads = async ({npage=10,page=1,query={},sort={},distinct}) => {
    const arg = {
        host : getSiteSelected()?.host || "",
        npage,
        page,
        query : JSON.stringify(query),
        sort : JSON.stringify(sort),
        distinct
    }
    const params = Object.keys(arg).map(key => arg[key] ? key + '=' + arg[key] : "a=1").join('&');
    const respond = await request({
        method : "GET", 
        rute : `leads?${params}`
    })
    return respond
}
export default getLeads