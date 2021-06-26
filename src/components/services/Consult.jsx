import React from 'react';

import Styled from 'styled-components';

import servicesImage from '../../assets/images/servicesImage.jpg';

const Consult = () => {
    return (
        <AboutContainer>
            <div className="text-content">
                <div className="title">
                    <h3>Consultancy</h3>
                    <div className="line" />
                </div>

                <p>
                    Ask and seek the knowledge of an expert before you buy or invest. We encourage of Clients, Mostly especially out client in the Diaspora 
                    to make good use of this services. Please don't lose your Hard-Earn-Money.
                    <br /><br />
                    GVALUATION AND ADVISORY Valuation is a cornerstone of any financial decision an investor, occupier or owner can make. That’s why Aridan 
                    Construction Valuation and Advisory services team is proud to be the market leader for expert, independent advice on all property types 
                    and interests, from entire portfolio valuations, collateral of loans to one-off commercial buildings and residential premises.
                </p>
            </div>
            <img src={servicesImage} alt="services" />
        </AboutContainer>
    )
}

export default Consult;

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