import Link from 'next/link';
import Head from 'next/head';

export default function Post(){
    return <div>
        <Head>
            <title>Post</title>
        </Head>
        <h2>Post</h2>
        <Link href="/">
            Back
        </Link>
     </div>
}