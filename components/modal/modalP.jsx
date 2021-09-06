import { useState, useEffect } from "react"
import Modal from '@/components/modal/modal'

const ModalP = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    return <Modal open={showModal} btn="Show More" closeModal={()=>{setShowModal(false)}} toggelModal={()=>{setShowModal(!showModal)}}>
        {children}
    </Modal>
}
export default ModalP