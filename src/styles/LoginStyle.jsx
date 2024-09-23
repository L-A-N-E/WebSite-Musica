// Importando dependencias
import styled from 'styled-components';

export const LoginStyle = styled.section`
    .container{
        width: 100%;
        height: 85vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #D9D9D9;

        .container-login{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: #404040;
            width: 55%;
            height: 75%;
            padding: 2.5rem 3rem;
            border-radius: 10px;
            box-shadow: 10px 10px 10px #00000057;

            .login{
                width: 40%;

                /* Estilo do forms */
                .login-form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;

                    .titulo-login{
                        font-size: 24px;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: #D9D9D9;
                    }

                    /* Estilo dos inputs */
                    .w-input{
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .input-form{
                            width: 90%;
                            padding: 0.5rem 0.3rem;
                            background-color: #404040;
                            border: solid 2px #D9D9D9;
                            border-radius: 4px;
                            color: #D9D9D9;
                        }

                        .input-form::placeholder{
                            color: #D9D9D9;
                        }

                        .input-form:focus{
                            background-color: #D9D9D9;
                            border: solid 2px #D9D9D9;
                            color: #404040;
                            outline: 0;
                        }
                    }

                    /* Estilo do botão */
                    .login-btn{
                        .login-form-btn{
                            padding: 0.5rem 1rem;
                            background-color: #D9D9D9;
                            color: ${Colors.bg_color};
                            text-transform: uppercase;
                            font-weight: 800;
                            border: solid 1px #D9D9D9;
                            border-radius: 4px;
                            transition: ease 0.5s;
                        }
                        .login-form-btn:hover{
                            transform: scale(1.1);
                            transition: ease 0.5s;
                            background-color: #D9D9D9;
                            color: #D9D9D9;
                        }
                    }
                }
            }
        }
    }
`