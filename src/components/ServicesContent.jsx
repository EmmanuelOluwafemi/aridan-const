import React from 'react';

import Styled from 'styled-components';

import servicesImage from '../assets/images/servicesImage.jpg';

const ServicesContent = () => {
    return (
        <AboutContainer>
            <div className="text-content">
                <div className="title">
                    <h3>Real <br />Estate Investment</h3>
                    <div className="line" />
                </div>

                <p>
                We provide tailored real asset investment solutions founded on independent advice, specialist financial expertise and the 
                insight only the world’s leading commercial property firm can offer.
                <br /><br />
                The team partners with clients over the longer term to invest and deploy their capital. Combining specialist financial 
                services skills with real estate expertise the team can deliver individual, independent strategic advice and implementation 
                for real asset investors, whether directly to the physical asset or indirectly through debt and / or equity.
                <br /><br />
                The team’s way of working is highly collaborative and spans the whole investment cycle from refining objectives, 
                optimising strategic focus, tactical planning, implementation and performance management.
                </p>
            </div>
            <img src={servicesImage} alt="services" />
        </AboutContainer>
    )
}

export default ServicesContent;

const AboutContainer = Styled.section`
    width: 100%;
    margin: 3rem 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    img {
        width: 100%;
        height: auto;
    }

    .text-content {
        margin-left: 12%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
            position: relative;

            h3 {
                font-size: 2.5rem;
                font-weight: 700;
                color: #000;

                @media (max-width: 768px) {
                    font-size: 2rem;
                }
            }

            .line {
                position: absolute;
                bottom: -12px;
                height: 8px;
                width: 200px;
                background: #FDB900;
            }
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
            margin-top: 3rem;
        }
    }
`;