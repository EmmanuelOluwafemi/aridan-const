import React from 'react';

import Styled from 'styled-components';

import servicesImage from '../../assets/images/servicesImage.jpg';

const Building = () => {
    return (
        <AboutContainer>
            <img src={servicesImage} alt="services" />
            <div className="text-content">
                <div className="title">
                    <h3>Building and <br />Construction Services</h3>
                    <div className="line" />
                </div>

                <p>
                An unrivalled global reputation for delivery from design and project management to cost 
                engineering and mechanical and electrical services.
                <br /><br />
                Aridan construction company has an unequalled reputation for delivering complex, large-scale 
                Construction projects up to international Standards.
                <br /><br />
                Building on our experience working with leading multinationals, Nigerians in the Non-Diaspora and Diaspora in the USA, 
                UK, Germany, Ireland and the rest of Europe. Aridan Construction Company will protect and make good use of your Hard-Earn- 
                Money, we understand that delivery – on-time, on-budget and to the highest of international standards – 
                is what matters most to customers.
                </p>
            </div>
        </AboutContainer>
    )
}

export default Building;

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

        p {
            font-size: 1rem;
            line-height: 1.6;
            margin-top: 3rem;
        }
    }
`;