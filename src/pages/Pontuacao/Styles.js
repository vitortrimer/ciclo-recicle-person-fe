import styled from "styled-components";

export const pontuacaoContainer =  styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color : #F8F8F8;


    img{
         margin-left: 15px;
    }
`;
export const vejaSuaPontuacao = styled.p `
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
export const contagemEstrela = styled.div`
   text-align: center;
   align-items: center;
   display: flex;
    font-size: 16px;
    font-family: 'Montserrat'!important;
    font-style: normal;
    font-weight: 700;
    color: #202020;

    
`
export const cuponsDisponiveis = styled.p`

    text-align: center;
    font-size: 12px;
    font-family: 'Montserrat'!important;
    font-style: normal;
    font-weight: 700;
    color: #202020;
    line-height: 24%;
   margin-top: 20px;
`
export const fundoBrancoPontuacoes = styled.div `
    display: flex;
    margin-top: 14px;
    width: 80vw;
    padding: 8px 16px;
    background-color: #FFFFFF;
    
`
export const PontuationsItem = styled.div`
    display: flex;
    align-items: center;

    margin-top: 14px;
    padding-left: 8px;
    :not(:last-child) {
    }

    :last-child {
        margin-bottom: 14px;
    }

    span {
        margin-left: 20px;
        color: #338152;
        font-family: 'Montserrat', sans-serif !important;
    }
     
    img{
         margin-top: 25px;
    }
    
`