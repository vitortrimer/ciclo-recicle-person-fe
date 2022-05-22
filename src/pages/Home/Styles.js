import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const MainContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 2vw;
  margin-left: 80px;
  background: #F1DAA1;
  height: 100vh;

  flex: 1;

  > img {
    margin: 10vh 0;
  }
`

export const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 8px;
  text-align: center;
  margin: 10vh 0;
`

export const Title = styled.h2`
  color: #338152;
  font-family: 'Elsie Swash Caps', cursive;
  font-weight: 900;
  font-size: 16px;

  & + div {
    margin-top: 44.5px;
  }
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  align-self: flex-start;

  font-size: 10px;

  img {
    width: 14px;
    height: 13px;

    margin-right: 12px;
  }

  & + div {
    margin-top: 33px;
  }
`

export const ProductsMenu = styled.div`
  background-color: red;
  
  flex: 1;
`