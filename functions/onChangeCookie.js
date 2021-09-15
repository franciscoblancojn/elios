import {getCookie} from "@/functions/index";

/**
 * onChangeCookie
 * @description detecta cuando cambia la cookie
 * @param {*} onChange 
 */
const onChangeCookie = (onChange) => {
    let lastCookie = getCookie();
    setInterval(()=> {
        let cookie = getCookie();
        console.log(cookie);
        console.log(lastCookie);
        if (cookie != lastCookie) {
            try {
                console.log('change');
                onChange()
            } finally {
                lastCookie = cookie;
            }
        }
    }, 1000);
}
export default onChangeCookie