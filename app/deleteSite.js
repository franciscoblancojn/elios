import request from "@/app/request"

const deleteSite = async (site) => {
    const respond = await request({
        method : "DELETE", 
        json : {
            data:{
                site
            }
        }, 
        rute : "sites"
    })
    return respond
}
export default deleteSite