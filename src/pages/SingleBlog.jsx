import React from 'react';

import Styled from 'styled-components';

import singleBlogBg from '../assets/images/project/singleBlogBg.jpg';
import Header from '../components/Header';

import avatar from '../assets/images/avatar.png';
import projectImg from '../assets/images/projectImg.jpg';
import Footer from '../components/Footer';

const SingleBlog = () => {
    return (
        <>
            <StyledHeroBlog>
                <Header />
                <div className="bottom-content">
                    <div className="title">
                        Effect of Architecture on Global Warming
                    </div>
                    <div className="user-details">
                        <div className="user">
                            <img src={avatar} alt="avatar" />
                            <div className="name">James Micheal</div>
                        </div>

                        <div className="time">2 days ago</div>
                    </div>
                </div>
            </StyledHeroBlog>
            <Content className="top-margin">
                <h3>
                    A leading developer of A grade commercial, industrial and residential 
                    projects in USA. Since foundation we doubled turnover year on year, with 
                    its staff numbers swelling accordingly.
                </h3>

                <p>
                Our airfreight staff attaches great importance to customizing the booking process 
                for our customers. That’s why we strive to find the air freight solution that best 
                suits your needs. We’ll ask you when the freight is available, what the required 
                delivery date is, and if there’s potential to save on time or cost. Your answers 
                to these and other questions help us decide if you should book the air 
                freight as direct. <br /><br />
                We have more than twenty years of experience. During that time, we’ve become 
                expert in freight transportation by air and all its related services. We work 
                closely with all major airlines around the world. <br /><br />

                Our airfreight staff attaches great importance to customizing the booking process 
                for our customers. That’s why we strive to find the air freight solution that best 
                suits your needs. We’ll ask you when the freight is available, what the required 
                delivery date is, and if there’s potential to save on time or cost. Your answers to 
                these and other questions help us decide if you should book the air freight as direct.
                We have more than twenty years of experience. During that time, we’ve become expert 
                in freight transportation by air and all its related services. We work closely 
                with all major airlines around the world. <br /><br />

                Our airfreight staff attaches great importance to customizing the booking process for 
                our customers. That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, and if there’s 
                potential to save on time or cost. Your answers to these and other questions help us decide if 
                you should book the air freight as direct.
                We have more than twenty years of experience. During that time, we’ve become expert in freight 
                transportation by air and all its related services. We work closely with all major airlines 
                around the world.
                </p>
            </Content>

            <Image src={projectImg} alt="project" />

            <Content>
                <h3>
                    Lorem Ipsum
                </h3>

                <p>
                That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, 
                and if there’s potential to save on time or cost. Your answers to these and other 
                questions help us decide if you should book the air freight as direct.
                During that time, we’ve become expert in freight transportation by air and all its related 
                services. We work closely with all major.

                <br /><br />

                airlines around the world That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, and if there’s potential 
                to save on time or cost. Your answers to these and other questions help us decide 
                if you should book the air freight as direct. <br />
                During that time, we’ve become expert in freight transportation by air and all its related services. 
                We work closely with all major airlines around the world. <br /><br />

                That’s why we strive to find the air freight solution that best suits your needs. We’ll ask you when the 
                freight is available, what the required delivery date is, and if there’s potential to save on time or cost. 
                Your answers to these and other questions help us decide if you should book the air freight as direct.
                During that time, we’ve become expert in freight transportation by air and all its related services. We work closely 
                with all major airlines around the world.
                </p>
            </Content>
            <Content>
                <h3>
                    Lorem Ipsum
                </h3>

                <p>
                That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, 
                and if there’s potential to save on time or cost. Your answers to these and other 
                questions help us decide if you should book the air freight as direct.
                During that time, we’ve become expert in freight transportation by air and all its related 
                services. We work closely with all major.

                <br /><br />

                airlines around the world That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, and if there’s potential 
                to save on time or cost. Your answers to these and other questions help us decide 
                if you should book the air freight as direct. <br />
                During that time, we’ve become expert in freight transportation by air and all its related services. 
                We work closely with all major airlines around the world. 
                </p>
            </Content>
            <Image src={projectImg} alt="project" />
            <Content>
                <p>
                That’s why we strive to find the air freight solution that best suits your needs. 
                We’ll ask you when the freight is available, what the required delivery date is, 
                and if there’s potential to save on time or cost. Your answers to these and other 
                questions help us decide if you should book the air freight as direct.
                During that time, we’ve become expert in freight transportation by air and all its related 
                services. We work closely with all major.
                </p>
            </Content>
            <Footer />
        </>
    )
}

export default SingleBlog;

const StyledHeroBlog = Styled.section`
    width: 100%;
    max-width: 100vw;
    min-height: 300px;
    position: relative;
    background-image: url(${singleBlogBg});
    background-size: cover;
    background-position: cover;
    padding: 0 6%;

    .bottom-content {
        position: absolute;
        bottom: -200px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 844px;
        padding: 4rem 5rem;
        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.25);
        background: #fff;

        @media (max-width: 768px) {
            padding: 3rem 2rem;
        }

        .title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #00052E;
            margin-bottom: 2rem;

            @media (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        .user-details {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .user {
                display: flex;
                align-items: center;

                .avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;

                    @media (max-width: 768px) {
                        width: 32px;
                        height: 32px;
                    }
                }

                .name {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #000531;
                    margin-left: 8px;

                    @media (max-width: 768px) {
                        font-size: .8rem;
                    }
                }
            }

            .time {
                font-size: 1rem;
                font-weight: 600;
                color: #000531;

                @media (max-width: 768px) {
                    font-size: .8rem;
                }
            }
        }
    }
`;

const Content = Styled.section`
    max-width: 844px;
    margin: 5rem auto;

    @media (max-width: 768px) {
        padding: 0 6%;
    }

    &.top-margin {
        margin-top: 20rem;
    }
    
    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        color: #000531;
        line-height: 1.5;
        margin-bottom: 3rem;

        @media (max-width: 768px) {
            font-size: 1.2rem;
            line-height: 1.7;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        color: #444444;
    }
`;

const Image = Styled.img`
    width: 100%;
    height: auto;
`