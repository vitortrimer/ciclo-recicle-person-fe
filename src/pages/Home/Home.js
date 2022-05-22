import Sidebar from '../../components/Sidebar'
import benefitImage from '../../assets/big-check-mark 4.png'
import smallLogo from '../../assets/Logo pequena 1.png'
import * as S from './Styles'

const Home = () => {

  return(<>
    <S.HomeContainer>
      <Sidebar />
      <S.MainContent>
        <img src={smallLogo} alt="Logo Ciclo Recicle" />
        <S.Title>
          Valorizamos o seu resíduo
        </S.Title>
        <S.Text>
          A reciclagem é o processo de reaproveitamento de materiais descartados. Seu objetivo é reintroduzi-los na cadeia produtiva a fim de que ainda gerem valor e sejam reutilizados, reduzindo-se a produção de lixo, aumentando a preservação dos recursos naturais e melhorando a qualidade de vida das pessoas.
        </S.Text>
        <S.Title>
          Você como colaborador tem benefícios
        </S.Title>
        <S.Benefit>
          <img src={benefitImage} alt="Ícone de Checado" />
          Produtos mais acessiveis para os clientes;
        </S.Benefit>
        <S.Benefit>
          <img src={benefitImage} alt="Ícone de Checado" />
          Destino mais conciente para as embalagens;
        </S.Benefit>
        <S.Benefit>
          <img src={benefitImage} alt="Ícone de Checado" />
          Melhor visibilidade;
        </S.Benefit>
        <S.Benefit>
          <img src={benefitImage} alt="Ícone de Checado" />
          Bonificações para sua empresa;
        </S.Benefit>
      </S.MainContent>
    </S.HomeContainer>
    </>
  )
}
export default Home;
