import React, { useEffect, useState } from 'react';
import Post from '../Post';

function FeedPage() {
    const [posts, setPosts]: any[] = useState([]);
    const [postElems, setPostElems]: any[] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    useEffect(() => {
        setPostElems(
            posts.length > 0
                ? posts.map((el: any, i: number) => {
                      return (
                          <Post
                              imageURI={`http://localhost:3000/api/post/img/${el.id}`}
                              user={el.creator}
                              timeStamp={el.posted_on}
                              key={i}
                              caption={el.caption}
                          ></Post>
                      );
                  })
                : null
        );
        console.log('posts:', posts);
    }, [posts]);

    const getAllPosts = async () => {
        const result = await fetch('http://localhost:3000/api/post').then((res) => res.json());
        console.log(result);
        setPosts(result);
    };

    return (
        <div>
            <h1>This is my Feed</h1>
            <div>
                <h1>TEST.</h1>
                {postElems?.length > 0 ? postElems : null}
            </div>
        </div>
    );
}

export default FeedPage;
