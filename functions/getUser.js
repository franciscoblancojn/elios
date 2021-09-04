import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useRouter } from "next/router"

import {getCookie} from "@/functions/index";

const getUser = () => {
    const cookie = JSON.parse(getCookie())
    const token = cookie.token
    
    const user = decodeToken(token);
    const isExpire = isExpired(token);
    if(isExpire){
        const router = useRouter()
        router.push("/login")
    }
    return user
}
export default getUser