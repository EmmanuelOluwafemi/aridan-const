import React from 'react';

import Styled from 'styled-components';

const Steps = () => {
    return (
        <StyledSteps>
            <div className="mainTitle">
                Steps
                <div className="line" />
            </div>
            <div className="grid">
                <div className="card active">
                    <div className="num">1</div>
                    <div className="title">Establishment / Strategy</div>
                    <ul>
                        <li>Understand investment drivers</li>
                        <li>Identify market opportunity</li>
                        <li>Create distinct strategy</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="num">2</div>
                    <div className="title">Implementation</div>
                    <ul>
                        <li>Transaction origination</li>
                        <li>Transaction execution</li>
                        <li>Detailed due diligence</li>
                        <li>Optimal investment</li>
                        <li>Exit</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="num">3</div>
                    <div className="title">Ongoing Monitoring and Management</div>
                    <ul>
                        <li>Portfolio management</li>
                        <li>Asset enhancement and value</li>
                    </ul>
                </div>
            </div>
        </StyledSteps>
    )
}

export default Steps;

const StyledSteps = Styled.section`
    width: 100%:
    max-width: 100vw;
    padding: 2rem 6%;
    min-height: 400px;

    .mainTitle {
        position: relative;
        margin: 3rem 0;
        margin-bottom: 8rem;
        font-size: 1.5rem;
        font-weight: 700;

        .line {
            position: absolute;
            bottom: -12px;
            height: 6px;
            width: 80px;
            background: #FDB900;
        }
    }

    .grid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .card {
        position: relative;
        width: 100%;
        max-width: 324px;
        height: 276px;
        padding: 50px 24px;
        background: #FFFFFF;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
            margin-bottom: 4rem;
        }

        .num {
            position: absolute;
            top: -27px;
            left: 24px;
            width: 56px;
            height: 56px;
            background: #FDB900;
            color: #00052E;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: 700;
        }

        .title {
            font-size: 1rem;
            font-weight: 700;
            color: #000747;
            margin-bottom: 2rem;
        }

        ul {
            li {
                font-size: .9rem;
                margin-top: .7rem;
                margin-left: 1rem;
                color: #000747;
            }
        }

        &.active {
            background: #000747;

            .title {
                color: #fff;
            }

            ul {
                li {
                    color: #fff;
                }
            }
        }
    }
`;