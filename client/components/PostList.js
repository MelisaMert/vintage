import Grid from '@mui/material/Grid';
import React from 'react';
import Post from './Post'

const PostList = ({posts}) => {
    return ( 
       <>
        <Grid container>
          {
            posts.map(post => (
              <Grid id={post.id} item xs={5} md={4}>
                 <Post post={post} />
              </Grid>
          ))}
        </Grid>
   </>)
}

export default PostList;