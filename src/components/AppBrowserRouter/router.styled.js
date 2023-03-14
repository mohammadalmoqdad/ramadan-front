import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: var(
    --flex-direction
  ); // TODO: Make it as var(--flex-direction)
  height: 100vh;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
  /* margin: 7rem 0 0 0; // will get back to 0 to change the width when needing to move elements to left */
`;
