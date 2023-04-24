import Hero from './components/hero/hero';
import About from './components/about';
import Skill from './components/skills';
import Work from './components/work';
import Projects from './components/projects/projects';
import Footer from './components/footer';
import Credit from './components/credit';
import Blog from './components/blog';

export default function page() {
    return (
        <>
            <Hero />
            <About />
            <Work />
            <Skill />
            <Projects />
            <Blog />
            <Footer />
            <Credit />
        </>
    )
}
