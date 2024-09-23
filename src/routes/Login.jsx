import React from 'react'
import { useRef } from 'react'
// Importando estilos
import { LoginStyle } from '../styles/LoginStyle'

const Login = () => {

    const user = useRef();
    const password = useRef();

    const getUser = sessionStorage.getItem('user');
    const getPassword = sessionStorage.getItem('password');

    // Criando a função handleLogin
    const handleLogin = () =>{
        if(user.current.value == 'Admin' && password.current.value == '123456'){
            alert('Login realizado com sucesso!')

            let token =
             Math.random().toString(16).substring(2) +
             Math.random().toString(16).substring(2)

            sessionStorage.setItem('user', 'Admin');
            sessionStorage.setItem('password', token);
        } else{
            alert('Usuário/Senha incorretas!')
        }
    }

  return (
    <>
    <LoginStyle>
        <section className="pag-login">
            <form className='container-login' onSubmit={handleLogin}>
                <div className='inputs-login'>
                    <p className='p-login'>Usuário</p>
                    <input type='text' placeholder='Usuário' className='input-login' ref={user}/>
                </div>
                <div className='inputs-login'>
                    <p className='p-login'>Senha</p>
                    <input type="password" placeholder='Senha' className='input-login' ref={password} />
                </div>
                <button type='submit' className='button-login'>Enviar</button>
            </form>
        </section>
    </LoginStyle>
    </>
  )
}

export default Login
