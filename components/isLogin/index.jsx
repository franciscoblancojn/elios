import { useState, useEffect } from "react"
import { useRouter } from "next/router"

const Islogin = ({children}) => {
    const [content, setContent] = useState()
    const router = useRouter()

    const loadContent = () => {
        try {
            const cookie = JSON.parse(document.cookie)
            if(cookie.login){
                setContent(children)
            }else{
                router.push("/login")
            }
        } catch (error) {
            console.log(error);
            router.push("/login")
        }
    }
    useEffect(() => {
        loadContent()
    }, [])
    return <>{content}</>
}
export default Islogin