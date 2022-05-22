/* eslint-disable jsx-a11y/alt-text */
import * as S from './Styles'
import imagemFundoBrancoEmbalagem from '../../icon/CirculoFundoImagemProduto.png'
import imgIcon from '../../icon/interro.png'
import recycleIcon from '../../icon/reciclagem.png'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../services/Product'
import Modal from '../../components/Modal/Modal'

const CadastroEmbalagem = () => {
  const [isShowingModal, setIsShowingModal] = useState(false);
  const [product, setProduct] = useState({});
  const [typeColor, setTypeColor] = useState("#C4C4C4")
  const { id } = useParams();

  useEffect(() => {
    const service = new Product()
    service.getProduct(id).then(result => {
      if(result?.data) {
        console.log(result.data)
        getItemColor(result.data.type)
        setProduct(result.data)
      }
    })
  }, [])

  const getItemColor = (type) => {
    if(type === "Não Reciclável") {
      setTypeColor("#C4C4C4")
    }
    if(type === "Vidro") {
      setTypeColor("#3C6A22")
    }
    if(type === "Metal") {
      setTypeColor("#DFBD41")
    }
    if(type === "Plástico") {
      setTypeColor("#D24528")
    }
    if(type === "Papel") {
      setTypeColor("#296EB5")
    }
  }

  const disposeModal = () => {
    setIsShowingModal(false)
    window.location.assign("/pontuacao")
  }

    return(
      <S.cadastroEmbalagemContainer>
        { isShowingModal &&
          <Modal handleDismiss={disposeModal} />
        }
         <S.cadastroEmbalagemTitle>
            {product.name}
         </S.cadastroEmbalagemTitle>
         <S.ImagePlaceholder>
           <img src={product.image} alt="Imagem do produto" />
         </S.ImagePlaceholder>
         <S.fundoBrancoTipo color={typeColor}>
            {product.type}
         </S.fundoBrancoTipo>
         <S.instrucaoDescarte>
           Instruções de descarte
         </S.instrucaoDescarte>
         <S.fundoBrancoInstrucoes>
             {product?.disposalInstructions?.map((instruction, index) => (
                <S.InstructionItem key={index}>
                    <img src={recycleIcon}/>  
                    <span>{instruction?.instruction}</span>
                </S.InstructionItem>
             ))
             }
         </S.fundoBrancoInstrucoes>
         <S.pontuacaonButton onClick={() => {setIsShowingModal(true)}} colorScheme='teal' size='md'>
        PONTUAÇÃO
      </S.pontuacaonButton>
    </S.cadastroEmbalagemContainer>
  
)
}
export default CadastroEmbalagem;