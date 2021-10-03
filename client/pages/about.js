import Link from 'next/link';
import Head from 'next/head';
import * as React from 'react';

  export default function About(props) {
    // console.log(props.x);
    return (
      <>
      <Head>
          <title>About Page</title>
          <link rel="icon" href="/vercel.svg" />
      </Head>
      <h1 className="greenColor">About</h1>

      <style jsx>{`
       .greenColor {
         color: green
        }
      `}
      </style>
      </>
    );
  }

  // export async function getStaticProps(){
  //   let data = [{id:1, name:"a"},{id:2, name: "b"}];
  //   return {
  //     props: {x: data}
  //   }
  // }


