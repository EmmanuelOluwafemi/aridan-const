import React from 'react';

import Styled from 'styled-components';

const Terms = () => {
    return (
        <StyledTerms>
            <div className="item">
                <div className="mainTitle">
                    Our teams are highly experienced in:
                    <div className="line" />
                </div>

                <ul>
                    <li>Cross border valuations: including portfolio valuation loan security, securitisations, mergers and acquisitions.</li>
                    <li>Single country valuations: including competitive market insight, government activity, infrastructure and building regulations.</li>
                    <li>Research-led valuations: including portfolio valuation, loan security, merger and acquisition and large multi-phase developments</li>
                    <li>Consultancy advisory services: including viability studies, optimum product definition, research led analysis.</li>
                </ul>
            </div>
            <div className="item">
                <div className="mainTitle">
                    Our Process
                    <div className="line" />
                </div>

                <ul>
                    <li>Fusce sit amet orci quis arcu vestibulum vestibulum..</li>
                    <li>Amet orci quis arcu vestibulum vestibulum.</li>
                    <li>Orci quis arcu vestibulum vestibulum.</li>
                    <li>Fuscesit amet orci quis arcu vestibulum vestibulum.</li>
                </ul>
            </div>
        </StyledTerms>
    )
}

export default Terms;

const StyledTerms = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    .item {
        width: 100%;

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

        ul {
            li {
                font-size: 1rem;
                font-weight: 400;
                color: #000531;
                margin-left: 1rem;
                margin-bottom: 1rem;
            }
        }
    }
`