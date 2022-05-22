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

    const points = 325

    const coupons = [
        {
            name: "Cupom de desconto",
            type: "Mercado",
            stars: "450",
            due: "05/2022"
        },
        {
            name: "Voucher",
            type: "Mercado",
            stars: "1250",
            due: "06/2022"
        },
        {
            name: "Cupom de desconto - 30%",
            type: "Mercado",
            stars: "12450",
            due: "07/2022"
        },
        {
            name: "Cupom de desconto - 20%",
            type: "Mercado",
            stars: "450",
            due: "08/2022"
        },
        {
            name: "Cupom de desconto - 10%",
            type: "Mercado",
            stars: "250",
            due: "05/2023"
        },
    ]

    const rescued = [
        {
            name: "Desconto Hipermercado",
            type: "Mercado",
            stars: "450",
            due: "08/2022"
        },
        {
            name: "Desconto Sacolão",
            type: "Mercado",
            stars: "250",
            due: "05/2021"
        },
    ]

    return(
        <S.pontuacaoContainer>
        <S.vejaSuaPontuacao>
          Veja sua pontuação
        </S.vejaSuaPontuacao>
        <S.contagemEstrela>
        <img src={imgIconEstrela}/>
        <span>Você possui {points} estrelas!</span>
        </S.contagemEstrela>
        <S.cuponsDisponiveis>
        Segue os cupons disponíveis: 
        </S.cuponsDisponiveis>
         <S.fundoBrancoPontuacoes>
             {rescued.map((pontuation, index) => (
                <S.PontuationsItem key={index}>
                    <S.MainContent>
                        <img src={imgIconPorcentagem}/>  
                        <span>{pontuation.name}</span>
                    </S.MainContent>
                    <S.Infos>
                        <div>
                            <S.Type>{pontuation.type}</S.Type>
                        </div>
                        <S.Due>
                            <span>{pontuation.stars} estrelas</span>
                            <span>Venc: {pontuation.due}</span>
                        </S.Due>
                    </S.Infos>

                </S.PontuationsItem>
             ))
             }
         </S.fundoBrancoPontuacoes>
         <S.cuponsDisponiveis>
        Segue os cupons resgatados: 
        </S.cuponsDisponiveis>
         <S.fundoBrancoPontuacoes>
            {coupons.map((pontuation, index) => (
                <S.PontuationsItem key={index}>
                    <S.MainContent>
                        <img src={imgIconPorcentagem}/>  
                        <span>{pontuation.name}</span>
                    </S.MainContent>
                    <S.Infos>
                        <div>
                            <S.Type>{pontuation.type}</S.Type>
                        </div>
                        <S.Due>
                            <span>{pontuation.stars} estrelas</span>
                            <span>Venc: {pontuation.due}</span>
                        </S.Due>
                    </S.Infos>

                </S.PontuationsItem>
             ))
             }
         </S.fundoBrancoPontuacoes>
        </S.pontuacaoContainer>
    )
}
    export default Pontuacao;