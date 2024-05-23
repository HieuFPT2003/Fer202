import { useState, useEffect } from 'react';

function Ex1() {
    const userId = 1;
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
            );
            const data = await res.json();
            setPosts(data);
        };
        fetchData();
    }, [userId]);

    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Ex1;
