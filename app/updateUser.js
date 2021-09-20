import request from "@/app/request"

const updateUser = async ({data,where}) => {
    const respond = await request({
        method : "PUT", 
        json : {
            data,
            where
        }, 
        rute : "user"
    })
    return respond
}
export default updateUser