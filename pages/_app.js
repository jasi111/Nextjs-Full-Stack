import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
    //write in one single line
}

export default MyApp
