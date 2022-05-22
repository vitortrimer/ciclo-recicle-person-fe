/* eslint-disable jsx-a11y/alt-text */
import * as S from './Styles'
import imgIconPorcentagem from '../../icon/porcentagem.png'
import imgIconEstrela from '../../icon/estrela.png'
const Pontuacao = () => {

    const pontuations = [
        "pontuation 1",
        "pontuation 2",
        "pontuation 3",
        "pontuation 4"
    ]

    return(
        <S.pontuacaoContainer>
        <S.vejaSuaPontuacao>
          Veja sua posição
        </S.vejaSuaPontuacao>
        <S.contagemEstrela>
        <img src={imgIconEstrela}/>
        Você possui --- estrelas!
        </S.contagemEstrela>
        <S.cuponsDisponiveis>
        Segue os cupons disponíveis: 
        </S.cuponsDisponiveis>
         <S.fundoBrancoPontuacoes>
             {pontuations?.disposalPontuations?.map((pontuation, index) => (
                <S.PontuationsItem key={index}>
                    <imgItem src={imgIconPorcentagem}/>  
                    <span>{pontuation?.pontuation}</span>
                </S.PontuationsItem>
             ))
             }
         </S.fundoBrancoPontuacoes>
         <S.cuponsDisponiveis>
        Segue os cupons resgatados: 
        </S.cuponsDisponiveis>
         <S.fundoBrancoPontuacoes>
             {pontuations?.disposalPontuations?.map((pontuation, index) => (
                <S.PontuationsItem key={index}>
                    <img src={imgIconPorcentagem}/>  
                    <span>{pontuation?.pontuation}</span>
                </S.PontuationsItem>
             ))
             }
         </S.fundoBrancoPontuacoes>
        </S.pontuacaoContainer>
    )
}
    export default Pontuacao;