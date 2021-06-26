import React from 'react';

import Styled from 'styled-components';

import ContactBackground from '../../assets/images/ContactBackground.jpg';

const Contact = () => {
    return (
        <StyledContact>
            <div className="titleful">
                <p>
                    Book an Appointment with <span>Us.</span>
                </p>
            </div>

            <div className="formContainer">
                <form>
                    <div className="inputGroup">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="inputGroup">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <div className="buttonContainer">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </StyledContact>
    )
}

export default Contact;

const StyledContact = Styled.section`
    width: 100%;
    max-width: 100vw;
    margin: 3rem 0;
    padding: 3rem 6%;
    display: grid;
    background-image: url(${ContactBackground});
    background-repeat: no-repeat;
    background-size: cover;
    grid-template-columns: 4fr 6fr;

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }

    .titleful {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-right: 5rem;

        @media (max-width: 768px) {
            padding-right: 0;
        }
            
        p {
            font-size: 3rem;
            font-weight: 700;
            line-height: 1.5;
            color: #fff;

            @media (max-width: 768px) {
                font-size: 2rem;
                line-height: 1.3;
                text-align: center;
            }

            span {
                color: #FDB900;
            }
        }
    }

    .formContainer {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        form {
            width: 100%;
            padding: 3rem 6rem;
            background: #fff;

            @media (max-width: 768px) {
                padding: 3rem 2rem;
            }

            .inputGroup {
                width: 100%;
                margin-bottom: 2rem;

                label {
                    display: block;
                    font-size: 1rem;
                    color: #8F8F8F;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                input, textarea {
                    width: 100%;
                    height: 56px;
                    padding: 0 1rem;
                    outline: none;
                }

                textarea {
                    height: 140px;
                    padding: 1rem;
                }
            }

            .buttonContainer {
                display: flex;
                justify-content: flex-end;

                @media (max-width: 768px) {
                    justify-content: center;
                }
            }

            button {
                padding: 1rem 3rem;
                background: #FDB900;
                color: #000531;
                font-size: 1rem;
                font-weight: 700;
                border: none;
                cursor: pointer;
            }
        }
    }

`