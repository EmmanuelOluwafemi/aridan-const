import React, {useRef, useState} from 'react';
import Styled from 'styled-components';

// React slick
import Slider from "react-slick";

import testimonialBg from '../assets/images/testimonialBg.jpg';

// images
import avatar from '../assets/images/avatar.png';
import quote from '../assets/images/quote.svg';

// icons
import { BiArrowBack } from 'react-icons/bi';
import { IoMdArrowForward } from 'react-icons/io';


const testimonialData = [
    {
        imgUrl: avatar,
        content: `A great building must begin with the immeasurable, must go through 
                  measurable means when it is being designed, and in the end 
                  must be unmeasured.`,
        name: 'Eng. Omotayo Oyerokun',
        position: 'Aridan Group of company'
    },
    {
        imgUrl: avatar,
        content: `A great building must begin with the immeasurable, must go through 
                  measurable means when it is being designed, and in the end 
                  must be unmeasured.`,
        name: 'Eng. Omotayo Oyerokun',
        position: 'Aridan Group of company'
    },
    {
        imgUrl: avatar,
        content: `A great building must begin with the immeasurable, must go through 
                  measurable means when it is being designed, and in the end 
                  must be unmeasured.`,
        name: 'Eng. Omotayo Oyerokun',
        position: 'Aridan Group of company'
    },
]

const Testimonial = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    }
    const previous = () => {
        slider.current.slickPrev();
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
        setCurrentSlide(next)
        },
    };

    return (
        <StyledTestimonial>
            <div className="sliderContainer">

                <img className="quote" src={quote} alt="quote" />
                <Slider ref={slider} className="slider" {...settings}>
                    {
                        testimonialData.map(({ imgUrl, name, content, position }) => (
                            <div className="card">
                                <div className="content">{content}</div>
                                <div className="user">
                                    <img src={imgUrl} alt={name} className="avatar" />
                                    <div className="userInfo">
                                        <div className="name">{name}</div>
                                        <div className="position">{position}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>

                <div className="buttonContainer">
                    <button className={currentSlide === 0 ? "button backward" : "button backward show"} onClick={previous}>
                        <BiArrowBack className="icon" />
                    </button>
                    <button className={currentSlide >= 2 ? "button forward" : "button forward show"} onClick={next}>
                        <IoMdArrowForward className="icon" />
                    </button>
                </div>
            </div>
            <div className="empty"></div>
        </StyledTestimonial>
    )
}

export default Testimonial;

const StyledTestimonial = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 400px;
    background: url(${testimonialBg});
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    overflow-x: hidden;
    padding: 7rem 6%;
    display: grid;
    grid-template-columns: 53% 47%;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }

    .sliderContainer {
        width: 100%;
        background: #fff;
        min-height: 340px;
        padding: 7rem 3rem;
        padding-top: 10rem;
        position: relative;

        @media (max-width: 768px) {
            padding: 5rem 1.5rem;
            padding-bottom: 7rem;
        }

        .quote {
            position: absolute;
            top: 3rem;
            left: 3rem;
            width: 10rem;
        }

        .card {
            .content {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #00052E;
                max-width: 450px;
            }

            .user {
                display: flex;
                align-items: center;
                margin-top: 2rem;

                img {
                    width: 64px;
                    height: auto;
                    margin-right: 1rem;
                }

                .userInfo {
                    .name {
                        font-size: 1.25rem;
                        font-weight: 700;
                        color: #00052E;

                        @media (max-width: 768px) {
                            font-size: 1rem;
                        }
                    }

                    .position {
                        font-size: 1rem;
                        font-weight: 400;
                        color: #00052E;
                        margin-top: .4rem;

                        @media (max-width: 768px) {
                            font-size: .8rem;
                        }
                    }
                }
            }
        }

        .buttonContainer {
            position: absolute;
            bottom: 2rem;
            right: 4rem;

            @media (max-width: 768px) {
                right: 2rem;
            }

            .button {
                background: #DCDCDC;
                color: #000747;
                outline: none;
                border: none;
                padding: 1.5rem 1rem;
                cursor: pointer;

                @media (max-width: 768px) {
                    padding: 1rem .7rem;
                }

                &.show {
                    background: #FDB900;
                }
            }
        }
    }
`;