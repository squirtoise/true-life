import React from 'react';
import Post from '../Post';
function FriendsFeedPage() {
    return (
        <div>
            <h1>This is a friend's feed </h1>
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

export default FriendsFeedPage;
