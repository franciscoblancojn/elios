import request from "@/app/request"

const getLeads = async ({host,npage=10,page=1,query={},sort={}}) => {
    const arg = {
        host,
        npage,
        page,
        query : JSON.stringify(query),
        sort : JSON.stringify(sort)
    }
    const params = Object.keys(arg).map(key => key + '=' + arg[key]).join('&');
    const respond = await request({
        method : "GET", 
        rute : `leads?${params}`
    })
    return respond
}
export default getLeads