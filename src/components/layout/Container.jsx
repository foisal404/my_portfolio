import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";


const Container = () => {
    return (
        <>
            <Home />
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Container;