import styled from "styled-components";

export const cadastroEmbalagemContainer =  styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color : #F8F8F8;

    imgCircle {
        width: 45vw;
        object-fit: cover;
    }
`;

export const cadastroEmbalagemTitle = styled.p `
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
    font-size: 18px;
    font-family: 'Elsie Swash Caps'!important;
    font-style: normal;
    font-weight: 900;
    color: #338152;
    line-height: 21px;
`
export const instrucaoDescarte = styled.p`

    text-align: center;
    font-size: 16px;
    font-family: 'Montserrat'!important;
    font-style: normal;
    font-weight: 700;
    color: #202020;
    line-height: 200%;
   margin-top: 20px;
`
export const fundoBrancoTipo = styled.div `
   background: #FFFFFF;
   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
   border-radius: 4px;
   align-items: flex-start;
   margin-top: 20px;
   padding: 13px 55px;
   gap: 22px;
   
   font-family: 'IBM Plex Sans', sans-serif !important;
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   line-height: 26px;
   color: ${props => props.color || "#000"};
`
export const fundoBrancoInstrucoes = styled.div `
    margin-top: 14px;
    width: 80vw;
    padding: 8px 16px;
    background-color: #FFFFFF;
    
`
export const pontuacaonButton = styled.button`
    margin-top: 19px;
    margin-bottom: 19px;
    padding: 3px 25px;
    background-color: #338152;
    border-radius: 4px;
    font-family: 'Poppins' !important;
    color: #000000;
    font-weight: 800;
    line-height: 21px;
    font-size: 14px;
    font-style: normal;
`
export const instruction = styled.div `
margin-left: center;

`

export const ImagePlaceholder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: white;

    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        object-fit: scale-down;
    }
`

export const InstructionItem = styled.div`
    display: flex;
    align-items: center;

    margin-top: 14px;
    padding-left: 8px;
    
    img {
        width: 26px;
        height: 26px;
        object-fit: cover;
    }

    :last-child {
        margin-bottom: 14px;
    }

    span {
        margin-left: 20px;
        color: #338152;
        font-family: 'Montserrat', sans-serif !important;
    }
`