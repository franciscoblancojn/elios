const Host = (props) => {
    return (
        <div className="msg-host"> 
            {props.currentUser.host.map((e,i)=>{
                return(
                    <div className="item" key={i}>
                        <img src="/icons/iconList.png" alt="ok"/>
                        {e}
                    </div>
                )
            })}
        </div>
    )
}

export default Host