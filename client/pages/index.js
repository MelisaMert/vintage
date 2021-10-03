import Head from "next/head";

export default function Home({posts}){
  return(
    <div>
    <Head>
      <title>Home</title>
      <link rel="icon"  href="/vercel.svg"/>
    </Head>
    <p>Welcome to Vintage App</p>
    </div>
  )
}

