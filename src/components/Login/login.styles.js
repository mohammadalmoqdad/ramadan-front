import styled from "styled-components";
import { colors } from "styles";

import {
  InputSubmit as DefaultInputSubmit,
  Form as DefaultForm,
  FormInput as DefaultFormInput,
} from "../shared/styles";

export default styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  font-family: var(--font-family-main);
  background: ${colors.lightWheat};
  height: 100vh;
  overflow: hidden;
`;
export const DivCenter = styled.div`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 38rem;
  background: white;
  border-radius: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.25rem;
  gap: 1.25rem;

  background: #ffffff;
  border-radius: 1.5rem;

  @media (max-width: 43.75rem) {
    width: 19rem;
  }
`;

export const Form = styled(DefaultForm)`
  width: auto;
  @media (max-width: 550px) {
    width: auto;
@media (max-width:34.375rem) {
    width: auto;
}
`;

export const FormInput = styled(DefaultFormInput)`
  /* Frame 3 */
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1.3125rem 1.5rem;
  gap: 0.75rem;

  width: 33.5rem;
  height: 3.8125rem;

  background: #ffffff;
  border: 0.0625rem solid #f9eaea;
  border-radius: 0.75rem;

  text-align: left;

  @media (max-width: 43.75rem) {
    width: 14.375rem;
    font-size: 0.8125rem;
  }
  :focus {
    border-bottom: 0;
  }
`;

export const PageLink = styled.a`
  text-decoration: none;
  width: 100%;
  padding: 0 0.3125rem;
  height: 2.5rem;
  font-size: 1rem;
  border: none;
  background: none;
  outline: none;
  color: gray;
  margin-top: 0.3rem;
  text-align: center;
`;
export const HeadLogIn = styled.div`
  margin-top: 1rem;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.3125rem;
  gap: 0.3125rem;
  border-radius: 1.5rem;
`;
export const TitleLogin = styled.div`
  width: auto;
  height: 2.25rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.3125rem;
  text-align: center;

  color: #000000;

  color: #000000;
`;
export const SignupNowAccount = styled.p`
  width: 17.9375rem;
  height: 1.1875rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: #a79f97;
`;
export const SignupNow = styled.a`
  text-decoration: none;
  border: none;
  background: none;
  outline: none;
  width: 17.9375rem;
  height: 1.1875rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: #000000;

  :hover {
    color: #a79f97;
  }

  :hover {
    color: #a79f97;
  }
`;

export const MediaLogIn = styled.button`
  /* Frame 34  */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.125rem 1.5rem;
  gap: 0.75rem;
  width: 10.6669rem;
  height: 3.125rem;
  background: #ffffff;
  border: 0.0625rem solid #f9eaea;
  border-radius: 0.75rem;
  flex: none;
  order: 2;
  flex-grow: 0;

  @media (max-width: 43.75rem) {
    padding: 1.125rem 1.5rem;
    gap: 0.75rem;
    width: 4.6875rem;
    height: 2.5rem;
  }
`;

export const MediaOneLine = styled.div`
  /* Frame 34  */
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  background: #ffffff;
`;
export const OrWayToLogIn = styled.span`
  width: 1.25rem;
  height: 1.1875rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;
  color: #a79f97;
`;

export const Span = styled.span`
  text-align: center;
  margin: 0.5rem;
`;

export const InputSubmit = styled(DefaultInputSubmit)`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 1.5rem 1.3125rem;
  gap: 0.625rem;

  width: 33.5rem;
  height: 3.125rem;

  background: #fdd561;
  color: #000000;
  font-weight: 700;
  border-radius: 6.25rem;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;

  @media (max-width: 43.75rem) {
    width: 14.375rem;
    height: 3.125rem;
  }
`;
