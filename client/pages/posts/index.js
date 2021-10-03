import PostList from '../../components/PostList';
import Head from "next/head";
import axios from 'axios'

export default function Posts({ posts }) {
    return (
        <div>
            <Head>
                <title>Posts</title>
                <link rel="icon"  href="/vercel.svg"/>
            </Head>
            <PostList posts={posts} />
        </div>

    )
}

/* 
Create per user request in development mode
Server side ops.
*/
export const getStaticProps = async () => {
    let posts;
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        posts = response.data;
    } catch (e) {
        throw e;
    }

    return {
        props: {
            posts
        }
    }
}

