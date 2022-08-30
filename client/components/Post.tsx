import React from "react";
import styled from 'styled-components';

import Button from "./Button";
import { faFire, faComment, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

// document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
 const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

interface PostProps {
  imageURI: string;
  timeStamp: string;
  user: string;
  children?: React.ReactNode;
}

const Date = styled.div`
  color: black;
  font-size: 16px;
  margin: 6px 0;
`

const Card = styled.div`
  background-color: #e2e2e2;
  border-radius: 5px;
  height: 360px;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`

const PhotoWrapper = styled.div`
  height: 280px;
  width: 280px;
`
const PhotoCard = styled.div`
  margin: 20 20 0 20
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`

const UserIconPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit:cover;
`

const UserIconCropper = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 0.2em 0 0.2em 0;
`

const AuthorWrapper = styled.div`
  width: 280px;
  display: flex;
  align-items: flex-end;
  gap: 10px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 280px;
  margin: 5px 0 0 0;
`

export default function Post({ imageURI, user, timeStamp, children }: PostProps)  { 
  return (
    <div style={{color: 'fff'}}>
      <Card>
        <AuthorWrapper>
          <UserIconCropper><UserIconPhoto src="https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643219-gettyimages-1248993201-d7df1ac598521e38e548ac9e02000b76.jpg" /></UserIconCropper>
          <Date>{timeStamp}</Date>
          <Date>{user}</Date>
        </AuthorWrapper>
        <PhotoCard>
          <PhotoWrapper>
            <StyledPhoto src={imageURI} />
          </PhotoWrapper>
        </PhotoCard>
        <IconWrapper color='Color'>
          <Button icon={faComment} onClickFunc={() => console.log('Button clicked!')} />
          <Button icon={faFire} onClickFunc={() => console.log('Button clicked!')} />
          <Button icon={faHeartBroken} onClickFunc={() => console.log('Button clicked!')} />
        </IconWrapper>
      </Card>
    </div>
  )
}