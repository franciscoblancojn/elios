import request from "@/app/request"

const updateSite = async ({data,where}) => {
    const respond = await request({
        method : "PUT", 
        json : {
            data,
            where
        }, 
        rute : "sites"
    })
    return respond
}
export default updateSite