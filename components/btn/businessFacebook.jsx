import { useState, useEffect } from "react"
import Head from 'next/head'

import {updateSite} from '@/app/app'
import Modal from '@/components/modal/modal'

const BusinessFacebook = ({lang,site,ID_APP_FACEBOOK}) => {
    const [showModal, setShowModal] = useState(false)
    const Connected = () => {
        FB.init({
            appId            : ID_APP_FACEBOOK,
            version          : 'v12.0'
        });
        FB.login(async function(response) {
            console.log(response);
            if (response.status === 'connected') {
                const tokenFacebook = response.authResponse.accessToken;
                await updateSite({
                    where:{
                        host:site.host
                    },
                    data : {
                        tokenFacebook
                    }
                })
                window.location.reload()
            } 
        });
    }
    const Disconnected = async () => {
        await updateSite({
            where:{
                host:site.host
            },
            data : {
                tokenFacebook:null
            }
        })
        window.location.reload()
    }
    return <>
        <Head>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
        </Head>
        {
            site.tokenFacebook ? 
            <>
                <Modal open={showModal} closeModal={()=>{setShowModal(false)}} toggelModal={()=>{setShowModal(!showModal)}}>
                    <div className="verifit-delete">
                        <h1>{lang.modal.seguro}</h1>
                        <div className="content-button">
                            <button className="delete" onClick={Disconnected}>{lang.modal.si}</button>
                            <button onClick={()=>{setShowModal(false)}}>{lang.modal.no}</button>
                        </div>
                    </div>
                </Modal>
                <div className="flex flex-align-top"> 
                    <img src="/icons/facebook.png" alt="facebook" style={{marginRight:"5px"}}/>
                    <div className="connectFacebook">
                        {lang.sites.conectado} Facebook
                        <div className="flex flex-between">
                            <span className="conectada">
                            {lang.sites.conectada}
                            </span>
                            <span className="deconectar" onClick={()=>{setShowModal(true)}}>
                                {lang.sites.deconectar}
                            </span>
                        </div>
                    </div>
                </div>
            </>
            :
            <div className="flex"> 
                <img src="/icons/facebook.png" alt="facebook" style={{marginRight:"5px"}}/>
                <button className="businessFacebook" onClick={Connected}>
                    {lang.sites.conectar} Facebook
                </button>
            </div>
        }
    </>
}
export default BusinessFacebook