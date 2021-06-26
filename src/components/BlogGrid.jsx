import React from 'react'

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

// images
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import blog4 from '../assets/images/blog4.jpg'
import blog5 from '../assets/images/blog5.jpg'
import blog6 from '../assets/images/blog6.jpg'

// data
const data = [
    {
        imgUrl: blog1,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog2,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog3,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog4,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog5,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog6,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog1,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog2,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog3,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog4,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog5,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
    {
        imgUrl: blog6,
        title: 'Effect of Architecture on Global Warming',
        content: `Fringilla purus, vestibulum id turpis pulvinar quis ac. Pellentesque mattis accumsan ut sit sit sagittis. 
        Lobortis in parturient nulla scelerisque metus sagittis placerat aliquam convallis. Ac.`
    },
]

const BlogGrid = () => {
    return (
        <StyledBlog>
            <div className="mainTitle">
                News <br />Update
                <div className="line" />
            </div>

            <div className="grid">
                {
                    data.map(({ imgUrl, title, content }) => (
                        <Link to="/blog/jjkdf">
                            <div className="card">
                                <img src={imgUrl} alt={title} />
                                <div className="title">{title}</div>
                                <div className="content">{content}</div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </StyledBlog>
    )
}

export default BlogGrid;

const StyledBlog = Styled.section`
    width: 100%;
    padding: 3rem 6%;
    margin-bottom: 7rem;

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

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min-content, 370px));
        grid-gap: 2rem;
        margin-top: 4rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 2rem;
        }

        a {
            text-decoration: none;
        }

        .card {
            width: 100%;
            
            img {
                width: 100%;
            }

            .title {
                font-size: 1.5rem;
                font-weight: 600;
                color: #00052E;
                line-height: 1.4;
                margin-bottom: 1rem;
            }

            .content {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #444;
            }
        }
    }
`;