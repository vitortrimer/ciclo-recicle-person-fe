/* eslint-disable jsx-a11y/alt-text */
import * as S from './Styles'
import imagemFundoBrancoEmbalagem from '../../icon/CirculoFundoImagemProduto.png'
import imgIcon from '../../icon/interro.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../services/Product'

const CadastroEmbalagem = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const service = new Product()
    service.getProduct(id).then(result => {
      if(result?.data) {
        console.log(result.data)
        setProduct(result.data)
      }
    })
  }, [])

    return(
    <S.cadastroEmbalagemContainer>
         <S.cadastroEmbalagemTitle>
            {product.name}
         </S.cadastroEmbalagemTitle>
         <S.ImagePlaceholder>
           <img src={product.image} alt="Imagem do produto" />
         </S.ImagePlaceholder>
         <S.fundoBrancoTipo>
            {product.type}
         </S.fundoBrancoTipo>
         <S.instrucaoDescarte>
           Instruções de descarte
         </S.instrucaoDescarte>
         <S.fundoBrancoInstrucoes>
             {product?.disposalInstructions?.map((instruction, index) => (
                <S.InstructionItem key={index}>
                    <img src={imgIcon}/>  
                    <span>{instruction?.instruction}</span>
                </S.InstructionItem>
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