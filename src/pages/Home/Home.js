import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import * as S from './Styles'

const Home = () => {

  return(
    <S.HomeContainer>
      <S.MainContent>
        <Form 
          username=""
        />
      </S.MainContent>
      <S.ProductsMenu>
        teste
      </S.ProductsMenu>
    </S.HomeContainer>
  )
}
export default Home;