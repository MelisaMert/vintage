import React from 'react';
import Link from 'next/link';

const Comment = ({comment}) => {
    return ( <>
         <Link href={`/comments/${comment.id}`}>
             <a className="card">
                 <h3>{comment.name}</h3>
             </a>
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
        </>
    )
}

export default Comment;