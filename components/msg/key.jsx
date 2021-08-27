const Key = (props) => {
    const copyKey = () => {
        var copyText = document.getElementById("key");
        copyText.select();
        document.execCommand("copy");
    }
    return (
        <div className="msg-key"> 
            <input value={props.currentUser.key} id="key" style={{position:"fixed",left:"100%",top:"100%"}}/>
            <button onClick={copyKey}>Copy Key</button>
        </div>
    )
}

export default Key