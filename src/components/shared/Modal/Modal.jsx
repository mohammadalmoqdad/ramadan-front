import React from "react";
import {
    Background,
    Container,
    TitleCloseBtn,
    Title,
    CloseBtn,
    Body,
    Footer,
    FooterBtn
} from "./Modal.styles";

export default function Modal(props) {

    const handleCloseBtnChange = () => {
        props.setOpenModal(false);
    };

    return (
        <Background>
            <Container>
                <TitleCloseBtn>
                    <CloseBtn onClick={handleCloseBtnChange}>x</CloseBtn>
                </TitleCloseBtn>

                <Title>
                    <h2>{props.title}</h2>
                </Title>

                <Body>
                    <p>{props.content}</p>
                </Body>

                <Footer>
                    <FooterBtn onClick={handleCloseBtnChange}>{props.cancelBtn}</FooterBtn>
                    <FooterBtn onClick={() => props.deleteFunction()} id="deleteBtn">{props.deleteBtn}</FooterBtn>
                </Footer>
            </Container>
        </Background>
    );
}