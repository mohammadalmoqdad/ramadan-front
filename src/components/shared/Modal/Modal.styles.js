import styled from "styled-components";

export const Background = styled.div`
  top: 0px;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  min-width: 350px;
  max-width: 500px;
  max-height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 0 25px 25px 25px;
  margin: auto auto;
  position: fixed;
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  #deleteBtn {
    background-color: crimson;
  }
`;

export const FooterBtn = styled.button`
  width: 70px;
  height: 45px;
  max-width: 150px;
  margin: 10px;
  border: none;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;
