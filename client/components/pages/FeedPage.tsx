import React, {useState, useEffect} from 'react';
import Post from '../Post';

function FeedPage() {

    const [feed, setFeed] = useState<any[]>([]);
    
    React.useEffect(() => {

        const getFeed =  async () => {
            let mounted = true;
            try {
                const response = await fetch('/api/post/');
                const data = await response.json();
                if (response.ok)
                    if (mounted) {
                        console.log("data.posts", data.posts);
                        setFeed(data.posts);
                    } else {
                        console.error("component did not mount", data.error);
                    };
    
            } catch(err) {
                console.log(err);
            }
            return () => mounted = false;
        }

        getFeed();

    }, []);

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
                <div>
                    {feed.map((post, index) => {
                       return <Post key={index} user={post.creator} timeStamp={post.posted_on} imageURI={post.picture}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default FeedPage;
