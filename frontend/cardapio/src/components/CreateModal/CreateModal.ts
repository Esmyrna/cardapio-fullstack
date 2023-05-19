import styled from "styled-components";

export const ModelOverlay = styled.div`
position: fixed;
inset: 0;
background-color: rgba(0,0,0,0.4);
overflow: hidden;
height: 100vh;
width: 100vw;

display: flex;
align-items: center;
justify-content: center;
z-index: 999;
`
 ;

export const ModelBody = styled.div`
background-color: white;
padding: 24px;
height: 55%;
width: 60%;
border-radius: 24px;

display: flex;
align-items: flex-start;
flex-direction: column;
 
`;

export const Title = styled.h2`
font-size: 32px;
`;

export const Form = styled.form`
width: calc(100% - 24px);
`;

export const ButtonSend = styled.button`
position: relative;
width: 30%;
background: #3a44f8;
border-radius: 20px;
padding: .6rem;
color: #fff;
margin-top: 20px;
border: none;
cursor: pointer;
 
 
 
&:hover {
    opacity: 0.8;
    transform: scale(1);
}
`;

