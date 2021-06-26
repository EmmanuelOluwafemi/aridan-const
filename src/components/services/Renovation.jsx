import React from 'react';

import Styled from 'styled-components';

import servicesImage from '../../assets/images/servicesImage.jpg';

const Renovation = () => {
    return (
        <AboutContainer>
            <img src={servicesImage} alt="services" />
            <div className="text-content">
                <div className="title">
                    <h3>Renovation</h3>
                    <div className="line" />
                </div>

                <h3>We renovate buildings and refurbish old or New Properties not built up to the current Modern Standard.</h3>

                <p>
                For anyone buying, selling, developing, occupying or funding a property project, our Building Surveys team will give you a 
                distinct commercial advantage. From the earliest point in any transaction our insight, analysis and market knowledge can 
                save you money as well as identifying and managing your exposure to risk.
                We approach technical due diligence intelligently and thoughtfully, scrutinising every aspect of the property, leaving no 
                stone unturned. We analyse each aspect – and each property in a portfolio – individually and from every perspective.
                <br /><br />
                It's excellence in leadership when everyone wants to manufacture a black shoe and you manufacture a designer black 
                shoe with gold medal on top. Do something new; do something better!.
                </p>
            </div>
        </AboutContainer>
    )
}

export default Renovation;

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
        margin-right: 12%;
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

        h3 {
            margin-top: 3rem;
            font-size: 1.5rem;
            font-weight: 600;
            color: #00052E;
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1rem;
            line-height: 1.6;
        }
    }
`;