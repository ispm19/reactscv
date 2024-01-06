import Nav from './components/Nav';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer1 from './components/Footer1';
import {NextUIProvider} from "@nextui-org/react";
import Skills from './components/Skills';
import './App.css';

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

const App = () => {
  return (
    <NextUIProvider>
    <>

    <Nav />
    <Banner />
    <Projects />
    <Skills/>
    <Footer1/>
    </>
    </NextUIProvider>
  
  );
}

export default App;
