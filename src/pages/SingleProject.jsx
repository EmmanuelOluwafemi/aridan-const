import React from 'react';

import Styled from 'styled-components';
import Header from '../components/Header';

import helmet from '../assets/images/helmet.svg';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';

// images
import projectBg from '../assets/images/projectBg.jpg';
import singleBg from '../assets/images/project/singleBg.jpg';
import project1 from '../assets/images/project/project1.jpg';
import project2 from '../assets/images/project/project2.jpg';
import project3 from '../assets/images/project/project3.jpg';
import project4 from '../assets/images/project/project4.jpg';
import project5 from '../assets/images/project/project5.jpg';
import project6 from '../assets/images/project/project6.jpg';

import contract from '../assets/images/project/contract.svg';
import engineer from '../assets/images/project/engineer.svg';
import implementation from '../assets/images/project/implementation.svg';

const SingleProject = () => {
    return (
        <>
            <StyledHero>
                <Header />
                <div className="project-type">
                    <div className="project-container">
                        <img src={helmet} alt="helmet" />
                    </div>
                </div>
            </StyledHero>

            {/* Project Title Content */}
            <ProjectContent>
                <div className="title">The Fallingwater House</div>
                <div className="sub-title">Duplex</div>
                <p>
                    A leading developer of A grade commercial, industrial and residential projects 
                    in USA. Since foundation we doubled turnover year on year, with its staff numbers 
                    swelling accordingly.
                </p>

                <div className="grid">
                    <img src={project1} alt="project" />
                    <img src={project2} alt="project" />
                    <img src={project3} alt="project" />
                    <img src={project4} alt="project" />
                    <img src={project5} alt="project" />
                    <img src={project6} alt="project" />
                </div>
            </ProjectContent>

            {/* Overview */}

            <Overview>
                <div className="card">
                    <h2>Overview</h2>
                    <p>
                        Our airfreight staff attaches great importance to customizing the booking process 
                        for our customers. That’s why we strive to find the air freight solution that best suits 
                        your needs. We’ll ask you when the freight is available, what the required delivery date is, 
                        and if there’s potential to save on time or cost. Your answers to these and other questions 
                        help us decide if you should book the air freight as direct.
                        We have more than twenty years of experience. During that time, we’ve become expert in freight 
                        transportation by air and all its related services. We work closely with all 
                        major airlines around the world.
                    </p>
                </div>

                <div className="card">
                    <div className="listGrid">
                        <div className="label">Client:</div>
                        <div className="cont">7oroof Network</div>
                    </div>
                    <div className="listGrid">
                        <div className="label">Location:</div>
                        <div className="cont">Tanta, Algharbia, Egypt</div>
                    </div>
                    <div className="listGrid">
                        <div className="label">Services:</div>
                        <div className="cont">Construction, Building, Architecture</div>
                    </div>
                </div>
            </Overview>

            {/* Boundary */}
            <Boundary>
                <div className="card">
                    <div className="top-title">How We Work In Three Easy Steps</div>
                    <div className="title">Pushing The Boundaries Of What’s Possible.</div>
                    <p>
                        Yet those that embrace change are thriving, building bigger, better, 
                        faster, and stronger products than ever before. You are helping lead 
                        the charge; we can help you build on your past and prepare future 
                        changing faster than ever before.
                    </p>

                    <div className="iconsContainer">
                        <div className="iconMenu first">
                            <img src={contract} alt="contract" className="icon" />
                            <p>Evaluation & <br />Signing Of The <br />Contract.</p>
                        </div>
                        <div className="iconMenu second">
                            <img src={engineer} alt="engineer" className="icon" />
                            <p>Preparation Of<br />The Work Plan.</p>
                        </div>
                        <div className="iconMenu third">
                            <img src={implementation} alt="contract" className="icon" />
                            <p>Implementation<br />Of Quality<br />Works..</p>
                        </div>
                    </div>
                </div>
            </Boundary>

            {/* Challenge */}

            <Overview className="big">
                <div className="card">
                    <h2>Challenge</h2>
                    <p>
                        However, the scope of Dow’s needs had only been accomplished on an inter-regional scale. 
                        What Dow wanted now was seamless information management and transportation logistics.
                        That’s why we strive to find the air freight solution that best suits your needs. 
                        We’ll ask you when the freight is available, what the required delivery date is, 
                        and if there’s potential to save on time or cost.
                        During that time, we’ve become expert in freight transportation by air and all its related services. 
                        We work closely with all major airlines around the world.
                    </p>
                </div>

                <div className="card">
                    <ul>
                        <li>Quality Control System</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>Highly Professional Staff</li>
                        <li>Accurate Testing Processes</li>
                        <li>Unrivalled workmanship</li>
                    </ul>
                </div>
            </Overview>

            {/* Testimonial */}
            <Testimonial />

            {/* footer */}
            <Footer />
        </>
    )
}

