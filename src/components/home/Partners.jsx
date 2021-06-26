import React from 'react';

import Styled from 'styled-components';

// partners logo
import logo1 from '../../assets/images/logo1.svg'
import logo2 from '../../assets/images/logo2.svg'
import logo3 from '../../assets/images/logo3.svg'
import logo4 from '../../assets/images/logo4.svg'
import logo5 from '../../assets/images/logo5.svg'

const Partners = () => {
    return (
        <StyledPartners>
            <div className="title">
            Our <br />Partners

            <div className="line"></div>
            </div>
            <div className="grid">
                <img src={logo1} alt="partners logo" />
                <img src={logo2} alt="partners logo" />
                <img src={logo3} alt="partners logo" />
                <img src={logo4} alt="partners logo" />
                <img src={logo5} alt="partners logo" />
            </div>
        </StyledPartners>
    )
}

export default Partners;

const StyledPartners = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 20vh;
    margin: 5rem 0;
    padding: 2rem 6%;
    padding-top: 0;

    @media (max-width: 768px) {
        padding-top: 2rem;
    }

    .title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #00052E;
        position: relative;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: 1.5rem;
        }

        .line {
            position: absolute;
            bottom: -12px;
            left: 0;
            width: 180px;
            height: 8px;
            background: #FDB900;

            @media (max-width: 768px) {
                height: 4px;
                width: 120px;
                bottom: -8px;
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 140px));
        grid-gap: 4.5rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 1rem;
        }

        img {
            width: 100%;
            height: auto;
        }
    }
`;