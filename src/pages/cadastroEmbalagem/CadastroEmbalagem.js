/* eslint-disable jsx-a11y/alt-text */
import * as S from './Styles'
import imagemFundoBrancoEmbalagem from '../../icon/CirculoFundoImagemProduto.png'
import imgIcon from '../../icon/interro.png'
const CadastroEmbalagem = () => {

    const instructions = [
        "instrucao 1",
        "instrucao 2",
        "instrucao 3",
        "instrucao 4"
    ]

    return(
    <S.cadastroEmbalagemContainer>
         <S.cadastroEmbalagemTitle>
            Descarte correto da embalagem
         </S.cadastroEmbalagemTitle>
         <img src={imagemFundoBrancoEmbalagem}/>
         <S.fundoBrancoTipo>
           Tipo
         </S.fundoBrancoTipo>
         <S.instrucaoDescarte>
           Instruções de descarte
         </S.instrucaoDescarte>
         <S.fundoBrancoInstrucoes>
             {instructions.map((instruction, index) => (
                <div key={index}>
                    <img src={imgIcon}/>  
                    <span>instruction</span>
                </div>
             ))
             }

         </S.fundoBrancoInstrucoes>
         <S.pontuacaonButton type="submit" colorScheme='teal' size='md'>
        PONTUAÇÃO
      </S.pontuacaonButton>
    </S.cadastroEmbalagemContainer>
  
)
}
export default CadastroEmbalagem;