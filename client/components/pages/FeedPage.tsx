import React, { useEffect, useState } from 'react';
import Post from '../Post';

function FeedPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        const result = await fetch('http://localhost:3000/api/post');
        console.log(result.body);
        // setPosts(result.body);
    };

    return (
        <div>
            <h1>This is my Feed</h1>
            <div>
                <h1>TEST.</h1>
                <Post
                    imageURI="https://is.mediadelivery.fi/img/658/3dde460c031641508c85e03e3858af14.jpg.webp"
                    user="testUser"
                    timeStamp="8/26/2022 4:56AM"
                />
            </div>
        </div>
    );
}

export default FeedPage;
