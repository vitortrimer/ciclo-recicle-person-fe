import { useState } from 'react'
import UserService from '../../services/User'
import * as S from './Styles'
import imagemLogo from '../../icon/imagemLogoPequena.png'

const Register = () => {
  const service = new UserService()
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    password: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    service.register(formData).then((response) => {
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
      <S.cadastroContainer>
      <img src={imagemLogo}/>
      <S.cadastroTitle>
        CADASTRAR!  
      </S.cadastroTitle>
      <S.insiraAlgusDados>
        Por favor, insira alguns dados.
      </S.insiraAlgusDados> 
      <S.insiraUserName>
        Nome
      </S.insiraUserName>       
      <S.Input
        type="text"
        value={formData.name}
        onChange={handleInput}
        name="name"
        placeholder='Nome Completo'
      />
      <S.insiraUserCpf>
        CPF
      </S.insiraUserCpf>   
      <S.Input
        type="text"
        value={formData.document}
        onChange={handleInput}
        name="document"
        placeholder='CPF'
      />
      <S.insiraUserEmail>
        Email
      </S.insiraUserEmail>       
        <S.Input
        type="text"
        value={formData.document}
        onChange={handleInput}
        name="email"
        placeholder='Email'
      />
      <S.insiraUserPassword>
        Senha
      </S.insiraUserPassword> 
      <S.Input
        value={formData.password}
        onChange={handleInput}
        type="password"
        name="password"
        placeholder='**********'
      />
      <S.cadastraButton type="submit" colorScheme='teal' size='md' onClick={handleSubmit}>
        Cadastrar
      </S.cadastraButton>
      </S.cadastroContainer>
    </form>
  )
}

export default Register;