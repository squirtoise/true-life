import React, { useState, useEffect } from 'react';
import Post from '../Post';

function FriendsFeedPage() {
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
        const result = await fetch('http://localhost:3000/api/post/friends/1').then((res) => res.json());
        console.log(result);
        setPosts(result);
    };

    return (
        <div>
            <h1>This is a friend's feed </h1>
            <div>
                <h1>TEST.</h1>
                {postElems}
            </div>
        </div>
    );
}

export default FriendsFeedPage;
