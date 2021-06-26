import React from 'react';

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/images/logo.png';

import { IoIosCall } from 'react-icons/io';
import { SiMailDotRu } from 'react-icons/si';

const Footer = () => {
    return (
        <FooterStyled>
            <div className="grid">
                <div className="intro">
                    <img src={logo} alt="logo" className="logo" />
                    <p>
                        Faucibus laoreet imperdiet ultricies massa neque, ac feugiat feugiat. 
                        Habitant rhoncus fermentum purus fermentum. Habitant sit semper ac 
                        vel sed quis quam. Eu mauris viverra fringilla ac. Mattis ante 
                        maecenas dolor quam molestie.
                    </p>
                </div>

                <div className="nav">
                    <div className="tilt">NAVIGATION</div>
                    <div className="linkGrid">
                        <Link to="/">Home</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/blog">Blogs</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>

                <div className="form">
                    <div className="tilt">NEWSLETTER</div>

                    <form>
                        <input type="text" />
                        <button type="submit">Submit</button>
                    </form>

                    <div className="newsGrid">
                        <div className="contact">
                            <IoIosCall className="icon" />
                            <div className="info">
                                <h6>Contact</h6>
                                <h2>07033203314  (44)07926175517</h2>
                            </div>
                        </div>
                        <div className="contact">
                            <SiMailDotRu className="icon" />
                            <div className="info">
                                <h6>Send Mail</h6>
                                <h2>admin@aridanconstruction.com</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footnote">
                © Copyright 2020. All Rights Reserved.
            </div>
        </FooterStyled>
    )
}

export default Footer;

const FooterStyled = Styled.footer`
    width: 100%;
    max-width: 100vw;
    padding: 3rem 6%;
    background: #00052E;
    border-top: 8px solid #FDB900;

    .grid {
        display: grid;
        grid-template-columns: 3fr 2fr 3fr;

        @media (max-width: 768px) {
            grid-template-columns: 100%;
        }

        .intro {
            width: 100%;

            .logo {
                width: 135px;
                height: auto;
                margin-bottom: 1rem;
            }

            p {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #DCDCDC;
                max-width: 370px;
            }
        }

        .nav {
            .tilt {
                font-size: 1.5rem;
                font-weight: 700;
                color: #fff;
                text-transform: uppercase;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
            }

            .linkGrid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: .5rem;

                a {
                    color: #DCDCDC;
                    font-size: 1rem;
                    font-weight: 400;
                    text-decoration: none;
                    margin-bottom: 1rem;

                    &:hover {
                        color: #FDB900;
                    }
                }
            }
        }

        .form {
            width: 100%;

            .tilt {
                font-size: 1.5rem;
                font-weight: 700;
                color: #fff;
                text-transform: uppercase;
                margin-top: 1.5rem;
                margin-bottom: 1rem;
            }

            form {
                width: 100%;
                height: 56px;
                position: relative;

                input {
                    width: 100%;
                    height: 100%;
                    outline: none;
                    border: 2px solid #B2B2B2;
                    background: none;
                    padding-left: 1rem;
                    padding-right: 120px;
                }

                button {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 120px;
                    height: 100%;
                    background: #FDB900;
                    color: #000531;
                    border: none;
                    outline: none;
                    font-size: 1rem;
                    font-weight: 700;
                }
            }

            .newsGrid {
                width: 100%;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: .5rem;
                margin-top: 1.5rem;

                @media (max-width: 768px) {
                    grid-template-columns: 100%;
                }

                .contact {
                    display: grid;
                    grid-template-columns: 10% 90%;

                    .icon {
                        font-size: 1.5rem;
                        color: #fff;
                    }

                    .info {
                        margin-left: .5rem;

                        h6 {
                            font-size: .5rem;
                            font-weight: 600;
                            color: #fff;
                            margin-bottom: .7rem;
                        }

                        h2 {
                            font-size: .9rem;
                            color: #fff;
                            line-height: 1.5;
                        }
                    }
                }
            }
        }
    }

    .footnote {
        width: 100%;
        margin-top: 1.5rem;
        padding-top: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        border-top: 2px solid rgba(253, 185, 0, 0.3);
    }
`;