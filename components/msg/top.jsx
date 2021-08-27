const MsgTop = (props) => {
    return (
        <div className="msg-top"> 
            <h1>
                {props.icon || ""}
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
            <style jsx global>
                {`
                body{
                    padding-top:100px;
                }
                `}
            </style>
        </div>
    )
}

export default MsgTop