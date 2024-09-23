import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavStyle, NavLogo, NavItems, NavUl, NavLi, NavConta } from '../styles/NavStyle'
import styled from 'styled-components';

function Nav() {

    return (
        <>
        <NavStyle>
            {/* Logo */}
            <NavLogo>
                <img src="#" alt="logo" />
            </NavLogo>

            {/* Nav Itens */}
            <NavItems>
                <NavUl>
                    <Link className='txt-none' to='/'><NavLi>Home</NavLi></Link>

                    <Link className='txt-none' to='music'><NavLi>Musicas</NavLi></Link>
                </NavUl>
            </NavItems>

            <NavConta>
                <NavUl>
                    <Link className='txt-none' to='/login'><NavLi>Login</NavLi></Link>
                    <Link className='txt-none' to= '/cadastrar'><NavLi>Cadastrar</NavLi></Link>
                </NavUl>
            </NavConta>

        </NavStyle>
        </>
    );
}

export default Nav