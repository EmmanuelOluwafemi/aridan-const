import React from 'react';

import blogBg from '../assets/images/blogBg.jpg';
import SmallHero from '../components/SmallHero';
import BlogGrid from '../components/BlogGrid';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <>
            <SmallHero text="Blog" imgUrl={blogBg} />
            <BlogGrid />
            <Footer />
        </>
    )
}

export default Blog;
