import { useEffect } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import NotFound from './pages/404';
import About from './pages/about';
import AppLanding from './pages/appLanding';
import Blog from './pages/blog';
import BlogArticle from './pages/blogArticle';
import Consulting from './pages/consulting';
import Contact from './pages/contact';
import FAQs from './pages/FAQs';
import Home from './pages/home';
import Landing1 from './pages/landing1';
import Landing2 from './pages/landing2';
import Landing3 from './pages/landing3';
import PersonalPortfolio from './pages/personalPortfolio';
import Pricing from './pages/pricing';
import ProjectDetails from './pages/projectDetails';
import Projects from './pages/projects';
import SaasLanding from './pages/saasLanding';
import Services from './pages/services';


function Stact() {
  return (
    <>
      <Helmet>
        <title>Prob Nothing - A remote workspace for every owner</title>    
        <meta
          name="description"
          content="Remote workspace platform enabling users to create, collaborate, and publish"
        />
      </Helmet>
      <div className="stact-container">
        <Router>
          <ScrollToTop/>
            <Routes>
              <Route path='/' element={<SaasLanding/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
        </Router>
      </div>
    </>
  );
}

const ScrollToTop = () => {
  const {pathname} = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null
}

export default Stact;