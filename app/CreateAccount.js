import request from "@/app/request"

const CreateAccount = async (data) => {
    const respond = await request({
        method : "POST", 
        json : {
            data
        }, 
        rute : "user"
    })
    return respond
}
export default CreateAccount