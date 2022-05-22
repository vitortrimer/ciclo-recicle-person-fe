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
             {pontuations.map((pontuations, index) => (
                <div key={index}>
                    <img src={imgIconPorcentagem}/>  
                    <span>pontuation</span>
                </div>
             ))
             }

         </S.fundoBrancoPontuacoes>


        </S.pontuacaoContainer>
    )
}
    export default Pontuacao;