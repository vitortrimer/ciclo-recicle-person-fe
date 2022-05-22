import styled from "styled-components";

export const cadastroContainer =  styled.div`
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

export const cadastroTitle = styled.p`
    margin-top: 25px;
    text-align: center;
    font-size: 34px;
    font-family: 'Poppins'!important;
    font-style: normal;
    font-weight: 500;
`
    
export const insiraAlgusDados = styled.p`
    text-align: center;
    font-size: 14px;
    color: #636364;
    font-family: 'Poppins'!important;
`
export const insiraUserName = styled.p`
    margin-top: 12px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`
export const insiraUserPassword = styled.p`
    margin-top: 15px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`
export const insiraUserCpf = styled.p`
    margin-top: 15px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`
export const insiraUserEmail = styled.p`
    margin-top: 15px;
    width: 75vw;
    font-size: 15px;
    font-family: 'Poppins' !important;
`
export const cadastraButton= styled.button`
    margin-top: 15px;
    width: 75vw;
    padding: 8px 0;
    background-color: #338152;
    box-shadow: 0px 4px 10px rgba(233, 68, 75, 0.25);
    border-radius: 12px;
    font-family: 'Poppins' !important;
    color: #fff;
    font-weight: 500;
`

