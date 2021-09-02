import '../styles/global.css'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';

import Maintenance from '@/components/maintenance'

function MyApp({ Component, pageProps }) {
  return <Maintenance/>
  return <Component {...pageProps} />
}
export default MyApp
