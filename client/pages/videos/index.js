import Head from "next/head";
import axios from 'axios'
import Link from "next/link"
import { URL } from "../../environment/index";
  
export default function Videos({videos}){
  return(
    <div>
    <Head>
      <title>Videos</title>
      <link rel="icon"  href="/vercel.svg"/>
    </Head>
      {videos.map(video => (
          <Link key= {video.id} href={`/videos/${video.id}`}>
             <p><a>{video.name}</a></p>
          </Link>
           
      ))}
    </div>
  )
}

export const getStaticProps = async() => {
    let videos;
    try {
     const response = await axios.get(`${URL}/api/videos`);
     videos = response.data;
    } catch(e){
      throw e;
    }
 
  return  {
    props: {
       videos
    }
  }
}