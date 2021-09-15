
import Head from 'next/head'


const BusinessFacebook = ({lang}) => {
    return <>
        <Head>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
        </Head>
    </>
}
export default BusinessFacebook