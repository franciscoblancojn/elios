import { useState, useEffect } from "react"
import Head from 'next/head'

import {getUser} from '@/functions/index'

const BusinessFacebook = ({lang,site}) => {
    return <>
        <Head>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
        </Head>
        {
            site.facebook ? 
            <div>

            </div>
            :
            <div className="flex">
                <img src="/icons/facebook.png" alt="facebook" style={{marginRight:"5px"}}/>
                <button className="businessFacebook">
                    {lang.sites.conectar} Facebook
                </button>
            </div>
        }
    </>
}
export default BusinessFacebook