import React from "react";
import Comment from './Comment';
import Table from 'react-bootstrap/Table'

const CommentList = ({ comments }) => {
  return (<>
    <Table
      responsive
      striped
       bordered
      hover
      // variant="dark"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Content</th>
          <th>PostId</th>
        </tr>
      </thead>
      <tbody>
        {comments.map(comment => (
          <tr>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
            <td>{comment.postId}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </>)

}

export default CommentList;