import React, { useState } from 'react';
import { Container, PostForm, PostList, PostFormFooter, TextArea, ButtonForm } from './styles';
import Post from './Post'

function FeedArea() {
  return (
    <Container>
      <PostForm>
        <TextArea placeholder="O que está acontecendo?"></TextArea>
        <PostFormFooter>
          <ButtonForm>Tweetar</ButtonForm>
        </PostFormFooter>
      </PostForm>
      <PostList>
        <Post />
        <Post />
        <Post />

      </PostList>
    </Container>
  );
}

export default FeedArea;