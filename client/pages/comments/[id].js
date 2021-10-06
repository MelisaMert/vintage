import axios from 'axios';
import React from 'react';

const CommentDetails = ({ comment }) => {
    return (<>
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <p>{`Post Id: ${comment.postId}`}</p>
        </div>
    </>)
};

//pre-rendering - Form 1 Static Generation
// Why i didn't use Form2 (Server-Side Rendering) while using just getStaticProps ?

export const getStaticPaths = async () => {
    let comments;
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/`);
        comments = res.data;
    } catch (e) {
        throw e;
    }

    const paths = comments.map(comment => {
        return {
            params: {id: comment.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }

}


export const getStaticProps = async (context) => {
   let comment;
   try {
       const res = await axios.get(`https://jsonplaceholder.typicode.com/comments/${context.params.id}`);
       comment = res.data;
   } catch(e){
       throw e;
   }

   return {
       props: {
           comment
       }
   }

}
export default CommentDetails;

