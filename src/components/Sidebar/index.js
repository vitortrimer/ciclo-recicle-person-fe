import * as S from './Styles'
import smallLogo from '../../assets/Logo pequena 1.png'
import lupaImage from '../../assets/lupa.png'
import homeImage from '../../assets/home.png'
import bellImage from '../../assets/bell.png'
import heartImage from '../../assets/heart.png'
import messageImage from '../../assets/message.png'
import userImage from '../../assets/user.png'
import walletImage from '../../assets/wallet.png'
import callcenterImage from '../../assets/callcenter.png'
import cogImage from '../../assets/cog.png'

const Sidebar = () => {

  return(
    <S.SidebarContainer>
      <S.LogoContainer>
        <img src={smallLogo} alt="Logo Ciclo Recicla" />
      </S.LogoContainer>
      <S.SidebarContent>
        <S.IconWrapper>
          <S.SearchIcon>
            <img src={lupaImage} alt="Busca" />
          </S.SearchIcon>
        </S.IconWrapper>
        <S.IconWrapper active>
          <S.Icon active>
            <img src={homeImage} alt="Home" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={bellImage} alt="Notificações" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={heartImage} alt="Coração" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={messageImage} alt="Mensages" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={userImage} alt="User" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={walletImage} alt="Pontos" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={callcenterImage} alt="SAC" />
          </S.Icon>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.Icon>
            <img src={cogImage} alt="Configurações" />
          </S.Icon>
        </S.IconWrapper>
      </S.SidebarContent>
    </S.SidebarContainer>
  )
}
export default Sidebar;