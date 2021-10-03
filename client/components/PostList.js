import React from 'react';
import Post from './Post'

const PostList = ({posts}) => {
    return ( <>
        <div  key= {"p"} className="grid">
        {posts.map(post => (
             <Post post={post} />
        ))}
        </div> 
        
        <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justif-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }  
        `}        
        </style>
   </> )
}

export default PostList;