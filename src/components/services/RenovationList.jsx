import React from 'react';

import Styled from 'styled-components';

import circle from '../../assets/images/circle.png';

const List = ({ text }) => (
    <StyledList>
        <img src={circle} alt="circle" />
        {text}
    </StyledList>
)

const RenovationList = () => {
    return (
        <OfferStyle>
            <div className="mainTitle">
                Our services under renovation include
                <div className="line" />
            </div>

            <div className="flex-container">
                <List text="Building surveys." />
                <List text="Full Renovation." />
                <List text="Engineering surveys." />
                <List text="Indoor renovating." />
            </div>
        </OfferStyle>
    )
}

export default RenovationList;

const StyledList = Styled.span`
    background: #fff;
    box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);
    padding: 21px 24px;
    margin-right: 2rem;
    font-weight: 400;
    font-size: 1rem;
    color: #000531;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-bottom: 1rem;
        padding: 16px 16px;
        font-size: .75rem;
    }

    img {
        margin-right: 10px;

        @media (max-width: 768px) {
            width: 1rem;
            height: auto;
        }
    }
`;

const OfferStyle = Styled.section`
    width: 100%:
    max-width: 100vw;
    padding: 2rem 6%;
    min-height: 200px;

    .mainTitle {
        position: relative;
        margin: 3rem 0;
        font-size: 1.5rem;
        font-weight: 700;

        .line {
            position: absolute;
            bottom: -12px;
            height: 6px;
            width: 180px;
            background: #FDB900;
        }
    }

    .flex-container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
`;