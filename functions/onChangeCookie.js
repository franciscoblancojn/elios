
/**
 * onChangeCookie
 * @description detecta cuando cambia la cookie
 * @param {*} onChange 
 */
const onChangeCookie = (onChange) => {
    let lastCookie = document.cookie;
    setInterval(()=> {
        let cookie = document.cookie;
        if (cookie !== lastCookie) {
            try {
                onChange()
            } finally {
                lastCookie = cookie;
            }
        }
    }, 1000);
}
export default onChangeCookie