import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 0px;
  width: 100%;
  height: calc(100% - 100px);
`;

export const CoverPicContent = styled.div`
  display: block;
  height: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 0px 10px 0 rgba(0, 0, 0, 0.05);
`;

export const CoverPic = styled.img`
  display: block;
  height: 200px;
  width: 100%;
  resize: vertical;
  background-size: contain;
`;


export const CoverButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background-color: rgb(255,255,255,0.9);
  border: none; 
  color: black; 
  padding: 12px 16px; 
  font-size: 16px; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  border-radius: 20px;

  :hover {
    background-color: rgb(255,255,255,1);
  }
`;
