import styled from "styled-components";
import {
    InputSubmit as DefaultInputSubmit,
    DropdownList as DefaultDropdownList
} from "../shared/styles";

export default styled.div`
  display: flex;
  bottom: 2rem;
  position: relative;
  background: linear-gradient(120deg, #2980b9, #2980b9);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const PointShow = styled.div`
  width: 100%;
  input:focus {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    background-color: #f4b069;
    color: #ffffff;
  }

  input {
    width: 100%;
  }
  background: linear-gradient(120deg, #2980b9, #2980b9);

  display: flex;
  @media (max-width: 500px) {
    margin: auto;
  }
`;

export const LoginForm = styled.div`
  width: 100%;
  background: white;
  padding: 3rem;
  text-align: center;
  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

export const ChartsContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  padding: 0;
  gap: 4rem;
  flex-direction: column;
  .Target-root {
    margin-top: 1rem;
    font-family: "Noto Kufi Arabic", sans-serif !important;
    flex-direction: column-reverse;
  }
  .css-4dretl.Target-root {
    flex-direction: column-reverse;
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 0rem;
  }
`;

export const SelectInputContainer = styled.div`
display: flex;
gap:4rem;
width:100%;
@media(max-width:1100px){
  flex-direction: column;
  gap:0rem;
}
}
`;

export const DivCenter = styled.div`
  box-shadow: 1px 3px 12px 0px #0000007a;
  margin: 1rem;
  margin-top: 2rem;
  width: 11rem;
  background: white;
  border-radius: 10px;
  @media (max-width: 1100px) {
    width: 8rem;
    margin: 0.7rem;
  }
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Formm = styled.div`
  margin: auto;
  justify-content: center;
  align-items: flex-start;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (max-width: 700px) {
  }
`;

export const Wird = styled.h1`
  text-align: center;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 1.2rem;
  display: inline-block;
  color: #fff;
  padding: 1.3rem;
  width: 20rem;
  cursor: pointer;
  border-radius: 4px;
  background-color: #94c3d9;
  box-shadow: 1px 1px 13px 0px #4235357a;

  @media (max-width: 1100px) {
    font-size: 1rem;
    font-weight: bold;
  }

  @media (max-width: 500px) {
    margin-top: 2rem;
    width: 15rem;
  }
`;

export const H3Login = styled.h3`
  text-align: center;
  padding: 1rem 0 1rem 0;
  font-family: "Noto Kufi Arabic", sans-serif;
  font-size: 1rem;
  color: #e94f57 !important;
  @media (max-width: 1100px) {
    font-size: 0.8rem;
    font-weight: bold;
  }
`;

export const Span = styled.span`
`;

export const InputSubmit = styled(DefaultInputSubmit)`
  outline: none;
  margin-bottom: 1.5rem;
  margin-top: 2.2rem;
`;

export const DropdownDiv = styled.div`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  margin: auto;
  margin-top: 1rem;
  @media (max-width: 500px) {
    width: 15rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

export const DropdownList = styled(DefaultDropdownList)`
  width: 20rem;
  @media (max-width: 550px) {
    width: 100%;
  }
  color: white;
  background-color: #e94f57;
  border: none;
  outline: none;
  :hover {
    color: #213c64;
    background-color: white;
  }
  :focus {
    color: #213c64;
    background-color: white;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
    width: 15rem;
  }
`;