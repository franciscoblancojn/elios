import { useState, useEffect } from "react"

import {deleteSite} from "@/app/app"

import Modal from '@/components/modal/modal'

const BtnDeleteSite = ({site}) => {
    const [showModal, setShowModal] = useState(false)
    return <>
        <div className="btn-delete-site">
            <Modal open={showModal} btn={(<><img src="/icons/delete.svg" alt="delete" />Eliminar Sitio</>)} closeModal={()=>{setShowModal(false)}} toggelModal={()=>{setShowModal(!showModal)}}>
                <div className="verifit-delete">
                    <h1>Estas completamente seguro</h1>
                    <div className="content-button">
                        <button className="delete" onClick={()=>{deleteSite(site)}}>Si</button>
                        <button onClick={()=>{setShowModal(false)}}>No</button>
                    </div>
                </div>
            </Modal>
        </div>
    </>
}
export default BtnDeleteSite