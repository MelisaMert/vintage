import React from "react";
import Comment from './Comment';

const CommentList = ({comments}) => {
    return (<>
       <div key={""} className="">
         {comments.map(comment => (
             <Comment comment={comment} />
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
    </>)
}

export default CommentList;