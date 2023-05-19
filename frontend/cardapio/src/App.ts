import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100vw

`;

export const Menu = styled.h1``;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;

`;

export const BtnOpen = styled.button`
    background-color: red;
    padding: .6rem 2rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: bold;
    position: fixed;
    bottom: 16px;
    right: 24px;
    transition: all 0.1s linear 0.1s;

    &:hover {
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 7px 0px;
        transform: scale(1.1);
    }

`;