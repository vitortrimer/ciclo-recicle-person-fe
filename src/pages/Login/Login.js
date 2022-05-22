/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'
import UserService from '../../services/User'
import * as S from './Styles'
import imagemLogo from '../../icon/imagemLogoPequena.png'
import Register from '../Register/Register'

const Login = () => {
  const service = new UserService()
  const [formData, setFormData] = useState({
    document: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    service.login(formData).then((response) => {
      if(response.data) {
        const data = response.data
        localStorage.setItem("user-token", data.token)
        localStorage.setItem("user-name", data.name)
        window.location.assign("/")
      }
    })
  }

  const handleInput = (e) => {
    const inputName = e.target.name;

    setFormData(
      prevState => ({
        ...prevState,
        [inputName]: e.target.value
      })
    );
  }
  return(
  
    <form onSubmit={handleSubmit}>
     
      <S.loginContainer>
      <img src={imagemLogo}/>
      <S.loginTitle>
        BEM VINDO!  
        </S.loginTitle>
        <S.insiraSeusDados>
          Por favor, insira seus dados.
        </S.insiraSeusDados>       
      
      <S.insiraUser>
        Email
      </S.insiraUser> 
      <S.Input
        type="text"
        value={formData.username}
        onChange={handleInput}
        name="username"
        placeholder='Entre com o seu email'
      />
      <S.insiraPass>
         Senha
      </S.insiraPass>
      <S.Input
        value={formData.password}
        onChange={handleInput}
        type="password"
        name="password"
        placeholder='**********'
      />
      <S.loginButton type="submit" colorScheme='teal' size='md' onClick={handleSubmit}>
        ENTRAR
      </S.loginButton>
      <S.cadastrarButton onClick={() => {window.location.assign("/cadastro")}}>
        CADASTRAR
      </S.cadastrarButton>
      </S.loginContainer>
    </form>
  )
}
export default Login;