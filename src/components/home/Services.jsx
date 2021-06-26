import React from 'react';
import Styled from 'styled-components';
import ServicesCard from '../cards/ServicesCard';

// icons
import building from '../../assets/images/building.svg';
import investment from '../../assets/images/investment.svg';
import consultation from '../../assets/images/consiltation.svg';
import renovation from '../../assets/images/renovation.svg';

const ServicesSection = () => {
    return (
        <StyledServices>
            <div className="heading">
                <h4>OUR SERVICES</h4>
                <h1>Viverra amet lacinia fusce sit amet. </h1>
                <div className="line" />
            </div>

            <div className="grid">
                <ServicesCard 
                    iconUrl={building} 
                    title="Building And Construction Services" 
                    content="For every business, the right engineering design is fundamental to continuity."
                    link="/services"
                    primary
                />
                <ServicesCard 
                    iconUrl={investment} 
                    title="Real Estate Investment" 
                    content="Whether it’s a single property or a large portfolio, our building maintenance team examines each building with the same meticulous attention to detail."
                    link="/services"
                />
                <ServicesCard 
                    iconUrl={consultation} 
                    title="CONSULTANCY SERVICES" 
                    content="Ask and seek the knowledge of an expert before you buy or invest."
                    link="/services"
                />
                <ServicesCard 
                    iconUrl={renovation} 
                    title="RENOVATION & REFURBISHMENT" 
                    content="We renovate buildings and refurbish old or New Properties not built up to the current Modern Standard."
                    link="/services"
                />
            </div>
        </StyledServices>
    )
}

export default ServicesSection;

const StyledServices = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    background: #F9F9FD;
    padding: 4rem 6%;

    @media (max-width: 768px) {
        padding: 2rem 6%;
    }

    .heading {
        max-width: 582px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h4{
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #FDB900;
            text-align: center;
            margin-bottom: 1.5rem;

            @media (max-width: 768px) {
                font-size: 1rem;
            }
        }

        h1 {
            font-size: 3rem;
            font-weight: 700;
            color: #000747;
            text-align: center;
            text-transform: capitalize;

            @media (max-width: 768px) {
                font-size: 2rem;
            }
        }

        .line {
            width: 208px;
            height: 8px;
            background: #FDB900;
        }
    }

    .grid {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
        margin-top: 6rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;