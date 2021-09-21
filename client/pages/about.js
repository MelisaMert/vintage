import Link from 'next/link';
import Head from 'next/head';

export default function About() {
    return<>
        <Head>
            <title>About</title>
        </Head>
        <h3>About</h3>
        <Link href="/">
            Back
        </Link>


     
        <style jsx>{`
             h3 {
               font-size: 30px;
               font-weight: 500px;
               color:orangered;
             } 
        `}</style>
    </>
}