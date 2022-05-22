import styled from "styled-components";

export const pontuacaoContainer =  styled.div`
    display: flex;
    min-height: 100vh;
    align-items: center;
    flex-direction: column;
    background-color : #F8F8F8;
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

    span {
        margin-left: 24px;
    }

    
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
    flex-direction: column;
    margin-top: 14px;
    width: 80vw;
    padding: 8px 16px;
    
`



export const PontuationsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;


    background: #fff;

    margin-top: 14px;
    padding: 12px;
    border-radius: 20px;

    :last-child {
        margin-bottom: 14px;
    }

    span {
        color: #0D0D0D;
        font-family: 'Poppins', sans-serif !important;
        font-weight: 600;
    }
     
    
`

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-left: 9px;
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`

export const Type = styled.div`
    background: rgba(18, 170, 115, 0.18);
    border-radius: 30px;
    padding: 4px 8px;
`

export const Due = styled.div`
    text-align: end;
    display: flex;
    flex-direction: column;
    align-content: flex-end;
`