import styled from "styled-components";



export const loginContainer =  styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 85vw;
        object-fit: cover;
    }
`;

export const Input = styled.input`
    width: 75vw;
    background: #fff;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding:  10px 16px;

`;

export const loginTitle = styled.p`
    margin-top: 32px;
    text-align: center;
    font-size: 34px;
    font-family: 'Poppins'!important;
    font-style: normal;
    font-weight: 500;
`
    
export const insiraSeusDados = styled.p`
    text-align: center;
    font-size: 14px;
    color: #636364;
    font-family: 'Poppins'!important;
`
export const insiraUser = styled.p`
    margin-top: 32px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`
export const insiraPass = styled.p`
    margin-top: 19px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`

export const loginButton= styled.button`
    margin-top: 19px;
    width: 75vw;
    padding: 8px 0;
    background-color: #338152;
    box-shadow: 0px 4px 10px rgba(233, 68, 75, 0.25);
    border-radius: 12px;
    font-family: 'Poppins' !important;
    color: #fff;
    font-weight: 500;
`
export const cadastrarButton= styled.button`
    margin-top: 19px;
    width: 75vw;
    padding: 8px 0;
    background-color: #338152;
    box-shadow: 0px 4px 10px rgba(233, 68, 75, 0.25);
    border-radius: 12px;
    font-family: 'Poppins' !important;
    color: #fff;
    font-weight: 500;
`

