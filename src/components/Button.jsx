import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

// icon
import { IoIosArrowRoundForward } from 'react-icons/io';

export const Button = ({text, icon, link}) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={link}>
            <StyledButton>
                {text}
                {icon && <IoIosArrowRoundForward className="icon" />}
            </StyledButton>
        </Link>
    )
}

export const LinkButton = ({text, icon, link}) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={link}>
            <StyledLinkButton>
                {text}
                {icon && <IoIosArrowRoundForward className="icon" />}
            </StyledLinkButton>
        </Link>
    )
}

const StyledButton = Styled.button`
    padding: 1rem 2rem;
    background: #FDB900;
    color: #000531;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.06);
        transition: all .3s ease-in-out;
    }

    .icon {
        margin-left: 1.3rem;
    }
`;

const StyledLinkButton = Styled.button`
    padding: 1rem 0;
    background: none;
    color: #000531;
    font-size: 1rem;
    font-weight: 700;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.06);
        transition: all .3s ease-in-out;
    }

    .icon {
        margin-left: 1.3rem;
    }
`;