import React from 'react';

import Styled from 'styled-components';

import aboutSection from '../../assets/images/aboutSection.jpg';
import { LinkButton } from '../Button';

const AboutSection = () => {
    return (
        <StyledAbout>
            <img src={aboutSection} alt="about section" />
            <div className="box">
                <div className="title">
                    <h1>Who we are</h1>
                    <div className="line"></div>
                </div>
                <p>Aridan Construction is an award-winning Civil, M&E Engineering Company with expert delivery 
                    in construction, new development and regeneration projects within local and international 
                    standards. Aridan Construction is a subsidiary of Aridan Global Investment Limited. 
                    We are established to help avoid and encourage more nigerians to build by mitigating exploitation, 
                    Overbilling/Uncertainties that come from any sources (family, friends and contractors). 
                    <br /> <br />
                    We have over the years convinced a lot of Nigerians in the Diaspora to build that Dream Home or 
                    the Investment that desire to own in Nigeria is possible.
                </p>

                <LinkButton text="Read More" link="/about" icon />
            </div>
        </StyledAbout>
    )
}

export default AboutSection;

const StyledAbout = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: #fff;
    padding: 4.5rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    img {
        width: 100%;
    }

    .box {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        .title {
            position: relative;
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                margin-bottom: 2rem;
            }

            h1 {
                font-weight: 700;
                font-size: 3.5rem;
                color: #000747;

                @media (max-width: 768px) {
                    font-size: 2rem;
                }
            }

            .line {
                width: 120px;
                height: 8px;
                background: #FDB900;
                left: 0;
            }
        }

        p {
            font-weight: 400;
            font-size: 1rem;
            color: #00052E;
            line-height: 1.7;
            margin-bottom: 3rem;
        }
    }
`;