import styled from 'styled-components'

export const SidebarContainer = styled.div`
  height: 100vh;
  width: 80px;
  background-color: #e5e5e5;

  position: fixed;

  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  padding: 2em 0.5em;
  background: linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(255,255,255,1) 100%);
  width: 100%;
`

export const SidebarContent = styled.div`
  background: #fff;
  flex: 1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px -7px 5px 0px rgba(196,196,196,0.75);
  padding-top: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const SearchIcon = styled.div`
  height: 40px;
  width: 40px;
  background-color: #F2F4F6;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  img {
    width: 16px;
    height: 16px;
  }
`

export const Icon = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background-color: ${(props) => props.active ? 'rgb(34, 34, 34, 0.2)' : '#F2F4F6'};

  img {
    width: 16px;
    height: 16px;
  }
`

export const IconWrapper = styled.div`
  height: 50px;
  width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.active ? '#FFCB47' : 'transparent'};

  border-radius: 8px;


  & + div {
    margin-top: 15px;
  }
`