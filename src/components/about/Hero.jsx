import React from 'react';
import Styled from 'styled-components';
import Header from '../Header';

import about from '../../assets/images/about.jpg';

const Hero = () => {

    return (
        <StyledHero>
            <div className="header-container">
                <Header />
            </div>

            <div className="slider-container">
                <div className="slider-header">
                    <h1>Our History</h1>
                    <div className="line" />
                </div>
            </div>
        </StyledHero>
    )
}

export default Hero;

const StyledHero = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(${about});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat; 

    .header-container {
        width: 100%;
        padding: 0 6%;
    }

    .slider-container {
        width: 100%;
        margin-top: 10rem;

        .slider-header {
            width: 100%;
            position: relative;

            h1 {
                font-size: 5rem;
                color: rgba(255, 255, 255, .6);
                font-weight: 700;
                text-transform: uppercase;
                margin-left: 6%;

                @media (max-width: 768px) {
                    font-size: 2.5rem;
                }
            }

            .line {
                position: absolute;
                width: 8%;
                height: 12px;
                background: #FDB900;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
            }
        }

        .slider-body {
            width: 100%;
            padding: 3rem 0;
            position: relative;
            min-height: 500px;

            .slider {
                width: 100%;
                min-height: 500px;

                .slick-list {
                    height: 100%;
                    min-height: 600px;
                }

                .year {
                    position: absolute;
                    font-size: 15rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, .4);
                    top: 50%;
                    left: -3rem;
                    transform: translateY(-50%) rotate(-90deg);
                }
            }
        }
    }
`