import React from 'react';
// import Styled from 'styled-component';

import Styled from 'styled-components';
import {Button} from '../Button';
import Header from '../Header';

// images
import HeroBg from '../../assets/images/HeroBg.jpg';

const Hero = () => {
    return (
        <StyledHero>
            <Header />
            <div className="content">
                <h1>Open yourself to amazing Architecture.</h1>
                <p>Phasellus ullamcorper aliquet ullamcorper malesuada 
                eu elit. Eget eget turpis rutrum morbi massa sit arcu, 
                ut ullamcorper. Tortor ipsum aliquet dolor dolor. Sagittis 
                duis eu, elit consequat nunc lectus. Sapien cursus consectetur 
                quisque diam eget iaculis quis consectetur.</p>
                <Button text='Contact Us' link='/contact' icon />
            </div>

            <div className="buttomTab">
                <div className="box">
                    <div className="title">
                        8,543
                    </div>
                    <div className="contentful">
                        No of Projects
                    </div>
                </div>
                <div className="box border">
                    <div className="title">
                        543
                    </div>
                    <div className="contentful">
                        No of Projects
                    </div>
                </div>
                <div className="box">
                    <div className="title">
                        83
                    </div>
                    <div className="contentful">
                        No of Projects
                    </div>
                </div>
            </div>
        </StyledHero>
    )
}

export default Hero;

const StyledHero = Styled.section`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom, rgba(2, 8, 63, 0.6), rgba(2, 8, 63, 0.6)),
    url(${HeroBg});;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 6%;
    position: relative;

    .buttomTab {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 716px;
        height: 94px;
        background: red;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        background: #00052E;
        /* border: 3px solid #ffffff81; */
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        border-bottom: none;

        .box {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            &.border {
                border-left: 2px solid rgba(255, 255, 255, 0.4);
                border-right: 2px solid rgba(255, 255, 255, 0.4);
            }

            .title {
                text-align: center;
                font-size: 2rem;
                font-weight: 700;
                color: #FDB900;
                margin-bottom: 10px;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                }
            }

            .contentful {
                font-size: .9rem;
                font-weight: 400;
                color: #fff;
                text-align: center;

                @media (max-width: 768px) {
                    font-size: .7rem;
                }
            }
        }
    }

    .content {
        width: 100%;
        max-width: 665px;
        height: 100%;
        /* min-height: 100vh; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-top: 4rem;

        h1 {
            font-size: 3.5rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.3;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }

        p {
            font-weight: 600;
            font-size: 1rem;
            color: #fff;
            margin-top: 1.5rem;
            line-height: 1.5;
            opacity: .9;
            margin-bottom: 3rem;

            @media (max-width: 768px) {
                font-size: .9rem;
            }
        }

        
    }
`;