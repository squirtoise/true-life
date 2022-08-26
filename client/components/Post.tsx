import React from "react";
import styled from 'styled-components';

import Button from "./Button";

interface PostProps {
  imageURI: string;
  timeStamp: string;
  user: string;
  children?: React.ReactNode;
}

const Date = styled.div`
  color: #ccc;
  font-size: 16px;
  margin: 6px 0;
`


export default function Post({ imageURI, user, timeStamp, children }: PostProps)  { 
  return (
    <div style={{color: 'fff'}}>
      <Date>{timeStamp}</Date>

    </div>
  )
}