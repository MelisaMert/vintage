import Header from '../components/Header';
import Layout from '../components/Layout'
import '../public/styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Global css import
// Application Page Returns
export default function App({ Component, pageProps }) {
    return <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
}