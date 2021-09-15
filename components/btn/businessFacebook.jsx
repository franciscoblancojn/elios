import { useState, useEffect } from "react"
import Head from 'next/head'


const BusinessFacebook = ({lang,site}) => {
    const Connected = () => {
        FB.init({
            appId            : process.env.ID_APP_FACEBOOK,
            version          : 'v12.0'
        });
        FB.login(function(response) {
            if (response.status === 'connected') {
                var accessToken = response.authResponse.accessToken;
                console.log(accessToken);
            } 
        });
    }
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
                <button className="businessFacebook" onClick={Connected}>
                    {lang.sites.conectar} Facebook
                </button>
            </div>
        }
    </>
}
export default BusinessFacebook