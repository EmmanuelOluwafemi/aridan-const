import React from 'react';

import Styled from 'styled-components';
import Header from './Header';

const SmallHero = ({ imgUrl, text }) => {
    return (
        <StyledSmallHero style={{ backgroundImage: `url(${imgUrl})` }}>
            <Header />
            <div className="content">
                <h4>{text}</h4>
            </div>
        </StyledSmallHero>
    )
}

export default SmallHero;

const StyledSmallHero = Styled.section`
    width: 100%;
    height: 386px;
    padding: 0 6%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .content {
        height: 100%;
        display: flex;
        align-items: center;

        h4 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
        }
    }
`;