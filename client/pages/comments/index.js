import Head from "next/head";
import axios from 'axios';
import CommentList from '../../components/CommentList';

export default function Comments({comments}){
     return(
         <div>
             <Head>
                <title>Comments</title>
                <link rel="icon" href="/vercel.svg" />
            </Head>
            <CommentList comments={comments} />
         </div>
    )
}

// Pre-rendering Form -  (Server Side Rendering)

export const getStaticProps = async() => {
   let comments;
   try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
      comments = response.data;
   }catch(e){
       throw e;
   }

   return {
       props: {
           comments
       }
   }
}