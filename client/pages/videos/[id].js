import React from 'react';
import axios from 'axios';
import { URL } from "../../environment/index";

const VideoDetails = ({video}) => {
    return (
        <div>
          <p>{video.name}</p>
          <p>{video.content}</p>
        </div>
    )
};

export const getStaticPaths = async() => {
    // spesifik bir post bulmayacak , tüm postları yakalayacak
    let videos;
    try { 
      const res = await axios.get(`${URL}/api/videos`);
      videos = res.data;
    } catch(e) {
        throw e;
    }

   // post'un id 'si yakalanır . getStaticProps ile yakaladığım id'nin spesifik bilgilerini elde edeceğim.
    const paths = videos.map(video => {
        return {
            params: {id: video.id.toString()}
        }
    })

    return {
        paths,
        fallback: false // Ekranı bulamazsa ekranda 404 hatası 
    }
};

// Spesifik olarak bir postun verisini yakaladım,
export const getStaticProps = async (context) => {
    let video;
    try {
      const res = await axios.get(`${URL}/api/videos/${context.params.id}`)
      video = res.data;
    }catch(e){
        throw e;
    }

    return {
        props: {
            video
        }
    }
  
}

export default VideoDetails;

