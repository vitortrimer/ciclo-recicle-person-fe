import React from "react"
import * as S from "./Styles"
import checkIcon from "../../icon/check.png"

const Modal = ({ handleDismiss }) => {

  return(
    <S.Backdrop>
    <S.ModalContainer>
      <S.CircleIcon>
        <img src={checkIcon} alt="check" />
      </S.CircleIcon>
      <S.Title>
        SUCESSO
      </S.Title>
      <S.Subtitle>
        Parabéns pontos<br />resgatados com sucesso!
      </S.Subtitle>
      <S.CloseButton onClick={handleDismiss}>
        PONTUAÇÃO
      </S.CloseButton>
    </S.ModalContainer>
    </S.Backdrop>
  )
}
export default Modal