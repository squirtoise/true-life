import React from "react";
import styled from 'styled-components';

import Button from "./Button";

interface PostProps {
  imageURI: string;
  timeStamp: string;
  user: string;
  children?: React.ReactNode;
}

export default function Post({ imageURI, user, timeStamp, children }: PostProps)  { 
  
}