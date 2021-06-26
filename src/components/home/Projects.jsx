import React, {useState, useEffect} from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

// images
import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import { LinkButton } from '../Button';

const projectData = [
    {
        imgUrl: project1,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'Pre-Constrction',
    },
    {
        imgUrl: project2,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'General Construction',
    },
    {
        imgUrl: project3,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'Plumbering',
    },
    {
        imgUrl: project1,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'Painting',
    },
    {
        imgUrl: project2,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'Painting',
    },
    {
        imgUrl: project3,
        title: 'Miami Gardens',
        location: 'Abeokuta',
        type: 'General Construction',
    }

]

const Projects = ({seemore}) => {

    const [data, setData] = useState([])

    useEffect(() => {
        setData(projectData)
    }, [setData])

    const FilterData = (type) => {
        return projectData.filter((project) => {
            return project.type === type;
        });
    }

    return (
        <StyledProject>
            <div className="heading">
                <div className="title">
                    <h3>OUR PROJECTS</h3>
                    <h1>Some of our Projects.</h1>
                    <div className="line"></div>
                </div>

                <div className="sideLink">
                    <div 
                        className="list"
                        onClick={() => {
                            setData(FilterData('Pre-Constrction'))
                        }}
                    >
                        Pre-Constrction
                        <div className="line"></div>
                    </div>
                    <div 
                        className="list"
                        onClick={() => {
                            setData(FilterData('General Construction'))
                        }}
                    >
                        General Construction
                        <div className="line"></div>
                    </div>
                    <div 
                        className="list"
                        onClick={() => {
                            setData(FilterData('Plumbering'))
                        }}
                    >
                        Plumbering
                        <div className="line"></div>
                    </div>
                    <div 
                        className="list"
                        onClick={() => {
                            setData(FilterData('Painting'))
                        }}
                    >
                        Painting
                        <div className="line"></div>
                    </div>
                </div>
            </div>

            <div className="grid">
                {
                    data.map(({ imgUrl, title, location }) => (
                        <Link to="/project/djkf">
                            <div className="productCard">
                                <img src={imgUrl} alt={title} />
                                <div className="bottomContent">
                                    <div className="title">{title}</div>
                                    <div className="location">{location}</div>
                                </div>
                                <div className="bottomLine"></div>
                            </div>
                        </Link>
                    ))
                }
            </div> 

            {seemore && <div className="buttonContainer">
                <LinkButton text="See More" link="/projects" icon />
            </div>}
        </StyledProject>
    )
}

export default Projects;

const StyledProject = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    padding: 5rem 6%;
    
    .heading {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }
        
        .title {
            width: 280px;

            h3 {
                font-size: 1.5rem;
                font-weight: 700;
                text-transform: uppercase;
                color: #FDB900;
                margin-bottom: 1.5rem;

                @media (max-width: 768px) {
                    font-size: 1rem;
                }
            }

            h1 {
                font-size: 2rem;
                font-weight: 700;
                text-transform: capitalize;
                margin-bottom: 1rem;

                @media (max-width: 768px) {
                    font-size: 1.5rem;
                    margin-bottom: .3rem;
                }
            }

            .line {
                width: 200px;
                height: 8px;
                background: #FDB900;

                @media (max-width: 768px) {
                    height: 4px;
                    width: 120px;
                }
            }
        }

        .sideLink {
            display: flex;

            @media (max-width: 768px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: .7rem;
                margin-top: 2rem;
            }

            .list {
                font-size: 1rem;
                font-weight: 700;
                color: #00052E;
                line-height: 20px;
                position: relative;
                display: inline;
                margin-left: 2rem;
                cursor: pointer;

                @media (max-width: 768px) {
                    font-size: .8rem;
                    margin-left: 0;
                }

                &.active, &:hover {
                    position: relative;

                    .line {
                        position: absolute;
                        bottom: -8px;
                        left: 0;
                        width: 50px;
                        height: 6px;
                        background: #FDB900;
                        display: inline;
                    }
                }
            }
        }
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 400px));
        grid-gap: 2rem;
        margin-top: 4rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: .5rem;
        }

        .productCard {
            width: 100%;
            position: relative;

            img {
                width: 100%;
                height: auto;
            }

            .bottomContent {
                position: absolute;
                bottom: 0;
                z-index: 1;
                padding: 2rem;

                .title {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #fff;
                }

                .location {
                    font-size: 1rem;
                    font-weight: 400;
                    color: #fff;
                    margin-top: .6rem;
                }
            }

            .bottomLine {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 70%;
                height: 8px;
                background: #FDB900;
            }
        }
    }

    .buttonContainer {
        display: flex;
        justify-content: flex-end;
        margin: 3rem 0;
    }
`;