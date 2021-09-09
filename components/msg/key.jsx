import {getUser} from "@/functions/index";

const Key = (props) => {
    const copyKey = () => {
        var copyText = document.getElementById("key");
        copyText.select();
        document.execCommand("copy");
    }
    const user = getUser()
    return (
        <div className="msg-key"> 
            <input value={user.key} id="key" style={{position:"fixed",left:"100%",top:"100%"}}/>
            <button onClick={copyKey}>{props.text}</button>
        </div>
    )
}

export default Key