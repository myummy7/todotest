import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import styled from 'styled-components'; //스타일 컴포넌츠 라이브러리 호출

const Wrapper = styled.div`   //div요소에 스타일 입히기
  width : 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
`;

const Box = styled.div`
  width: 400px;
  height: 600px;
  background: white;
  box-shadow: 0px 25px 100px -60px rgba(0,0,0,0.18);

`;

const Title = styled.h1`  //h1형태 스타일 입히기
  margin: 0;
  padding: 15px 25px;
`;

const TodoList = styled.div``;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100%;
  font-size: 1.2em;
  border-bottom: 1px solid #eee;
`;

const TodoCheck = styled.input`
  margin-right: 15px;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="A Todo app" />
      </Helmet>
      <Wrapper>
      
        <Box>
        <Title>
          할 일
        </Title>

        <TodoList>
          <TodoItem>
            <TodoCheck type='checkbox' />
            나는 투두야!
          </TodoItem>
        </TodoList>

        </Box>
      </Wrapper>
    </>
  );
}
