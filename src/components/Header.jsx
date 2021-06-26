import React from 'react';
import Styled from 'styled-components';

import {Link, NavLink} from 'react-router-dom';
import Logo from '../assets/images/logo.svg';

import {Button} from './Button';

const Header = () => {
    return (
        <StyledHeader>
            <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
            </Link>

            <div className="menu">
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" to="/about">About</NavLink>
                <NavLink exact activeClassName="active" to="/services">Services</NavLink>
                <NavLink exact activeClassName="active" to="/projects">Projects</NavLink>
                <NavLink exact activeClassName="active" to="/blog">Blog</NavLink>
                <Button text="Contact Us" icon link="/contact" />
            </div>
        </StyledHeader>
    )
}

export default Header;

const StyledHeader = Styled.header`
    width: 100%;
    max-width: 100vw;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        position: relative;

        img {
            position: absolute;
            top: -3rem;
        }

        @media (max-width: 768px) {
            img {
                width: 120px;
                height: auto;
            }
        }
    }

    .menu {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;

        @media (max-width: 768px) {
            display: none;
        }
        
        a {
            padding: 1rem;
            font-size: 1rem;
            color: #fff;
            font-weight: 600;
            text-decoration: none;

            &:hover, &.active {
                border-bottom: 4px solid #FDB900;
            }
        }
    }
`;