export default SingleProject;

const StyledHero = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 300px;
    padding: 0 6%;
    position: relative;
    background-image: url(${projectBg});
    background-size: cover;
    background-position: cover;

    .project-type {
        position: absolute;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;

        .project-container {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 2px solid #FDB900;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 100px;
                height: auto;
            }
        }
    } 
`

const ProjectContent = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;
    padding-top: 7rem;

    .title {
        font-size: 2rem;
        font-weight: 700;
        color: #00052E;
        text-align: center;
    } 

    .sub-title {
        font-size: 1rem;
        font-weight: 700;
        color: #FDB900;
        text-align: center;
        margin-top: 12px;
        margin-bottom: 3rem;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        color: #00052E;
        text-align: center;
        max-width: 700px;
        line-height: 1.5;
        margin: 0 auto;
    }

    .grid {
        width: 100%;
        max-width: 1100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 4rem auto;

        img {
            width: 100%;
            height: auto;
            max-width: 350px;
            margin-bottom: 2rem;
        }
    }
`
const Overview = Styled.section`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }

    &.big {
        padding: 7rem 6%;
    }

    .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

        h2 {
            font-size: 2rem;
            font-weight: 700;
            color: #000531;
            margin-bottom: 2rem;
        }

        p {
            font-size: 1rem;
            font-weight: 600;
            color: #444444;
            line-height: 1.5;
        }

        ul {
            margin-top: 2rem;

            li {
                font-size: 1rem;
                font-weight: 700;
                color: #444444;
                margin-bottom: 2rem;
                margin-left: 1rem;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }

        .listGrid {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;

            .label {
                font-size: 1.5rem;
                font-weight: 700;
                color: #000531;
                margin-right: 2rem;
            }

            .cont {
                font-size: 1rem;
                font-weight: 600;
                color: #444444;
            }
        }
    }
`

const Boundary = Styled.section`
    width: 100%;
    max-width: 100vw;
    background-image: url(${singleBg});
    background-position: right;
    background-size: cover;
    display: grid;
    grid-template-columns: 60% 40%;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }

    .card {
        margin: 3rem 0;
        padding: 3rem;
        padding-left: 12%;
        width: 100%;
        background: #fff;

        .top-title {
            font-size: 1rem;
            font-weight: 600;
            color: #fdb900;
            margin-bottom: 1.5rem;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        .title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.5;
            color: #00052E;
            margin-bottom: 1rem;
            max-width: 500px;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        p {
            font-size: 1rem;
            font-weight: 400;
            color: #858585;
            line-height: 1.5rem;

            @media (max-width: 768px) {
                text-align: center;
            }
        }

        .iconsContainer {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;

            @media (max-width: 768px) {
                flex-direction:  column;
                align-items: center;
            }

            .iconMenu {
                display: flex;
                flex-direction: column;
                margin-top: 2rem;

                .icon {
                    width: 4rem;
                    height: auto;
                    margin-bottom: 1rem;
                }

                p {
                    font-size: 1.3rem;
                    font-weight: 600;
                    color: #000747;
                    line-height: 1.4;
                }

                &.first {
                    align-items: flex-start;

                    p {
                        text-align: left;
                    }

                    @media (max-width: 768px) {
                        align-items: center;
                        justify-content: center;

                        p {
                            text-align: center;
                        }
                    }
                }

                &.second {
                    align-items: center;

                    p {
                        text-align: center;
                    }

                    @media (max-width: 768px) {
                        align-items: center;
                        justify-content: center;

                        p {
                            text-align: center;
                        }
                    }
                }

                &.third {
                    align-items: flex-end;

                    p {
                        text-align: right;
                    }

                    @media (max-width: 768px) {
                        align-items: center;
                        justify-content: center;

                        p {
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
`