import {getCookie} from "@/functions/index";

const RUTE = "https://pixeltracking.startscoinc.com/api"
const VERSION = "v2"

const request = async ({method = "GET", json = {}, rute = ""}) => {
    const cookie = JSON.parse(getCookie())
    var myHeaders = new Headers();
    myHeaders.append("token", process.env.NEXT_PUBLIC_KEY);
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${cookie.token}`);
    
    var requestOptions = {
      method,
      headers: myHeaders,
      
      redirect: 'follow'
    };
    if(method != "GET"){
        requestOptions.body = JSON.stringify(json)
    }
    try {
        const respond = await fetch(`${RUTE}/${VERSION}/${rute}`, requestOptions)
        const result = await respond.json()
        return result
    } catch (error) {
        return {
            type:"error",
            error,
            msj : `${error}`
        }
    }
}
export default request