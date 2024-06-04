import { useState } from 'react';
import { useRouteLoaderData } from 'react-router-dom';
import formatDate from '../../../util/formatDate';

function BlogDetail() {
    const { post } = useRouteLoaderData('page-detail');
    const [posts, setPosts] = useState([]);

    post.then((post) => {
        setPosts(post);
    });

    console.log(posts);
    return (
        <div className='col-span-3'>
            <div className='text-5xl font-bold text-center'>
                <h1>{posts.title}</h1>
            </div>
            <div className='mt-10'>
                <img
                    src={posts.imagePost}
                    alt='IMG'
                    className='w-full object-cover'
                />
            </div>
            <div className='mt-24 text-xl'>
                <p>{posts.postText}</p>
            </div>
        </div>
    );
}
export default BlogDetail;

export function loader({ params }) {
    const postID = params.postID;

    return {
        post: loadPost(postID),
        posts: loadPosts(),
    };
}

async function loadPost(id) {
    const url = 'http://localhost:9999/UserPost?postID=' + id;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();

        return data[0];
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

async function loadPosts() {
    const response = await fetch('http://localhost:9999/UserPost');
    const data = await response.json();
    return data;
}
