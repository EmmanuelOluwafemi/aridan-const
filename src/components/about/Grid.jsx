import React from 'react';

import Styled from 'styled-components';

import vision from '../../assets/images/vision.jpg';

const Grid = ({color, right, title, content}) => {
    return (
        <GridStyle style={{ background: color }}>
            {right && 
                <img src={vision} alt="vision" />
            }
            <div className="card">
                <div className="title">
                    <h3 dangerouslySetInnerHTML={{__html: title}} />
                    <div className="line" />
                </div>
                <p dangerouslySetInnerHTML={{__html: content}} />
            </div>
            {!right && 
                <img src={vision} alt="vision" />
            }
        </GridStyle>
    )
}

export default Grid;

const GridStyle = Styled.div`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .title {
            position: relative;
            margin-bottom: 3rem;

            h3 {
                font-size: 2rem;
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
            font-weight: 400;
            line-height: 1.5;
            color: #000;
        }
    }

    img {
        width: 100%;
        height: auto;
    }
`;