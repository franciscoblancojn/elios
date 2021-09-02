import request from "@/app/request"

const CreateAccount = async (data) => {
    await request({
        method = "POST", 
        json : {
            data
        }, 
        rute : "user"
    })
}
export default CreateAccount