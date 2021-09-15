import { useState, useEffect } from "react"
import { useRouter } from "next/router"

import {deleteSite} from "@/app/app"

import {reloadUser} from "@/functions/index";

import Modal from '@/components/modal/modal'
import LoaderCircle from "@/components/loader/circle";

const BtnDeleteSite = ({site}) => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)
    const [loader, setLoader] = useState(false)
    const deleteSiteClick = async () => {
        setLoader(true)
        await deleteSite(site)
        await reloadUser()
        router.push("/")
    }
    return <>
        {loader ? <LoaderCircle/> :
        <div className="btn-delete-site">
            <Modal open={showModal} btn={(<><img src="/icons/delete.svg" alt="delete" />Eliminar Sitio</>)} closeModal={()=>{setShowModal(false)}} toggelModal={()=>{setShowModal(!showModal)}}>
                <div className="verifit-delete">
                    <h1>Estas completamente seguro</h1>
                    <div className="content-button">
                        <button className="delete" onClick={deleteSiteClick}>Si</button>
                        <button onClick={()=>{setShowModal(false)}}>No</button>
                    </div>
                </div>
            </Modal>
        </div>
        }
    </>
}
export default BtnDeleteSite