import React from 'react';
import axios from 'axios';

const PostDetails = ({post}) => {
    return (
        <div>
          <h3>{post.title} </h3>
          <p>{post.body}</p>
        </div>
    )
};

export const getStaticPaths = async() => {
    let posts;
    try { 
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
      posts = res.data;
    } catch(e) {
        throw e;
    }

    const paths = posts.map(post => {
        return {
            params: {id: post.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async (context) => {
    let post;
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
      post = res.data;
    }catch(e){
        throw e;
    }

    return {
        props: {
            post
        }
    }
  
}

export default PostDetails;

