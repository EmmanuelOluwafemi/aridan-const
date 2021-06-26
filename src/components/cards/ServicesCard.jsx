import React from 'react';

import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const ServicesCard = ({ iconUrl, title, content, link, primary }) => {
    return (
        <StyledCards className={primary ? 'primary' : ''}>
            <div className="content">
                <img src={iconUrl} alt="icon" />
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
            
            <Link className="footer" to={link}>Learn More</Link>
        </StyledCards>
    )
}

export default ServicesCard;

const StyledCards = Styled.div`
    width: 100%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 355px;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
    background: #fff;

    .content {

        .icon {
            width: 48px;
            height: auto;
        }
    
        h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #000747;
            line-height: 1.4;
            margin-bottom: 10px;
            margin-top: 28px;
        }

        p {
            font-size: .75rem;
            font-weight: 400;
            color: #000531;
            line-height: 1.6;
        }
    }

    &.primary, &:hover {
        transition: all .3s ease-in-out;
        background: #000747;

        h3 {
            color: #fff;
        }

        p {
            color: #E5E5E6;
        }
    }

    .footer {
        font-size: 1rem;
        font-weight: 700;
        color: #FDB900;
        text-decoration: none;
    }

`;