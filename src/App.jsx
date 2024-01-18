import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
// import Services from './components/services/Services';
// import Resume from './components/resume/Resume';
// import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';


function App() {

  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        {/* <Services /> */}
        <Portfolio />
        {/* <Testimonials /> */}
        {/* <Resume /> */}
        {/* <Pricing /> */}
        <Blog/>
        <Contact />
      </main>
    </>
  );
}

export default App
