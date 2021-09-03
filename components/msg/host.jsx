import {getUser} from "@/functions/index";

const Host = (props) => {
    const user = getUser()
    const sites = user.sites
    return (
        <div className="msg-host"> 
            {sites.map((site,i)=>{
                return(
                    <div className="item" key={i}>
                        <img src="/icons/iconList.png" alt="ok"/>
                        {site.host}
                    </div>
                )
            })}
        </div>
    )
}

export default Host