import { useEffect } from "react";

const Modal = ({children, btn = "", open = false,toggelModal = ()=>{},closeModal=()=>{}}) => {
    useEffect(() => {
        document.addEventListener("keydown", closeModal, false);
        return () => {
            document.removeEventListener("keydown", closeModal, false);
        }
      }, [])
    return (
        <>
            <button className="btnModal" onClick={toggelModal}>
                {btn}
            </button>
            <div className={`modal ${open?"open":""}`}>
                <div className="bgModal" onClick={closeModal}></div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </>
    )
}
export default Modal