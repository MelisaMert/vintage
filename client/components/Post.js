import React from 'react';
import Link from "next/Link";


const Post = ({post}) => {
    return (<>  
            <Link href={`/posts/${post.id}`}>
              <a className="card">
               <h3>{post.title}</h3>
              </a>
       
            {/* <p>{post.body}</p> */}
             </Link>

      <style jsx>
          {`
           .card {
           margin:1rem;
           flex-basix:45%;
           padding: 1.5rem;
           text-align: left;
           color:inherit;
           text-decoration: none;
           border: 1px solid #eaeaea;
           border-radius: 10px;
           transition: color 0.15s ease, border-color 0.15s ease;
          }  
        `}        
        </style>
    
    </>)
}

export default Post;