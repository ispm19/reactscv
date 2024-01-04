import Nav from './components/Nav';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Footer1 from './components/Footer1';
import {NextUIProvider} from "@nextui-org/react";
import './App.css';

const App = () => {
  return (
    <NextUIProvider>
    <>

    <Nav />
    <Banner />
    <Projects />
    <Footer1/>
    </>
    </NextUIProvider>
  
  );
}

export default App;
