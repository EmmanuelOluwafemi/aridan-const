import { lazy, Suspense } from 'react';

// External css
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

// Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const MainContact = lazy(() => import('./pages/Contact'));
const MainProjects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const About = lazy(() => import('./pages/About'));
const SingleProject = lazy(() => import('./pages/SingleProject'));
const SingleBlog = lazy(() => import('./pages/SingleBlog'));

function App() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<p>Loading....</p>}>
          <Route exact path="/blog/:title">
            <SingleBlog />
          </Route>
          <Route exact path="/project/:title">
            <SingleProject />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/projects">
            <MainProjects />
          </Route>
          <Route exact path="/contact">
            <MainContact />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Suspense>
      </Switch>
    </Router>
  );
}

export default App;
